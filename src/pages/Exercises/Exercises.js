import Stack from "@mui/joy/Stack";
import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { useEffect, useState } from "react";
import { Score } from "./Score";
import { Exercise } from "./Exercise";
import { Options } from "./Options";


const Exercises = () => {
  const [score, setScore] = useState([0, 0]);
  const [exercise, setExercise] = useState([]);
  const [clearExerciseState, setClearExerciseState] = useState(false);

  const handleScore = (result) => {
    setScore([score[0] + result[0], score[1] + result[1]]);
  };

  const clearState = () => {
    setScore([0, 0]);
    setClearExerciseState(true);
  };

  const generateExercise = (exerciseType, exerciseLength, elements) => {
    const { action } = exerciseType;
    if (action === "recognize") {
      const { question, answer } = exerciseType;
      createRecognize(elements, exerciseLength, {
        question,
        answer,
      });
    } else if (action === "write") {
      console.log("write action !!");
    }
    return;
  };

  const createRecognize = (elements, exerciseLength, key) => {
    const fullList = shuffle(elements);
    const exerciseList = fullList.slice(0, exerciseLength);
    const exercise = exerciseList.map((element, index) => {
      return {
        question: element[key.question],
        answers: findAnswers(exerciseList, fullList, index).map(
          (element) => element[key.answer]
        ),
        response: element[key.answer],
      };
    });
    setExercise(exercise);
  };

  const shuffle = (list) => {
    return list
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const findAnswers = (exerciseList, fullList, index) => {
    const current = exerciseList[index];
    let listWithoutCurrent = removeDuplicate(fullList, current);
    const answer1 = shuffle(listWithoutCurrent).slice(0, 1);
    let listWithoutAnswer1 = removeDuplicate(listWithoutCurrent, answer1[0]);
    const answer2 = shuffle(listWithoutAnswer1).slice(0, 1);
    return shuffle([current].concat(answer1, answer2));
  };

  const removeDuplicate = (list, element) =>
    list.filter((item) => {
      if (item.romaji !== element.romaji) return item;
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
