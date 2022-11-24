import { Box, Button, Card, Divider, Stack, Typography } from "@mui/joy";
import { Header } from "components/Header";
import { KanaTable } from "components/KanaTable";
import React, { useState, createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const appName = "/japanese-app";

/* const voyelles = "アイウエオ";
const kLine = "カキクケコ";
const sLine = "サシスセソ"; */

const Main = (props) => {
  const canvasRef = createRef(null);

  const [list, setList] = useState(props.list);
  const [syllable, setSyllable] = useState(props.list[0]);
  const [index, setIndex] = useState(0);

  const [isCanvas, setIsCanvas] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(false);

  /* const [isKatakana, setKatakana] = useState(false); */

  /* useEffect(() => {
    setList(isKatakana ? katakana : hiragana);
    setSyllable(isKatakana ? katakana[0] : hiragana[0]);
    setIndex(0);
    setIsCanvas(false);
  }, [isKatakana]); */

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
      <Header title={props.title} />
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
            src={`${appName}/svg/${syllable.prefix}-${syllable.romaji}.svg`}
            alt={syllable.romaji}
            style={{ padding: "15%" }}
          />
        ) : (
          <Typography
            sx={{
              fontSize: "150px",
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
      {/* {syllable.mnemonic && !isCanvas && (
        <Card
          variant="outlined"
          sx={{ cursor: "pointer" }}
          onClick={() => setShowMnemonic(!showMnemonic)}
        >
          {!showMnemonic ? (
            <Typography
              level="body2"
              sx={{ userSelect: "none", textAlign: "center" }}
            >
              Click to show mnemonic
            </Typography>
          ) : (
            <Typography level="body2" sx={{ userSelect: "none" }}>
              {syllable.mnemonic}
            </Typography>
          )}
        </Card>
      )} */}
      <KanaTable
        table={props.table}
        currentChar={syllable.char}
        handleChooseChar={handleChooseChar}
      />
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Switch
          color={isKatakana ? "primary" : "info"}
          startDecorator={
            <Typography
              sx={{ color: isKatakana ? "text.tertiary" : "info.400" }}
            >
              hiragana
            </Typography>
          }
          endDecorator={
            <Typography
              sx={{ color: isKatakana ? "primary.400" : "text.tertiary" }}
            >
              katakana
            </Typography>
          }
          checked={isKatakana}
          onChange={(event) => setKatakana(event.target.checked)}
        />
      </Box> */}
    </Stack>
  );
};

export { Main };
