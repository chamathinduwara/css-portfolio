import { Box, Stack } from "@mui/material";
import Title from "./Title";
import NavDraver from "./NavDraver";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";

const NavBar = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent={"space-around"}>
        <Link to={ROUTES.ROOT}>
          <Title />
        </Link>
        <NavDraver />
      </Stack>
    </Box>
  );
};

export default NavBar;
