import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { hiraganaAccents, hiraganaAccentsTable } from "data/hiragana";

const HiraganaDakutenHandakuten = () => {
  return (
    <>
      <div />
      <MainSection>
        <Main
          title="Hiragana Dakuten/Handakuten"
          list={hiraganaAccents}
          table={hiraganaAccentsTable}
        />
      </MainSection>
      <div />
    </>
  );
};

export { HiraganaDakutenHandakuten };
