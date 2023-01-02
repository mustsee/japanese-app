import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { katakanaYVowelSounds, katakanaYVowelSoundsTable } from "data/katakana";

const KatakanaYVowelSounds = () => {
  return (
    <>
      <Header title="Katakana Y Vowel Sounds" />
      <MainSection>
        <Main
          list={katakanaYVowelSounds}
          table={katakanaYVowelSoundsTable}
          gridTemplateColumns="0.8fr 1fr 1fr 1fr"
        />
      </MainSection>
    </>
  );
};

export { KatakanaYVowelSounds };
