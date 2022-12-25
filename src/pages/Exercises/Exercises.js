import Stack from "@mui/joy/Stack";
import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { useState } from "react";
import { Score } from "./Score";
import { Exercise } from "./Exercise";
import { Options } from "./Options";
import { defaultExerciseType } from "data/options";

const Exercises = () => {
  const [score, setScore] = useState([0, 0]);
  const [exercise, setExercise] = useState([]);
  const [exerciseDisplay, setExerciseDisplay] = useState(
    defaultExerciseType.value.display
  );
  const [clearExerciseState, setClearExerciseState] = useState(false);

  const handleScore = (result) => {
    setScore([score[0] + result[0], score[1] + result[1]]);
  };

  const clearState = () => {
    setScore([0, 0]);
    setClearExerciseState(true);
  };

  const generateExercise = (exerciseType, exerciseLength, elements) => {
    const { display, question, answer } = exerciseType;
    if (display === "recognize") {
      createRecognize(
        elements,
        exerciseLength,
        {
          question,
          answer,
        },
        display
      );
    } else if (display === "write") {
      createWrite(elements, exerciseLength, { question, answer }, display);
    } else if (display === "puzzle") {
      createPuzzle(elements, exerciseLength, { question, answer }, display);
    }
    return;
  };

  const createWrite = (elements, exerciseLength, key, display) => {
    const fullList = shuffle(elements);
    const exerciseList = fullList.slice(0, exerciseLength);
    const exercise = exerciseList.map((element) => {
      return {
        question: element[key.question],
        response:
          typeof element[key.answer] === "string"
            ? [element[key.answer]]
            : element[key.answer],
      };
    });
    setExercise(exercise);
    setExerciseDisplay(display);
  };

  const createPuzzle = (elements, exerciseLength, key, display) => {
    const fullList = shuffle(elements);
    const exerciseList = fullList.slice(0, exerciseLength);
    const exercise = exerciseList.map((element, index) => {
      return {
        question: element.multiple
          ? element[key.question][0]
          : element[key.question],
        answers: findPuzzleAnswers(exerciseList, fullList, index),
        response: element[key.answer],
      };
    });
    setExercise(exercise);
    setExerciseDisplay(display);
  };

  const createRecognize = (elements, exerciseLength, key, display) => {
    const fullList = shuffle(elements);
    const exerciseList = fullList.slice(0, exerciseLength);
    const exercise = exerciseList.map((element, index) => {
      return {
        question: element[key.question],
        answers: findRecognizeAnswers(exerciseList, fullList, index).map(
          (element) => element[key.answer]
        ),
        response: element[key.answer],
      };
    });
    setExercise(exercise);
    setExerciseDisplay(display);
  };

  const shuffle = (list) => {
    return list
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const findPuzzleAnswers = (exerciseList, fullList, index) => {
    const current = exerciseList[index];
    let listWithoutCurrent = removeDuplicate(fullList, current, "char");
    let listWithSameKana = listWithoutCurrent.filter(
      (item) => item.kana === current.kana
    );
    const currentArray = current["char"].split("");
    const additionnal = shuffle(listWithSameKana).slice(0, 1);
    const additionnalArray = additionnal[0]["char"].split("");
    const shuffledArray = shuffle(currentArray.concat(additionnalArray)).map(
      (element, index) => {
        return {
          display: element,
          index,
        };
      }
    );
    return shuffledArray;
  };

  const findRecognizeAnswers = (exerciseList, fullList, index) => {
    const current = exerciseList[index];
    let listWithoutCurrent = removeDuplicate(fullList, current, "romaji");
    const answer1 = shuffle(listWithoutCurrent).slice(0, 1);
    let listWithoutAnswer1 = removeDuplicate(
      listWithoutCurrent,
      answer1[0],
      "romaji"
    );
    const answer2 = shuffle(listWithoutAnswer1).slice(0, 1);
    return shuffle([current].concat(answer1, answer2));
  };

  const removeDuplicate = (list, element, key) =>
    list.filter((item) => {
      if (item[key] !== element[key]) return item;
    });

  return (
    <>
      <div />
      <MainSection>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <Header title="Exercises" />
          <Score fail={score[0]} success={score[1]} total={exercise.length} />
          <Exercise
            exercise={exercise}
            exerciseDisplay={exerciseDisplay}
            handleScore={handleScore}
            clearExerciseState={clearExerciseState}
            updateExerciseState={() => setClearExerciseState(false)}
          />
          <Options
            generateExercise={generateExercise}
            clearState={clearState}
          />
        </Stack>
      </MainSection>
      <div />
    </>
  );
};

export { Exercises };
