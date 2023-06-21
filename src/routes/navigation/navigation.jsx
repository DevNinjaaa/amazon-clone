import Nav from "../../components/navigation/navigation.component";
import { NavLinks } from "../../components/navLinks/navLinks.component";
import React from "react";
import { Outlet } from "react-router-dom";
import { StyledHomeContainer } from "./navigation.style";
const Navigation = () => {
  return (
    <StyledHomeContainer>
      <Nav />
      <NavLinks />
      <Outlet />
    </StyledHomeContainer>
  );
};

export default Navigation;
