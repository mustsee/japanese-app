import { MainSection } from "components/Layout";
import { Main } from "components/Main";

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
  {
    romaji: "ka",
    char: "か",
    prefix: "hiragana",
  },
  {
    romaji: "ki",
    char: "き",
    prefix: "hiragana",
  },
  {
    romaji: "ku",
    char: "く",
    prefix: "hiragana",
  },
  {
    romaji: "ke",
    char: "け",
    prefix: "hiragana",
  },
  {
    romaji: "ko",
    char: "こ",
    prefix: "hiragana",
  },
  {
    romaji: "sa",
    char: "さ",
    prefix: "hiragana",
  },
  {
    romaji: "shi",
    char: "し",
    prefix: "hiragana",
  },
  {
    romaji: "su",
    char: "す",
    prefix: "hiragana",
  },
  {
    romaji: "se",
    char: "せ",
    prefix: "hiragana",
  },
  {
    romaji: "so",
    char: "そ",
    prefix: "hiragana",
  },
  {
    romaji: "ta",
    char: "た",
    prefix: "hiragana",
  },
  {
    romaji: "chi",
    char: "ち",
    prefix: "hiragana",
  },
  {
    romaji: "tsu",
    char: "つ",
    prefix: "hiragana",
  },
  {
    romaji: "te",
    char: "て",
    prefix: "hiragana",
  },
  {
    romaji: "to",
    char: "と",
    prefix: "hiragana",
  },
  {
    romaji: "na",
    char: "な",
    prefix: "hiragana",
  },
  {
    romaji: "ni",
    char: "に",
    prefix: "hiragana",
  },
  {
    romaji: "nu",
    char: "ぬ",
    prefix: "hiragana",
  },
  {
    romaji: "ne",
    char: "ね",
    prefix: "hiragana",
  },
  {
    romaji: "no",
    char: "の",
    prefix: "hiragana",
  },
  {
    romaji: "ha",
    char: "は",
    prefix: "hiragana",
  },
  {
    romaji: "hi",
    char: "ひ",
    prefix: "hiragana",
  },
  {
    romaji: "fu",
    char: "ふ",
    prefix: "hiragana",
  },
  {
    romaji: "he",
    char: "へ",
    prefix: "hiragana",
  },
  {
    romaji: "ho",
    char: "ほ",
    prefix: "hiragana",
  },
  {
    romaji: "ma",
    char: "ま",
    prefix: "hiragana",
  },
  {
    romaji: "mi",
    char: "み",
    prefix: "hiragana",
  },
  {
    romaji: "mu",
    char: "む",
    prefix: "hiragana",
  },
  {
    romaji: "me",
    char: "め",
    prefix: "hiragana",
  },
  {
    romaji: "mo",
    char: "も",
    prefix: "hiragana",
  },
  {
    romaji: "ya",
    char: "や",
    prefix: "hiragana",
  },
  {
    romaji: "yu",
    char: "ゆ",
    prefix: "hiragana",
  },
  {
    romaji: "yo",
    char: "よ",
    prefix: "hiragana",
  },
  {
    romaji: "ra",
    char: "ら",
    prefix: "hiragana",
  },
  {
    romaji: "ri",
    char: "り",
    prefix: "hiragana",
  },
  {
    romaji: "ru",
    char: "る",
    prefix: "hiragana",
  },
  {
    romaji: "re",
    char: "れ",
    prefix: "hiragana",
  },
  {
    romaji: "ro",
    char: "ろ",
    prefix: "hiragana",
  },
  {
    romaji: "wa",
    char: "わ",
    prefix: "hiragana",
  },
  {
    romaji: "wo",
    char: "を",
    prefix: "hiragana",
  },
  {
    romaji: "n",
    char: "ん",
    prefix: "hiragana",
  },
];

