import "@fontsource/public-sans";
import { CssVarsProvider } from "@mui/joy/styles";
import { Root } from "./components/Layout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Hiragana } from "pages/Hiragana";
import { Katakana } from "pages/Katakana";

function App() {
  return (
    <Router>
      <CssVarsProvider>
        <Root>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
          </Routes>
        </Root>
      </CssVarsProvider>
    </Router>
  );
}

export default App;
