import { Stack, Button } from "@mui/joy";
import Layout from "components/Layout";
import { Header } from "components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Stack />
      <Layout.Main>
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <Header title="Welcome to Learn Japanese!" />
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <Link to="hiragana" style={{ textDecoration: "none" }}>
              <Button fullWidth>Hiragana</Button>
            </Link>
            <Link to="katakana" style={{ textDecoration: "none" }}>
              <Button fullWidth>Katakana </Button>
            </Link>
          </Stack>
        </Stack>
      </Layout.Main>
      <Stack />
    </>
  );
}

export { Home };
