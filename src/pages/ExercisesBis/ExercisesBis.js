import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { useEffect, useState } from "react";
import { hiragana, hiraganaAccents } from "data/hiragana";
import { katakana, katakanaAccents } from "data/katakana";

const ExercisesBis = () => {
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
    if (exerciseType === "recognizeKana") {
      createRecognize(elements, exerciseLength, {
        question: "char",
        answer: "romaji",
      });
    } else if (exerciseType === "recognizeRomaji") {
      createRecognize(elements, exerciseLength, {
        question: "romaji",
        answer: "char",
      });
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
        key: `${element.romaji}-${element.char}`,
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

export { ExercisesBis };

const Score = (props) => {
  const { fail, success, total } = props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        width: "70%",
        margin: "0 auto",
      }}
    >
      <Chip variant="soft" color="danger">
        {fail}
      </Chip>
      <Chip variant="soft" color="success">
        {success}
      </Chip>
      <Chip variant="soft" color="info">
        {fail + success} / {total}
      </Chip>
    </Box>
  );
};

const Exercise = (props) => {
  const { exercise, handleScore, clearExerciseState, updateExerciseState } =
    props;

  const [index, setIndex] = useState(0);
  const [chosenButtonIndex, setChosenButtonIndex] = useState(null);
  const [success, setSuccess] = useState(null);

  const checkAnswer = (selected, selectionIndex) => {
    setChosenButtonIndex(selectionIndex);
    if (selected === exercise[index].response) {
      setSuccess(true);
      handleScore([0, 1]);
    } else {
      setSuccess(false);
      handleScore([1, 0]);
    }
    setTimeout(() => {
      const nextIndex = index + 1;
      if (!exercise[nextIndex]) return;
      setIndex(nextIndex);
      setChosenButtonIndex(null);
      setSuccess(false);
    }, 1000);
  };

  useEffect(() => {
    if (clearExerciseState) {
      setIndex(0);
      setChosenButtonIndex(null);
      setSuccess(null);
      updateExerciseState();
    }
  }, [clearExerciseState]);

  return (
    <Box variant="outlined" sx={{ display: "flex", userSelect: "none" }}>
      <Typography
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
        }}
      >
        {exercise.length && exercise[index].question}
      </Typography>
      <Divider orientation="vertical" sx={{ margin: "1em 2em 1em 0" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "1em",
        }}
      >
        {exercise.length &&
          exercise[index].answers.map((element, index) => {
            return (
              <Button
                variant={chosenButtonIndex === index ? "soft" : "outlined"}
                color={
                  chosenButtonIndex === index && success
                    ? "success"
                    : chosenButtonIndex === index && !success
                    ? "danger"
                    : "info"
                }
                disabled={chosenButtonIndex !== null}
                onClick={() => checkAnswer(element, index)}
                key={exercise[index].key}
              >
                {element}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

const Options = (props) => {
  const { generateExercise, clearState } = props;

  const dataExerciseLengths = [
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "10", value: 10 },
  ];
  const dataExerciseTypes = [
    { label: "Recognize Kana", value: "recognizeKana" },
    { label: "Recognize Rōmaji", value: "recognizeRomaji" },
  ];

  const [hiraganaChecked, setHiraganaChecked] = useState([true, true]);
  const [katakanaChecked, setKatakanaChecked] = useState([true, true]);
  const [exerciseLength, setExerciseLength] = useState(
    dataExerciseLengths[0].value
  );
  const [exerciseType, setExerciseType] = useState(dataExerciseTypes[0].value);

  const elements = () => {
    return hiraganaChecked
      .concat(katakanaChecked)
      .map((el, index) => {
        if (el) {
          if (index === 0) return hiragana;
          else if (index === 1) return hiraganaAccents;
          else if (index === 2) return katakana;
          else if (index === 3) return katakanaAccents;
        }
      })
      .filter((el) => el)
      .flat(1);
  };

  const handleGenerateExercise = () => {
    generateExercise(exerciseType, exerciseLength, elements());
    clearState();
  };

  useEffect(() => {
    generateExercise(exerciseType, exerciseLength, elements());
  }, []);

  const hiraganaOptions = (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 3, mt: 1, gap: 1 }}
    >
      <Checkbox
        size="sm"
        variant="soft"
        label="46 basics"
        checked={hiraganaChecked[0]}
        onChange={(event) =>
          setHiraganaChecked([event.target.checked, hiraganaChecked[1]])
        }
      />
      <Checkbox
        size="sm"
        variant="soft"
        label="Dakuten and Handakuten"
        checked={hiraganaChecked[1]}
        onChange={(event) =>
          setHiraganaChecked([hiraganaChecked[0], event.target.checked])
        }
      />
    </Box>
  );

  const katakanaOptions = (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 3, mt: 1, gap: 1 }}
    >
      <Checkbox
        size="sm"
        variant="soft"
        label="46 basics"
        checked={katakanaChecked[0]}
        onChange={(event) =>
          setKatakanaChecked([event.target.checked, katakanaChecked[1]])
        }
      />
      <Checkbox
        size="sm"
        variant="soft"
        label="Dakuten and Handakuten"
        checked={katakanaChecked[1]}
        onChange={(event) =>
          setKatakanaChecked([katakanaChecked[0], event.target.checked])
        }
      />
    </Box>
  );

  return (
    <Card
      variant="outlined"
      sx={{ display: "flex", justifyDirection: "column", gap: "1em" }}
    >
      <Button
        onClick={handleGenerateExercise}
        variant="outlined"
        disabled={
          !hiraganaChecked.concat(katakanaChecked).filter((el) => el === true)
            .length
        }
      >
        Start
      </Button>
      <Select
        onChange={(e, newValue) => setExerciseLength(newValue)}
        value={exerciseLength}
        size="sm"
      >
        {dataExerciseLengths.map(({ label, value }) => (
          <Option value={value} key={label}>
            {label}
          </Option>
        ))}
      </Select>
      <Select
        onChange={(e, newValue) => setExerciseType(newValue)}
        value={exerciseType}
        size="sm"
      >
        {dataExerciseTypes.map(({ label, value }) => (
          <Option value={value} key={label}>
            {label}
          </Option>
        ))}
      </Select>
      <Box>
        <Checkbox
          size="sm"
          variant="soft"
          label="Hiragana"
          sx={{ display: "flex" }}
          checked={hiraganaChecked[0] && hiraganaChecked[1]}
          indeterminate={hiraganaChecked[0] !== hiraganaChecked[1]}
          onChange={(event) =>
            setHiraganaChecked([event.target.checked, event.target.checked])
          }
        />
        {hiraganaOptions}
      </Box>
      <Box>
        <Checkbox
          size="sm"
          variant="soft"
          label="Katakana"
          sx={{ display: "flex" }}
          checked={katakanaChecked[0] && katakanaChecked[1]}
          indeterminate={katakanaChecked[0] !== katakanaChecked[1]}
          onChange={(event) =>
            setKatakanaChecked([event.target.checked, event.target.checked])
          }
        />
        {katakanaOptions}
      </Box>
    </Card>
  );
};
