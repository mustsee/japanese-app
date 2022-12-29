import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { hiraganaYVowelSounds, hiraganaYVowelSoundsTable } from "data/hiragana";

const HiraganaYVowelSounds = () => {
  return (
    <>
      <div />
      <MainSection>
        <Main
          title="Hiragana Y Vowel Sounds"
          list={hiraganaYVowelSounds}
          table={hiraganaYVowelSoundsTable}
          gridTemplateColumns="0.8fr 1fr 1fr 1fr"
        />
      </MainSection>
      <div />
    </>
  );
};

export { HiraganaYVowelSounds };
