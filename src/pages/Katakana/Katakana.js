import Layout from "components/Layout";
import { Main } from "components/Main";

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

function Katakana() {
  return (
    <>
      <div />
      <Layout.Main>
        <Main title="Katakana" list={katakana} />
      </Layout.Main>
      <div />
    </>
  );
}

export { Katakana };
