import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { katakana, katakanaTable } from "data/katakana";

function Katakana() {
  return (
    <>
      <div />
      <MainSection>
        <Main title="Katakana" list={katakana} table={katakanaTable} />
      </MainSection>
      <div />
    </>
  );
}

export { Katakana };
