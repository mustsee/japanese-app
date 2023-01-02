import { Header } from "components/Header";
import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import { hiragana, hiraganaTable } from "data/hiragana";

function Hiragana() {
  return (
    <>
      <Header title="Hiragana" />
      <MainSection>
        <Main list={hiragana} table={hiraganaTable} />
      </MainSection>
    </>
  );
}

export { Hiragana };
