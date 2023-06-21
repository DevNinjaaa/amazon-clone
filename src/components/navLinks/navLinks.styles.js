import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { Link } from "react-router-dom";

export const StyledNavLinksContanier = styled.div`
  padding-left: 1rem;
  width: 100vw;
  color: white;
  font-family: "mediumfont";
  font-size: 2rem;
  align-items: center;
  height: 3rem;
  display: flex;
  background: #232f3e;
`;
export const StyledMenuIcon = styled(Menu)`
  fill: white;
`;
export const StyledNavLinks = styled(Link)`
  text-decoration: none;

  color: white;
  display: flex;
  align-items: center;
  height: 3rem;
  width: fit-content;
  margin: 0.5rem;
  padding: 0 2rem;

  border: 1px solid transparent;
  &:hover {
    border: 1px solid;
  }
`;
export const StyledSideNavLink = styled.div`
  flex-direction: row;
  height: 3rem;
  font-size: 2rem;
  align-items: center;
  gap: 0.2rem;
  display: flex;
  width: fit-content;
  margin: 0.5rem;
  padding: 0 1rem;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid;
  }
`;
