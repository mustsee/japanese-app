import "@fontsource/public-sans";
import { CssVarsProvider } from "@mui/joy/styles";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { Hiragana } from "pages/Hiragana";
import { Katakana } from "pages/Katakana";

function App() {
  return (
    <Router>
      <div>Here I am</div>
      <CssVarsProvider>
        <Layout.Root>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
          </Routes>
        </Layout.Root>
      </CssVarsProvider>
    </Router>
  );
}

export default App;
