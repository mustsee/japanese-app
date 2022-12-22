import { Stack, Button, Typography } from "@mui/joy";
import { MainSection } from "components/Layout";
import { Header } from "components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Stack />
      <MainSection>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <Header />
          <Typography
            sx={{ textAlign: "center" }}
            level="h3"
            component="h1"
            fontWeight="lg"
          >
            Learn japanese
            <br /> the right way
          </Typography>
          <Typography sx={{ textAlign: "center" }} level="body1">
            <Typography fontWeight="lg">Learn Japanese</Typography> is an app
            that helps you learn, write and memorize the japanese language with
            the help of interactive exercises. Finish a section then jump to
            exercises for practice !
          </Typography>
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
              <Button color="info" fullWidth>
                Exercises
              </Button>
            </Link>
          </Stack>
        </Stack>
      </MainSection>
      <Stack />
    </>
  );
}

export { Home };
