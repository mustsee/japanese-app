import { Stack, Button } from "@mui/joy";
import { MainSection } from "components/Layout";
import { Header } from "components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Stack />
      <MainSection>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <Header title="Welcome to Learn Japanese!" />
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <Link to="hiragana" style={{ textDecoration: "none" }}>
              <Button fullWidth>Hiragana</Button>
            </Link>
            <Link to="katakana" style={{ textDecoration: "none" }}>
              <Button fullWidth>Katakana</Button>
            </Link>
            <Link
              to="hiragana-dakuten-handakuten"
              style={{ textDecoration: "none" }}
            >
              <Button fullWidth>Hiragana Dakuten/Handakuten</Button>
            </Link>
            <Link
              to="katakana-dakuten-handakuten"
              style={{ textDecoration: "none" }}
            >
              <Button fullWidth>Katakana Dakuten/Handakuten</Button>
            </Link>
            <Link to="exercices" style={{ textDecoration: "none" }}>
              <Button fullWidth>Exercises</Button>
            </Link>
            <Link to="exercices-bis" style={{ textDecoration: "none" }}>
              <Button fullWidth>Exercises Second Version</Button>
            </Link>
          </Stack>
        </Stack>
      </MainSection>
      <Stack />
    </>
  );
}

export { Home };
