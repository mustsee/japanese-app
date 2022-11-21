import "@fontsource/public-sans";
import { CssVarsProvider } from "@mui/joy/styles";
import { Stack } from "@mui/joy";
import Layout from "./components/Layout";
import { Main } from "./components/Main";
import { SectionRight } from "./components/SectionRight";

function App() {
  return (
    <CssVarsProvider>
      <Layout.Root>
        <Stack
          sx={{
            // backgroundColor: "lavender",
            p: 2,
            gap: "1em",
          }}
        ></Stack>
        <Layout.Main>
          <Main />
        </Layout.Main>
        <Stack
          sx={{
            // backgroundColor: "lavender",
            p: 2,
            gap: "1em",
          }}
        >
          <SectionRight />
        </Stack>
      </Layout.Root>
    </CssVarsProvider>
  );
}

export default App;
