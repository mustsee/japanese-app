import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { hiraganaYVowelSounds, hiraganaYVowelSoundsTable } from "data/hiragana";

const HiraganaYVowelSounds = () => {
  return (
    <>
      <Header title="Hiragana Y Vowel Sounds" />
      <MainSection>
        <Main
          list={hiraganaYVowelSounds}
          table={hiraganaYVowelSoundsTable}
          gridTemplateColumns="0.8fr 1fr 1fr 1fr"
        />
      </MainSection>
    </>
  );
};

export { HiraganaYVowelSounds };
