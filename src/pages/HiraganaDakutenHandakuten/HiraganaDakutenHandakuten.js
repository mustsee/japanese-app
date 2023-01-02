import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { hiraganaAccents, hiraganaAccentsTable } from "data/hiragana";

const HiraganaDakutenHandakuten = () => {
  return (
    <>
      <Header title="Hiragana Dakuten/Handakuten" />
      <MainSection>
        <Main list={hiraganaAccents} table={hiraganaAccentsTable} />
      </MainSection>
    </>
  );
};

export { HiraganaDakutenHandakuten };
