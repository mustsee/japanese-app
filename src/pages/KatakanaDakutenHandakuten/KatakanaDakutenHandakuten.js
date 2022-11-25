import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { katakanaAccents, katakanaAccentsTable } from "data/katakana";

const KatakanaDakutenHandakuten = () => {
  return (
    <>
      <div />
      <MainSection>
        <Main
          title="Katakana Dakuten/Handakuten"
          list={katakanaAccents}
          table={katakanaAccentsTable}
        />
      </MainSection>
      <div />
    </>
  );
};

export { KatakanaDakutenHandakuten };
