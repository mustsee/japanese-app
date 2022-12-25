import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

const RecognizeDisplay = (props) => {
  const { exercise, index, chosenButtonIndex, success, checkAnswerRecognize } =
    props;

  return (
    <Box sx={{ display: "flex", userSelect: "none" }}>
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
                onClick={() => checkAnswerRecognize(element, index)}
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

export { RecognizeDisplay };
