import { Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { useState, useEffect } from "react";

const PuzzleDisplay = (props) => {
  const { exercise, index, isSubmitted, success, checkAnswerPuzzle } = props;

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected([]);
  }, [index]);

  return (
    <Box sx={{ userSelect: "none" }}>
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
      <Box
        sx={{
          pt: 2,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {selected.length
          ? selected.map((element, index) => {
              return (
                <Chip
                  variant="outlined"
                  color="neutral"
                  size="lg"
                  sx={{ borderRadius: "0.5em" }}
                  key={`${element.display}-${index}`}
                  onClick={() => {
                    if (!isSubmitted) {
                      setSelected(selected.filter((x) => x !== element));
                    }
                  }}
                >
                  {element.display}
                </Chip>
              );
            })
          : ["placeholder"].map((element, index) => {
              return <Chip variant="plain" size="lg" key={index}></Chip>;
            })}
      </Box>
      <Divider sx={{ m: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {exercise.length &&
          exercise[index].answers.map((element, index) => {
            const checked = selected.includes(element);
            return (
              <Chip
                variant="outlined"
                color="neutral"
                disabled={checked}
                size="lg"
                sx={{ borderRadius: "0.5em" }}
                onClick={() => {
                  if (!isSubmitted) {
                    setSelected(selected.concat(element));
                  }
                }}
                key={element.display + "-" + index}
              >
                {element.display}
              </Chip>
            );
          })}
      </Box>
      <Button
        onClick={() =>
          checkAnswerPuzzle(selected.map((element) => element.display).join(""))
        }
        variant={isSubmitted ? "soft" : "outlined"}
        color={
          isSubmitted && success
            ? "success"
            : isSubmitted && !success
            ? "danger"
            : "info"
        }
        disabled={!selected.length || isSubmitted}
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
};

export { PuzzleDisplay };
