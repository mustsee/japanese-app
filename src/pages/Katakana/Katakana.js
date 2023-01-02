import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { katakana, katakanaTable } from "data/katakana";

function Katakana() {
  return (
    <>
      <Header title="Katakana" />
      <MainSection>
        <Main list={katakana} table={katakanaTable} />
      </MainSection>
    </>
  );
}

export { Katakana };
