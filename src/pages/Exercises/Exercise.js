import { useEffect, useState } from "react";
import { RecognizeDisplay } from "./RecognizeDisplay";
import { WriteDisplay } from "./WriteDisplay";
import { PuzzleDisplay } from "./PuzzleDisplay";

const Exercise = (props) => {
  const {
    exercise,
    exerciseDisplay,
    handleScore,
    clearExerciseState,
    updateExerciseState,
  } = props;

  const [index, setIndex] = useState(0);
  const [success, setSuccess] = useState(null);

  // Specific to recognize
  const [chosenButtonIndex, setChosenButtonIndex] = useState(null);

  // Specific to write
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkAnswerPuzzle = () => {
    return;
  };

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

  const checkAnswerWrite = (inputValue) => {
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
    }
  }, [clearExerciseState]);

  if (exerciseDisplay === "recognize") {
    return (
      <RecognizeDisplay
        exercise={exercise}
        index={index}
        success={success}
        chosenButtonIndex={chosenButtonIndex}
        checkAnswerRecognize={checkAnswerRecognize}
      />
    );
  } else if (exerciseDisplay === "write") {
    return (
      <WriteDisplay
        exercise={exercise}
        index={index}
        success={success}
        isSubmitted={isSubmitted}
        checkAnswerWrite={checkAnswerWrite}
      />
    );
  } else if (exerciseDisplay === "puzzle") {
    return (
      <PuzzleDisplay
        exercise={exercise}
        index={index}
        success={success}
        isSubmitted={isSubmitted}
        checkAnswerPuzzle={checkAnswerPuzzle}
      />
    );
  }
};

export { Exercise };
