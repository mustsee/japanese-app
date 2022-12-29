import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { katakanaYVowelSounds, katakanaYVowelSoundsTable } from "data/katakana";

const KatakanaYVowelSounds = () => {
  return (
    <>
      <div />
      <MainSection>
        <Main
          title="Katakana Y Vowel Sounds"
          list={katakanaYVowelSounds}
          table={katakanaYVowelSoundsTable}
          gridTemplateColumns="0.8fr 1fr 1fr 1fr"
        />
      </MainSection>
      <div />
    </>
  );
};

export { KatakanaYVowelSounds };
