import { useEffect, useState } from "react";
import { RecognizeDisplay } from "./RecognizeDisplay";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import styles from "./Exercise.module.css";
import { Button } from "@mui/joy";

const Exercise = (props) => {
  const {
    exercise,
    exerciseAction,
    handleScore,
    clearExerciseState,
    updateExerciseState,
  } = props;

  const [index, setIndex] = useState(0);
  const [success, setSuccess] = useState(null);

  // Specific to recognize
  const [chosenButtonIndex, setChosenButtonIndex] = useState(null);

  // Specific to write
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkAnswerRecognize = (selected, selectionIndex) => {
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

  const checkAnswerWrite = () => {
    setIsSubmitted(true);
    if (
      exercise[index].response.includes(
        inputValue.toLowerCase().replace(/\s+/g, "")
      )
    ) {
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
      setIsSubmitted(false);
      setSuccess(false);
      setInputValue("");
    }, 1000);
  };

  useEffect(() => {
    if (clearExerciseState) {
      setIndex(0);
      setSuccess(null);
      updateExerciseState();
      // Specific to recognize
      setChosenButtonIndex(null);
      // Specific to write
      setIsSubmitted(false);
      setInputValue("");
    }
  }, [clearExerciseState]);

  if (exerciseAction === "recognize") {
    return (
      <RecognizeDisplay
        exercise={exercise}
        index={index}
        chosenButtonIndex={chosenButtonIndex}
        success={success}
        checkAnswerRecognize={checkAnswerRecognize}
      />
    );
  } else if (exerciseAction === "write") {
    return (
      <Box variant="outlined" sx={{ userSelect: "none" }}>
        <Typography
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
          }}
        >
          {exercise.length && exercise[index].question}
        </Typography>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className={styles.input}
          type="text"
          spellCheck="false"
          autoComplete="off"
          autoFocus
        />
        <Button
          onClick={checkAnswerWrite}
          variant={isSubmitted ? "soft" : "outlined"}
          color={
            isSubmitted && success
              ? "success"
              : isSubmitted && !success
              ? "danger"
              : "info"
          }
          disabled={!inputValue || isSubmitted}
          sx={{
            mt: "2em",
            display: "flex",
            width: "50%",
            ml: "auto",
            mr: "auto",
          }}
          key={exercise.length && exercise[index].response}
        >
          Submit
        </Button>
      </Box>
    );
  }
};

export { Exercise };
