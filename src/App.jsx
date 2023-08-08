import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/index";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContaxt, useMode } from "./config/theme";
import Home from "./components/Dashboard/Home";
import Project from "./components/Dashboard/Project";
import About from "./components/Dashboard/About";
import Contactme from "./components/Dashboard/Contactme.jsx";
import { ROUTES } from "./config/routes";
import { CssBaseline } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContaxt.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path={ROUTES.ROOT} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.PROJECCT} element={<Project />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACTME} element={<Contactme />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContaxt.Provider>
  );
}

export default App;
