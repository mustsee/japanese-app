import "@fontsource/public-sans";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import { Exercises } from "pages/Exercises";
import { Vocabulary } from "pages/Vocabulary";
import { Hiragana } from "pages/Hiragana";
import { HiraganaDakutenHandakuten } from "pages/HiraganaDakutenHandakuten";
import { HiraganaYVowelSounds } from "pages/HiraganaYVowelSounds";
import { Home } from "pages/Home";
import { Katakana } from "pages/Katakana";
import { KatakanaDakutenHandakuten } from "pages/KatakanaDakutenHandakuten";
import { KatakanaYVowelSounds } from "pages/KatakanaYVowelSounds";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Root } from "./components/Layout";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hiragana",
    element: <Hiragana />,
  },
  {
    path: "/katakana",
    element: <Katakana />,
  },
  {
    path: "/hiragana-dakuten-handakuten",
    element: <HiraganaDakutenHandakuten />,
  },
  {
    path: "/katakana-dakuten-handakuten",
    element: <KatakanaDakutenHandakuten />,
  },
  {
    path: "/hiragana-y-vowel-sounds",
    element: <HiraganaYVowelSounds />,
  },
  {
    path: "/katakana-y-vowel-sounds",
    element: <KatakanaYVowelSounds />,
  },
  {
    path: "/exercices",
    element: <Exercises />,
  },
  {
    path: "/vocabulary",
    element: <Vocabulary />,
  },
];

function App() {
  return (
    <Router>
      <CssVarsProvider>
        <CssBaseline />
        <Root>
          <Routes>
            {routes.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />;
            })}
          </Routes>
        </Root>
      </CssVarsProvider>
    </Router>
  );
}

export default App;
