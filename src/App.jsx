import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/index";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box >
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
