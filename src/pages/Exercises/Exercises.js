import {
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";
import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { hiragana, hiraganaAccents } from "data/hiragana";
import { katakana, katakanaAccents } from "data/katakana";
import { useEffect, useState } from "react";

const Exercises = () => {
  const [checked, setChecked] = useState([true, true, true, true]);
  const [chosenButtonIndex, setChosenButtonIndex] = useState(undefined);
  const [exercise, setExercise] = useState("kana-level-1");
  const [itemsNumber, setItemsNumber] = useState(10);
  const [list, setList] = useState([]);
  const [shortList, setShortList] = useState([]);
  const [index, setIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [success, setSuccess] = useState(null);
  const [score, setScore] = useState([0, 0]);

  const shuffle = (list) => {
    return list
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const elements = () => {
    return checked
      .map((element, index) => {
        if (element) {
          if (index === 0) return hiragana;
          else if (index === 1) return katakana;
          else if (index === 2) return hiraganaAccents;
          else if (index === 3) return katakanaAccents;
        }
      })
      .filter((element) => element)
      .flat(1);
  };

  const checkAnswer = (selected, selectionIndex) => {
    setChosenButtonIndex(selectionIndex);
    const current = shortList[index];
    if (selected.romaji === current.romaji) {
      setSuccess(true);
      setScore([score[0], score[1] + 1]);
    } else {
      setSuccess(false);
      setScore([score[0] + 1, score[1]]);
    }
    setTimeout(() => {
      const nextIndex = index + 1;
      if (!shortList[nextIndex]) return;
      setIndex(nextIndex);
      setChosenButtonIndex(undefined);
      setSuccess(false);
      setAnswers(findAnswers(shortList, list, nextIndex));
    }, 1000);
  };

  const handleStartExercise = () => {
    setChosenButtonIndex(undefined);
    setSuccess(false);
    setScore([0, 0]);
    const list = shuffle(elements());
    const shortList = list.slice(0, itemsNumber);
    setShortList(shortList);
    setList(list);
    setIndex(0);
    setAnswers(findAnswers(shortList, list, 0));
  };

  const findAnswers = (shortList, list, index) => {
    const current = shortList[index];
    let listWithoutCurrent = removeDuplicate(list, current);
    const answer1 = shuffle(listWithoutCurrent).slice(0, 1);
    let listWithoutAnswer1 = removeDuplicate(listWithoutCurrent, answer1[0]);
    const answer2 = shuffle(listWithoutAnswer1).slice(0, 1);
    return shuffle([current].concat(answer1, answer2));
  };

  const removeDuplicate = (list, element) =>
    list.filter((item) => {
      if (item.romaji !== element.romaji) return item;
    });

  useEffect(() => {
    const list = shuffle(elements());
    const shortList = list.slice(0, itemsNumber);
    setShortList(shortList);
    setList(list);
    setIndex(0);
    setAnswers(findAnswers(shortList, list, 0));
  }, []);

  return (
    <>
      <div />
      <MainSection>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <Header title="Exercises" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "70%",
              margin: "0 auto",
            }}
          >
            <Chip variant="soft" color="danger">
              {score[0]}
            </Chip>
            <Chip variant="soft" color="success">
              {score[1]}
            </Chip>
            <Chip variant="soft" color="info">
              {score[0] + score[1]} / {shortList.length}
            </Chip>
          </Box>
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
              {shortList.length && shortList[index].char}
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
              {answers.map((element, index) => {
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
                    disabled={chosenButtonIndex !== undefined ? true : false}
                    onClick={() => checkAnswer(element, index)}
                    key={element.char}
                  >
                    {element.romaji}
                  </Button>
                );
              })}
            </Box>
          </Box>
          <Card
            variant="outlined"
            sx={{ display: "flex", justifyDirection: "column", gap: "1em" }}
          >
            <Button
              onClick={handleStartExercise}
              variant="outlined"
              disabled={!checked.filter((el) => el === true).length}
            >
              Start
            </Button>
            <Select
              onChange={(e, newValue) => setItemsNumber(newValue)}
              value={itemsNumber}
              size="sm"
            >
              <Option value={10}>10</Option>
              <Option value={20}>20</Option>
              <Option value={30}>30</Option>
            </Select>
            <Checkbox
              checked={checked[0]}
              onChange={(event) =>
                setChecked([
                  event.target.checked,
                  checked[1],
                  checked[2],
                  checked[3],
                ])
              }
              size="sm"
              variant="soft"
              label="Hiragana"
            />
            <Checkbox
              checked={checked[1]}
              onChange={(event) =>
                setChecked([
                  checked[0],
                  event.target.checked,
                  checked[2],
                  checked[3],
                ])
              }
              size="sm"
              variant="soft"
              label="Katakana"
            />
            <Checkbox
              checked={checked[2]}
              onChange={(event) =>
                setChecked([
                  checked[0],
                  checked[1],
                  event.target.checked,
                  checked[3],
                ])
              }
              size="sm"
              variant="soft"
              label="Hiragana Dakuten Handakuten"
            />
            <Checkbox
              checked={checked[3]}
              onChange={(event) =>
                setChecked([
                  checked[0],
                  checked[1],
                  checked[2],
                  event.target.checked,
                ])
              }
              size="sm"
              variant="soft"
              label="Katakana Dakuten Handakuten"
            />
          </Card>
        </Stack>
      </MainSection>
      <div />
    </>
  );
};

export { Exercises };
