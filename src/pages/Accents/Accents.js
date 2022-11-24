import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import Divider from "@mui/joy/Divider";

const hiraganaList = [
  {
    romaji: "ga",
    char: "が",
    prefix: "hiragana",
  },
  {
    romaji: "gi",
    char: "ぎ",
    prefix: "hiragana",
  },
  {
    romaji: "gu",
    char: "ぐ",
    prefix: "hiragana",
  },
  {
    romaji: "ge",
    char: "げ",
    prefix: "hiragana",
  },
  {
    romaji: "go",
    char: "ご",
    prefix: "hiragana",
  },
  {
    romaji: "za",
    char: "ざ",
    prefix: "hiragana",
  },
  {
    romaji: "ji",
    char: "じ",
    prefix: "hiragana",
  },
  {
    romaji: "zu",
    char: "ず",
    prefix: "hiragana",
  },
  {
    romaji: "ze",
    char: "ぜ",
    prefix: "hiragana",
  },
  {
    romaji: "zo",
    char: "ぞ",
    prefix: "hiragana",
  },
  {
    romaji: "da",
    char: "だ",
    prefix: "hiragana",
  },
  {
    romaji: "ji",
    char: "ぢ",
    prefix: "hiragana",
  },
  {
    romaji: "zu",
    char: "づ",
    prefix: "hiragana",
  },
  {
    romaji: "de",
    char: "で",
    prefix: "hiragana",
  },
  {
    romaji: "do",
    char: "ど",
    prefix: "hiragana",
  },
  {
    romaji: "ba",
    char: "ば",
    prefix: "hiragana",
  },
  {
    romaji: "bi",
    char: "び",
    prefix: "hiragana",
  },
  {
    romaji: "bu",
    char: "ぶ",
    prefix: "hiragana",
  },
  {
    romaji: "be",
    char: "べ",
    prefix: "hiragana",
  },
  {
    romaji: "bo",
    char: "ぼ",
    prefix: "hiragana",
  },
  {
    romaji: "pa",
    char: "ぱ",
    prefix: "hiragana",
  },
  {
    romaji: "pi",
    char: "ぴ",
    prefix: "hiragana",
  },
  {
    romaji: "pu",
    char: "ぷ",
    prefix: "hiragana",
  },
  {
    romaji: "pe",
    char: "ぺ",
    prefix: "hiragana",
  },
  {
    romaji: "po",
    char: "ぽ",
    prefix: "hiragana",
  },
];

const hiraganaTable = [
  ["", "a", "i", "u", "e", "o"],
  [
    "g-",
    {
      romaji: "ga",
      char: "が",
      prefix: "hiragana",
    },
    {
      romaji: "gi",
      char: "ぎ",
      prefix: "hiragana",
    },
    {
      romaji: "gu",
      char: "ぐ",
      prefix: "hiragana",
    },
    {
      romaji: "ge",
      char: "げ",
      prefix: "hiragana",
    },
    {
      romaji: "go",
      char: "ご",
      prefix: "hiragana",
    },
  ],
  [
    "z-",
    {
      romaji: "za",
      char: "ざ",
      prefix: "hiragana",
    },
    {
      romaji: "ji",
      char: "じ",
      prefix: "hiragana",
    },
    {
      romaji: "zu",
      char: "ず",
      prefix: "hiragana",
    },
    {
      romaji: "ze",
      char: "ぜ",
      prefix: "hiragana",
    },
    {
      romaji: "zo",
      char: "ぞ",
      prefix: "hiragana",
    },
  ],
  [
    "d-",
    {
      romaji: "da",
      char: "だ",
      prefix: "hiragana",
    },
    {
      romaji: "ji",
      char: "ぢ",
      prefix: "hiragana",
    },
    {
      romaji: "zu",
      char: "づ",
      prefix: "hiragana",
    },
    {
      romaji: "de",
      char: "で",
      prefix: "hiragana",
    },
    {
      romaji: "do",
      char: "ど",
      prefix: "hiragana",
    },
  ],
  [
    "b-",
    {
      romaji: "ba",
      char: "ば",
      prefix: "hiragana",
    },
    {
      romaji: "bi",
      char: "び",
      prefix: "hiragana",
    },
    {
      romaji: "bu",
      char: "ぶ",
      prefix: "hiragana",
    },
    {
      romaji: "be",
      char: "べ",
      prefix: "hiragana",
    },
    {
      romaji: "bo",
      char: "ぼ",
      prefix: "hiragana",
    },
  ],
  [
    "p-",
    {
      romaji: "pa",
      char: "ぱ",
      prefix: "hiragana",
    },
    {
      romaji: "pi",
      char: "ぴ",
      prefix: "hiragana",
    },
    {
      romaji: "pu",
      char: "ぷ",
      prefix: "hiragana",
    },
    {
      romaji: "pe",
      char: "ぺ",
      prefix: "hiragana",
    },
    {
      romaji: "po",
      char: "ぽ",
      prefix: "hiragana",
    },
  ],
];

