import { navLinks } from "../../data/navCategories/categories";
import React from "react";

import {
  StyledNavLinksContanier,
  StyledNavLinks,
  StyledMenuIcon,
  StyledSideNavLink,
} from "./navLinks.styles";
export const NavLinks = () => {
  return (
    <StyledNavLinksContanier>
      <StyledSideNavLink>
        <StyledMenuIcon />
        <div>All</div>
      </StyledSideNavLink>

      {navLinks.map((e) => (
        <StyledNavLinks key={e} to="/notfound">
          {e}
        </StyledNavLinks>
      ))}
    </StyledNavLinksContanier>
  );
};
