import { Box, Stack } from "@mui/material";
import Container from "../Container";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <Box>
      <Stack direction="column" justifyContent={"space-between"}>
        <NavBar />
        <Container />
      </Stack>
    </Box>
  );
};

export default Layout;
