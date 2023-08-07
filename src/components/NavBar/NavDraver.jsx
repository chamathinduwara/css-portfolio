import React from "react";
import { Stack } from "@mui/material";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";

const NavDraver = () => {
  return (
    <div>
      <Stack direction="row" justifyContent={"space-between"}>
        <Link to={ROUTES.ROOT}>
          <NavItem name="HOME" />
        </Link>
        <Link to={ROUTES.PROJECCT}>
          <NavItem name="PROJECT" />
        </Link>
        <Link to={ROUTES.ABOUT}>
          <NavItem name="ABOUT" />
        </Link>
        <Link to={ROUTES.CONTACTME}>
          <NavItem name="CONTACT ME" />
        </Link>
      </Stack>
    </div>
  );
};

export default NavDraver;
