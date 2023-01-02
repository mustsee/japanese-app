import { Box, Button, Card, Divider, Stack, Typography } from "@mui/joy";
import { KanaTable } from "components/KanaTable";
import { useState, createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const basename = "/japanese-app";

const Main = (props) => {
  const canvasRef = createRef(null);

  const [list, setList] = useState(props.list);
  const [syllable, setSyllable] = useState(props.list[0]);
  const [index, setIndex] = useState(0);

  const [isCanvas, setIsCanvas] = useState(false);

  const handleChooseChar = (chosenChar) => {
    const newIndex = list.findIndex((element) => element.char === chosenChar);
    setIndex(newIndex);
    const newSyllable = list.find((element) => element.char === chosenChar);
    setSyllable(newSyllable);
    setIsCanvas(false);
  };

  const handleClickOnNext = () => {
    if (!isCanvas) return setIsCanvas(true);
    setIsCanvas(false);
    let nextIndex = index + 1;
    if (!list[nextIndex]) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
    setSyllable(list[nextIndex]);
  };

  const handleClickOnPrevious = () => {
    if (isCanvas) return setIsCanvas(false);
    setIsCanvas(true);
    let previousIndex = index - 1;
    if (!list[previousIndex]) {
      previousIndex = list.length - 1;
    }
    setIndex(previousIndex);
    setSyllable(list[previousIndex]);
  };

  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
      <Box
        sx={{
          display: "flex",
          userSelect: "none",
        }}
      >
        <Typography sx={{ width: "50%", textAlign: "center" }}>
          {syllable.romaji}
        </Typography>
        <Divider orientation="vertical"></Divider>
        <Typography sx={{ width: "50%", textAlign: "center" }}>
          {syllable.char}
        </Typography>
      </Box>
      <Card
        variant="outlined"
        sx={{
          height: "300px",
          width: "300px",
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        {isCanvas ? (
          <ReactSketchCanvas
            ref={canvasRef}
            strokeColor="black"
            strokeWidth="10"
            canvasColor="#fafafa"
            style={{ border: "none" }}
          />
        ) : syllable.svg ? (
          <img
            src={`${basename}/svg/${syllable.prefix}-${syllable.romaji}.svg`}
            alt={syllable.romaji}
            style={{ padding: "15%", backgroundColor: "#fefefe" }}
          />
        ) : (
          <Typography
            sx={{
              fontSize: syllable.char.length > 1 ? "120px" : "150px",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {syllable.char}
          </Typography>
        )}
      </Card>
      <Box sx={{ display: "flex", gap: "1em" }}>
        <Button
          sx={{ userSelect: "none" }}
          fullWidth
          variant="outlined"
          onClick={handleClickOnPrevious}
        >
          Previous
        </Button>
        <Button
          sx={{ userSelect: "none" }}
          fullWidth
          variant="outlined"
          color="info"
          onClick={() => canvasRef.current.clearCanvas()}
          disabled={!isCanvas ? true : false}
        >
          Clear
        </Button>
        <Button
          sx={{ userSelect: "none" }}
          fullWidth
          variant="outlined"
          onClick={handleClickOnNext}
        >
          Next
        </Button>
      </Box>
      <KanaTable
        table={props.table}
        currentChar={syllable.char}
        handleChooseChar={handleChooseChar}
        gridTemplateColumns={
          !props.gridTemplateColumns ? null : props.gridTemplateColumns
        }
      />
    </Stack>
  );
};

export { Main };
