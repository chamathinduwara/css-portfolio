import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { ColorModeContaxt, tokens } from "../../config/theme";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

// const styles = styled({
//   root: {
//     display: "grid",
//     gridTemplateColumns: "1fr auto", // '1fr' for the title and 'auto' for other content
//     alignItems: "center", // Vertically center the content
//   },
// });

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContaxt);

  return (
    <AppBar position="sticky" style={{ height: 100, justifyContent: "center" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ flexGrow: 1, display: "flex", ml: 30 }}>
          CHAMATH INDUWARA
        </Typography>

        <Stack direction="row">
          <Typography variant="h5" sx={{ m: 2 }}>
            <Link
              to={ROUTES.ROOT}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HOME
            </Link>
          </Typography>
          <Typography variant="h5" sx={{ m: 2 }}>
            <Link
              to={ROUTES.ABOUT}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              ABOUT
            </Link>
          </Typography>
          <Typography variant="h5" sx={{ m: 2 }}>
            <Link
              to={ROUTES.PROJECCT}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              PROJECT
            </Link>
          </Typography>
          <Typography variant="h5" sx={{ m: 2 }}>
            <Link
              to={ROUTES.CONTACTME}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              CONTACT ME
            </Link>
          </Typography>
          <Typography sx={{ m: 2 }}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
