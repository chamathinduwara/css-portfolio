import { Box, Stack } from "@mui/material";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Stack direction="column" justifyContent={"space-between"}>
        <NavBar />
        <Outlet />
      </Stack>
    </Box>
  );
};

export default Layout;
