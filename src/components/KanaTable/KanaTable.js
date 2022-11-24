import { Card, Typography } from "@mui/joy";

/* const data = [
  ["n", "w-", "r-", "y-", "m-", "h-", "n-", "t-", "s-", "k-", "", ""],
  [
    {
      char: "ん",
      romaji: "n",
    },
    ,
    {
      char: "わ",
      romaji: "wa",
    },
    {
      char: "ら",
      romaji: "ra",
    },
    {
      char: "や",
      romaji: "ya",
    },
    {
      char: "ま",
      romaji: "ma",
    },
    {
      char: "は",
      romaji: "ha",
    },
    {
      char: "な",
      romaji: "na",
    },
    {
      char: "た",
      romaji: "ta",
    },
    {
      char: "さ",
      romaji: "sa",
    },
    {
      char: "か",
      romaji: "ka",
    },
    {
      char: "あ",
      romaji: "a",
    },
    "a",
  ],
  [
    "",
    "",
    {
      char: "り",
      romaji: "ri",
    },
    ,
    "",
    {
      char: "み",
      romaji: "mi",
    },
    {
      char: "ひ",
      romaji: "hi",
    },
    {
      char: "に",
      romaji: "ni",
    },
    {
      char: "ち",
      romaji: "chi",
    },
    {
      char: "し",
      romaji: "shi",
    },
    {
      char: "き",
      romaji: "ki",
    },
    {
      char: "い",
      romaji: "i",
    },
    "i",
  ],
  [
    "",
    "",
    {
      char: "る",
      romaji: "ru",
    },
    {
      char: "ゆ",
      romaji: "yu",
    },
    {
      char: "む",
      romaji: "mu",
    },
    {
      char: "ふ",
      romaji: "fu",
    },
    {
      char: "ぬ",
      romaji: "nu",
    },
    {
      char: "つ",
      romaji: "tsu",
    },
    {
      char: "す",
      romaji: "su",
    },
    {
      char: "く",
      romaji: "ku",
    },
    {
      char: "う",
      romaji: "u",
    },
    "u",
  ],
  [
    "",
    "",
    {
      char: "れ",
      romaji: "re",
    },
    "",
    {
      char: "め",
      romaji: "me",
    },
    {
      char: "へ",
      romaji: "he",
    },
    {
      char: "ね",
      romaji: "ne",
    },
    {
      char: "て",
      romaji: "te",
    },
    {
      char: "せ",
      romaji: "se",
    },
    {
      char: "け",
      romaji: "ke",
    },
    {
      char: "え",
      romaji: "e",
    },
    "e",
  ],
  [
    "",
    {
      char: "を",
      romaji: "wo",
    },
    {
      char: "ろ",
      romaji: "ro",
    },
    {
      char: "よ",
      romaji: "yo",
    },
    {
      char: "も",
      romaji: "mo",
    },
    {
      char: "ほ",
      romaji: "ho",
    },
    {
      char: "の",
      romaji: "no",
    },
    {
      char: "と",
      romaji: "to",
    },
    {
      char: "そ",
      romaji: "so",
    },
    {
      char: "こ",
      romaji: "ko",
    },
    {
      char: "お",
      romaji: "o",
    },
    "o",
  ],
]; */

const KanaTable = (props) => {
  const handleClickOnChar = (char) => {
    if (!char) return;
    props.handleChooseChar(char);
  };

  const rowsNumber = (list) => {
    let rows;
    list.forEach(() => (rows += " 1fr"));
    return rows;
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: rowsNumber(props.table),
          userSelect: "none",
        }}
      >
        {props.table.map((row, rowIndex) => {
          return row.map((element, elementIndex) => {
            return (
              <Typography
                onClick={() => handleClickOnChar(element.char)}
                level={!(rowIndex === 0 || elementIndex === 0) ? "h5" : "body1"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "1px solid gray",
                  borderBottom: "1px solid gray",
                  boxSizing: "border-box",
                  ...(rowIndex === 0 && {
                    // borderTop: "1px solid gray",
                    borderRight: "none",
                    // backgroundColor: "#fafafa",
                    color: "#333",
                  }),
                  ...(elementIndex === 0 && {
                    borderBottom: "none",
                    borderLeft: "none",
                    // backgroundColor: "#fafafa",
                    color: "#333",
                  }),
                  ...(!(rowIndex === 0 || elementIndex === 0) && {
                    "&:hover": {
                      backgroundColor: "#f1f1f1",
                      cursor: "pointer",
                    },
                  }),
                  ...(props.currentChar === element.char && {
                    backgroundColor: "#eee",
                  }),
                }}
              >
                {typeof element === "string" ? element : element.char}
              </Typography>
            );
          });
        })}
      </Card>
    </>
  );
};

export { KanaTable };
