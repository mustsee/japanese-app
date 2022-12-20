import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";

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
                key={element + "-" + index}
              >
                {element}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

export { Exercise };