import FlipIcon from "@mui/icons-material/Flip";
import {
  Button,
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/joy";
import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { kanji } from "data/vocabulary";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./Vocabulary.module.css";

const CustomButton = ({ handleClick, text, disabled, color = "primary" }) => {
  return (
    <Button
      variant="outlined"
      onClick={handleClick}
      disabled={disabled}
      color={color}
    >
      {text}
    </Button>
  );
};

const FlipIconButton = ({ handleClick }) => {
  return (
    <IconButton
      onClick={handleClick}
      size="lg"
      variant="plain"
      color="primary"
      sx={{
        position: "absolute",
        borderRadius: "50%",
        right: "1rem",
        bottom: "1rem",
      }}
    >
      <FlipIcon />
    </IconButton>
  );
};

const Vocabulary = () => {
  const [vocabulary, setVocabulary] = useState(Object.values(kanji));
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClickOnFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    let nextIndex = index + 1;
    if (!vocabulary[nextIndex]) {
      nextIndex = 0;
    }
    setIsFlipped(false);
    if (isFlipped) {
      setTimeout(() => {
        setIndex(nextIndex);
      }, 500);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <>
      <Header title="Vocabulary" />
      <MainSection>
        <Stack sx={{ display: "flex", gap: "2em", userSelect: "none" }}>
          {vocabulary.length && (
            <ReactCardFlip key={vocabulary[index].kanji} isFlipped={isFlipped}>
              <Card
                variant="soft"
                sx={{
                  height: "300px",
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  level="body1"
                  className={styles["scale-x-transition"]}
                  sx={{ fontSize: "3em" }}
                >
                  {vocabulary[index].kanji}
                </Typography>
                <FlipIconButton handleClick={handleClickOnFlipped} />
                <Typography
                  variant="plain"
                  color="neutral"
                  level="body2"
                  className={styles["scale-y-transition"]}
                  sx={{
                    position: "absolute",
                    top: "0.5rem",
                    left: "1rem",
                  }}
                >
                  {index + 1} / {vocabulary.length}
                </Typography>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "300px",
                  gap: "3em",
                }}
              >
                <Typography level="body1" fontSize="xl" textAlign="center">
                  {vocabulary[index].romaji.FR[0].translation}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "50%", textAlign: "center" }}>
                    <Typography level="body1" sx={{ mb: "0.25em" }}>
                      <Tooltip
                        title="Chinese reading"
                        placement="left"
                        arrow
                        size="sm"
                        variant="soft"
                      >
                        <span>on-yomi</span>
                      </Tooltip>
                    </Typography>
                    {vocabulary[index].onyomi.length ? (
                      vocabulary[index].onyomi.map((item) => {
                        return (
                          <Typography level="body2" key={item}>
                            {item}
                          </Typography>
                        );
                      })
                    ) : (
                      <Typography level="body2">-</Typography>
                    )}
                  </div>
                  <Divider orientation="vertical" />
                  <div style={{ width: "50%", textAlign: "center" }}>
                    <Typography level="body1" sx={{ mb: "0.25em" }}>
                      <Tooltip
                        title="Japanese reading"
                        placement="right"
                        arrow
                        size="sm"
                        variant="soft"
                      >
                        <span>kun-yomi</span>
                      </Tooltip>
                    </Typography>

                    {vocabulary[index].kunyomi.length
                      ? vocabulary[index].kunyomi.map((item) => {
                          return (
                            <Typography level="body2" key={item}>
                              {item}
                            </Typography>
                          );
                        })
                      : "-"}
                  </div>
                </Box>
                <FlipIconButton handleClick={handleClickOnFlipped} />
              </Card>
            </ReactCardFlip>
          )}
          <CustomButton handleClick={handleNext} text="Next" />
        </Stack>
      </MainSection>
    </>
  );
};

export { Vocabulary };
