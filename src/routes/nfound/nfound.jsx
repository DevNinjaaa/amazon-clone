import React from "react";
import { Link } from "react-router-dom";
// import { SetUserContext } from "../../api/request/user.api";
import {
  StyledNfoundContanier,
  StyledDogImg,
  Styledtext,
  StyledHeader,
  StyledMain,
} from "./nfound.styles";
export const Nfound = () => {
  return (
    <StyledNfoundContanier>
      <StyledHeader>SORRY</StyledHeader>
      <Styledtext>we couldn't find that page</Styledtext>
      <StyledMain>
        Try Searching or go to <Link to="/">Amazon's home page.</Link>
      </StyledMain>
      <StyledDogImg />
    </StyledNfoundContanier>
  );
};