const katakanaList = [
  {
    romaji: "ga",
    char: "ガ",
    prefix: "katakana",
  },
  {
    romaji: "gi",
    char: "ギ",
    prefix: "katakana",
  },
  {
    romaji: "gu",
    char: "グ",
    prefix: "katakana",
  },
  {
    romaji: "ge",
    char: "ゲ",
    prefix: "katakana",
  },
  {
    romaji: "go",
    char: "ゴ",
    prefix: "katakana",
  },
  {
    romaji: "za",
    char: "ザ",
    prefix: "katakana",
  },
  {
    romaji: "ji",
    char: "ジ",
    prefix: "katakana",
  },
  {
    romaji: "zu",
    char: "ズ",
    prefix: "katakana",
  },
  {
    romaji: "ze",
    char: "ゼ",
    prefix: "katakana",
  },
  {
    romaji: "zo",
    char: "ゾ",
    prefix: "katakana",
  },
  {
    romaji: "da",
    char: "ダ",
    prefix: "katakana",
  },
  {
    romaji: "ji",
    char: "ヂ",
    prefix: "katakana",
  },
  {
    romaji: "zu",
    char: "ヅ",
    prefix: "katakana",
  },
  {
    romaji: "de",
    char: "デ",
    prefix: "katakana",
  },
  {
    romaji: "do",
    char: "ド",
    prefix: "katakana",
  },
  {
    romaji: "ba",
    char: "バ",
    prefix: "katakana",
  },
  {
    romaji: "bi",
    char: "ビ",
    prefix: "katakana",
  },
  {
    romaji: "bu",
    char: "ブ",
    prefix: "katakana",
  },
  {
    romaji: "be",
    char: "ベ",
    prefix: "katakana",
  },
  {
    romaji: "bo",
    char: "ボ",
    prefix: "katakana",
  },
  {
    romaji: "pa",
    char: "パ",
    prefix: "katakana",
  },
  {
    romaji: "pi",
    char: "ピ",
    prefix: "katakana",
  },
  {
    romaji: "pu",
    char: "プ",
    prefix: "katakana",
  },
  {
    romaji: "pe",
    char: "ペ",
    prefix: "katakana",
  },
  {
    romaji: "po",
    char: "ポ",
    prefix: "katakana",
  },
];

const katakanaTable = [
  ["", "a", "i", "u", "e", "o"],
  [
    "g-",
    {
      romaji: "ga",
      char: "ガ",
      prefix: "katakana",
    },
    {
      romaji: "gi",
      char: "ギ",
      prefix: "katakana",
    },
    {
      romaji: "gu",
      char: "グ",
      prefix: "katakana",
    },
    {
      romaji: "ge",
      char: "ゲ",
      prefix: "katakana",
    },
    {
      romaji: "go",
      char: "ゴ",
      prefix: "katakana",
    },
  ],
  [
    "z-",
    {
      romaji: "za",
      char: "ザ",
      prefix: "katakana",
    },
    {
      romaji: "ji",
      char: "ジ",
      prefix: "katakana",
    },
    {
      romaji: "zu",
      char: "ズ",
      prefix: "katakana",
    },
    {
      romaji: "ze",
      char: "ゼ",
      prefix: "katakana",
    },
    {
      romaji: "zo",
      char: "ゾ",
      prefix: "katakana",
    },
  ],
  [
    "d-",
    {
      romaji: "da",
      char: "ダ",
      prefix: "katakana",
    },
    {
      romaji: "ji",
      char: "ヂ",
      prefix: "katakana",
    },
    {
      romaji: "zu",
      char: "ヅ",
      prefix: "katakana",
    },
    {
      romaji: "de",
      char: "デ",
      prefix: "katakana",
    },
    {
      romaji: "do",
      char: "ド",
      prefix: "katakana",
    },
  ],
  [
    "b-",
    {
      romaji: "ba",
      char: "バ",
      prefix: "katakana",
    },
    {
      romaji: "bi",
      char: "ビ",
      prefix: "katakana",
    },
    {
      romaji: "bu",
      char: "ブ",
      prefix: "katakana",
    },
    {
      romaji: "be",
      char: "ベ",
      prefix: "katakana",
    },
    {
      romaji: "bo",
      char: "ボ",
      prefix: "katakana",
    },
  ],
  [
    "p-",
    {
      romaji: "pa",
      char: "パ",
      prefix: "katakana",
    },
    {
      romaji: "pi",
      char: "ピ",
      prefix: "katakana",
    },
    {
      romaji: "pu",
      char: "プ",
      prefix: "katakana",
    },
    {
      romaji: "pe",
      char: "ペ",
      prefix: "katakana",
    },
    {
      romaji: "po",
      char: "ポ",
      prefix: "katakana",
    },
  ],
];

const Accents = () => {
  return (
    <>
      <div />
      <MainSection>
        <Main
          title="Hiragana Dakuten/Handakuten"
          list={hiraganaList}
          table={hiraganaTable}
        />
        <Divider sx={{ margin: "4em 0" }} />
        <Main
          title="Katakana Dakuten/Handakuten"
          list={katakanaList}
          table={katakanaTable}
        />
      </MainSection>

      <div />
    </>
  );
};

export { Accents };
