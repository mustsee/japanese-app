import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { katakanaAccents, katakanaAccentsTable } from "data/katakana";

const KatakanaDakutenHandakuten = () => {
  return (
    <>
      <Header title="Katakana Dakuten/Handakuten" />
      <MainSection>
        <Main list={katakanaAccents} table={katakanaAccentsTable} />
      </MainSection>
    </>
  );
};

export { KatakanaDakutenHandakuten };
