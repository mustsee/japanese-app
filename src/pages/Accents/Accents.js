import { MainSection } from "components/Layout";
import { Main } from "components/Main";
import Divider from "@mui/joy/Divider";
import { hiraganaAccents, hiraganaAccentsTable } from "data/hiragana";
import { katakanaAccents, katakanaAccentsTable } from "data/katakana";

const Accents = () => {
  return (
    <>
      <div />
      <MainSection>
        <Main
          title="Hiragana Dakuten/Handakuten"
          list={hiraganaAccents}
          table={hiraganaAccentsTable}
        />
        <Divider sx={{ margin: "4em 0" }} />
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

export { Accents };
