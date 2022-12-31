import { Stack, Button, Typography } from "@mui/joy";
import { MainSection } from "components/Layout";
import { Header } from "components/Header";
import { useColorScheme } from "@mui/joy/styles";
/* import { PromoteInstallBis } from "components/Header"; */
import { Link } from "react-router-dom";

function LinkWithButton({ src, text, mode, color = "primary" }) {
  return (
    <Link to={src} style={{ textDecoration: "none" }}>
      <Button
        variant={mode === "dark" ? "soft" : "solid"}
        color={color}
        fullWidth
      >
        {text}
      </Button>
    </Link>
  );
}

function Home() {
  const { mode, setMode } = useColorScheme();

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
            <LinkWithButton src="hiragana" text="Hiragana" mode={mode} />
            <LinkWithButton src="katakana" text="Katakana" mode={mode} />
            <LinkWithButton
              src="hiragana-dakuten-handakuten"
              text="Hiragana Dakuten/Handakuten"
              mode={mode}
            />
            <LinkWithButton
              src="katakana-dakuten-handakuten"
              text="Katakana Dakuten/Handakuten"
              mode={mode}
            />
            <LinkWithButton
              src="hiragana-y-vowel-sounds"
              text="Hiragana Y Vowel Sounds"
              mode={mode}
            />
            <LinkWithButton
              src="katakana-y-vowel-sounds"
              text="Katakana Y Vowel Sounds"
              mode={mode}
            />
            <LinkWithButton
              src="exercices"
              text="Exercises"
              mode={mode}
              color="info"
            />
          </Stack>
          <Button
            variant="outlined"
            color="neutral"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "dark" ? "Turn light" : "Turn dark"}
          </Button>
          {/* <PromoteInstall /> */}
          {/* <PromoteInstallBis /> */}
        </Stack>
      </MainSection>
      <Stack />
    </>
  );
}

export { Home };
