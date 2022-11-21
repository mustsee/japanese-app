import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Switch,
  Typography,
} from "@mui/joy";
import React, { useState, createRef, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const hiragana = [
  {
    romaji: "a",
    char: "あ",
    prefix: "hiragana",
  },
  {
    romaji: "i",
    char: "い",
    prefix: "hiragana",
  },
  {
    romaji: "u",
    char: "う",
    prefix: "hiragana",
  },
  {
    romaji: "e",
    char: "え",
    prefix: "hiragana",
  },
  {
    romaji: "o",
    char: "お",
    prefix: "hiragana",
  },
];

const katakana = [
  {
    romaji: "a",
    char: "ア",
    prefix: "katakana",
  },
  {
    romaji: "i",
    char: "イ",
    prefix: "katakana",
  },
  {
    romaji: "u",
    char: "ウ",
    prefix: "katakana",
  },
  {
    romaji: "e",
    char: "エ",
    prefix: "katakana",
  },
  {
    romaji: "o",
    char: "オ",
    prefix: "katakana",
  },
];

/* const voyelles = "アイウエオ";
const kLine = "カキクケコ";
const sLine = "サシスセソ"; */

const Main = () => {
  const canvasRef = createRef(null);

  const [list, setList] = useState(hiragana);
  const [syllable, setSyllable] = useState(hiragana[0]);
  const [index, setIndex] = useState(0);

  const [isCanvas, setIsCanvas] = useState(false);

  const [isKatakana, setKatakana] = useState(false);

  useEffect(() => {
    setList(isKatakana ? katakana : hiragana);
    setSyllable(isKatakana ? katakana[0] : hiragana[0]);
    setIndex(0);
    setIsCanvas(false);
  }, [isKatakana]);

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
      <Card variant="outlined" sx={{ textAlign: "center", userSelect: "none" }}>
        <Typography>Welcome to Learn Japanese!</Typography>
      </Card>
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
        sx={{ height: "300px", boxSizing: "border-box" }}
      >
        {isCanvas ? (
          <ReactSketchCanvas
            ref={canvasRef}
            strokeColor="black"
            strokeWidth="10"
            canvasColor="#fafafa"
            style={{ border: "none" }}
          />
        ) : (
          <img
            src={`/svg/${syllable.prefix}-${syllable.romaji}.svg`}
            alt={syllable.romaji}
            style={{ padding: "15%" }}
          />
        )}
      </Card>
      <Box sx={{ display: "flex", gap: "1em" }}>
        <Button fullWidth variant="outlined" onClick={handleClickOnPrevious}>
          Previous
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="info"
          onClick={() => canvasRef.current.clearCanvas()}
          disabled={!isCanvas ? true : false}
        >
          Clear
        </Button>
        <Button fullWidth variant="outlined" onClick={handleClickOnNext}>
          Next
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
      </Box>
    </Stack>
  );
};

export { Main };