const hiraganaTable = [
  ["", "a", "i", "u", "e", "o"],
  [
    "",
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
  ],
  [
    "k-",
    {
      romaji: "ka",
      char: "か",
      prefix: "hiragana",
    },
    {
      romaji: "ki",
      char: "き",
      prefix: "hiragana",
    },
    {
      romaji: "ku",
      char: "く",
      prefix: "hiragana",
    },
    {
      romaji: "ke",
      char: "け",
      prefix: "hiragana",
    },
    {
      romaji: "ko",
      char: "こ",
      prefix: "hiragana",
    },
  ],
  [
    "s-",
    {
      romaji: "sa",
      char: "さ",
      prefix: "hiragana",
    },
    {
      romaji: "shi",
      char: "し",
      prefix: "hiragana",
    },
    {
      romaji: "su",
      char: "す",
      prefix: "hiragana",
    },
    {
      romaji: "se",
      char: "せ",
      prefix: "hiragana",
    },
    {
      romaji: "so",
      char: "そ",
      prefix: "hiragana",
    },
  ],
  [
    "t-",
    {
      romaji: "ta",
      char: "た",
      prefix: "hiragana",
    },
    {
      romaji: "chi",
      char: "ち",
      prefix: "hiragana",
    },
    {
      romaji: "tsu",
      char: "つ",
      prefix: "hiragana",
    },
    {
      romaji: "te",
      char: "て",
      prefix: "hiragana",
    },
    {
      romaji: "to",
      char: "と",
      prefix: "hiragana",
    },
  ],
  [
    "n-",
    {
      romaji: "na",
      char: "な",
      prefix: "hiragana",
    },
    {
      romaji: "ni",
      char: "に",
      prefix: "hiragana",
    },
    {
      romaji: "nu",
      char: "ぬ",
      prefix: "hiragana",
    },
    {
      romaji: "ne",
      char: "ね",
      prefix: "hiragana",
    },
    {
      romaji: "no",
      char: "の",
      prefix: "hiragana",
    },
  ],
  [
    "h-",
    {
      romaji: "ha",
      char: "は",
      prefix: "hiragana",
    },
    {
      romaji: "hi",
      char: "ひ",
      prefix: "hiragana",
    },
    {
      romaji: "fu",
      char: "ふ",
      prefix: "hiragana",
    },
    {
      romaji: "he",
      char: "へ",
      prefix: "hiragana",
    },
    {
      romaji: "ho",
      char: "ほ",
      prefix: "hiragana",
    },
  ],
  [
    "m-",
    {
      romaji: "ma",
      char: "ま",
      prefix: "hiragana",
    },
    {
      romaji: "mi",
      char: "み",
      prefix: "hiragana",
    },
    {
      romaji: "mu",
      char: "む",
      prefix: "hiragana",
    },
    {
      romaji: "me",
      char: "め",
      prefix: "hiragana",
    },
    {
      romaji: "mo",
      char: "も",
      prefix: "hiragana",
    },
  ],
  [
    "y-",
    {
      romaji: "ya",
      char: "や",
      prefix: "hiragana",
    },
    "",
    {
      romaji: "yu",
      char: "ゆ",
      prefix: "hiragana",
    },
    "",
    {
      romaji: "yo",
      char: "よ",
      prefix: "hiragana",
    },
  ],
  [
    "r-",
    {
      romaji: "ra",
      char: "ら",
      prefix: "hiragana",
    },
    {
      romaji: "ri",
      char: "り",
      prefix: "hiragana",
    },
    {
      romaji: "ru",
      char: "る",
      prefix: "hiragana",
    },
    {
      romaji: "re",
      char: "れ",
      prefix: "hiragana",
    },
    {
      romaji: "ro",
      char: "ろ",
      prefix: "hiragana",
    },
  ],
  [
    "w-",
    {
      romaji: "wa",
      char: "わ",
      prefix: "hiragana",
    },
    "",
    "",
    "",
    {
      romaji: "wo",
      char: "を",
      prefix: "hiragana",
    },
  ],
  [
    "",
    {
      romaji: "n",
      char: "ん",
      prefix: "hiragana",
    },
  ],
];

function Hiragana() {
  return (
    <>
      <div />
      <MainSection>
        <Main title="Hiragana" list={hiragana} table={hiraganaTable} />
      </MainSection>
      <div />
    </>
  );
}

export { Hiragana };
