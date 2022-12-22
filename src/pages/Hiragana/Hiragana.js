import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { hiragana, hiraganaTable } from "data/hiragana";

function Hiragana() {
  return (
    <>
      <div />
      <MainSection>
        <Main title="Hiragana" list={hiragana} table={hiraganaTable} />
      </MainSection>
      <div />
    </>
  );
}

export { Hiragana };
