import { MainSection } from "components/Layout";
import { Main } from "components/Main";

const hiragana = [
  {
    romaji: "a",
    char: "あ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "i",
    char: "い",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "u",
    char: "う",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "e",
    char: "え",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "o",
    char: "お",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ka",
    char: "か",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ki",
    char: "き",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ku",
    char: "く",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ke",
    char: "け",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ko",
    char: "こ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "sa",
    char: "さ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "shi",
    char: "し",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "su",
    char: "す",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "se",
    char: "せ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "so",
    char: "そ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ta",
    char: "た",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "chi",
    char: "ち",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "tsu",
    char: "つ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "te",
    char: "て",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "to",
    char: "と",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "na",
    char: "な",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ni",
    char: "に",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "nu",
    char: "ぬ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ne",
    char: "ね",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "no",
    char: "の",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ha",
    char: "は",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "hi",
    char: "ひ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "fu",
    char: "ふ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "he",
    char: "へ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ho",
    char: "ほ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ma",
    char: "ま",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "mi",
    char: "み",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "mu",
    char: "む",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "me",
    char: "め",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "mo",
    char: "も",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ya",
    char: "や",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "yu",
    char: "ゆ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "yo",
    char: "よ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ra",
    char: "ら",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ri",
    char: "り",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ru",
    char: "る",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "re",
    char: "れ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "ro",
    char: "ろ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "wa",
    char: "わ",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "wo",
    char: "を",
    prefix: "hiragana",
    svg: true,
  },
  {
    romaji: "n",
    char: "ん",
    prefix: "hiragana",
    svg: true,
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
