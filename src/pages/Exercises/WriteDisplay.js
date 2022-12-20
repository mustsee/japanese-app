import { Button } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import styles from "./Exercise.module.css";

const WriteDisplay = (props) => {
  const { exercise, index, isSubmitted, success, checkAnswerWrite } = props;

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [index]);

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
        onClick={() => checkAnswerWrite(inputValue)}
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
};

export { WriteDisplay };
