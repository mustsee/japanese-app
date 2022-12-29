import "@fontsource/public-sans";
import { CssVarsProvider } from "@mui/joy/styles";
import { Exercises } from "pages/Exercises";
import { Hiragana } from "pages/Hiragana";
import { HiraganaDakutenHandakuten } from "pages/HiraganaDakutenHandakuten";
import { HiraganaYVowelSounds } from "pages/HiraganaYVowelSounds";
import { Home } from "pages/Home";
import { Katakana } from "pages/Katakana";
import { KatakanaDakutenHandakuten } from "pages/KatakanaDakutenHandakuten";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Root } from "./components/Layout";

function App() {
  const basename =
    document.querySelector("base")?.getAttribute("href") ?? "/japanese-app";

  return (
    <Router basename={basename}>
      <CssVarsProvider>
        <Root>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
            <Route
              path="/hiragana-dakuten-handakuten"
              element={<HiraganaDakutenHandakuten />}
            />
            <Route
              path="/katakana-dakuten-handakuten"
              element={<KatakanaDakutenHandakuten />}
            />
            <Route
              path="/hiragana-y-vowel-sounds"
              element={<HiraganaYVowelSounds />}
            />
            <Route path="/exercices" element={<Exercises />} />
          </Routes>
        </Root>
      </CssVarsProvider>
    </Router>
  );
}

export default App;
