import React from "react";
import { listoflinks } from "../../data/navCategories/categories";
import {
  StyledSignINCartContanier,
  StyledSignINBtnContanier,
  StyledSignINBodyLeft,
  StyledSignINBodyLinks,
  StyledSignINBodyRight,
  StyledBodyTitle,
  StyledSignINBody,
  StyledSignInMainLink,
  StyledSignINBtn,
  StyledSignILink,
  StyledSpanVertical,
  StyledSpanHorizontal,
} from "./signincart.styles";

export const SignInCart = () => {
  return (
    <StyledSignINCartContanier>
      <StyledSignINBtnContanier>
        <StyledSignINBtn to="/auth/google">Signin</StyledSignINBtn>

        <StyledSignInMainLink>
          New customer?
          <StyledSignILink to="/auth/google"> Start here</StyledSignILink>
        </StyledSignInMainLink>
        <StyledSpanHorizontal />
      </StyledSignINBtnContanier>
      <StyledSignINBody>
        <StyledSignINBodyLeft>
          <StyledBodyTitle>Your Lists</StyledBodyTitle>
          <StyledSignINBodyLinks to="/notfound">
            Create a list
          </StyledSignINBodyLinks>
          <StyledSignINBodyLinks to="/notfound">
            Find a list or Registry
          </StyledSignINBodyLinks>
        </StyledSignINBodyLeft>
        <StyledSpanVertical />
        <StyledSignINBodyRight>
          <StyledBodyTitle>Your Account</StyledBodyTitle>
          {listoflinks.map((e) => (
            <StyledSignINBodyLinks to="/notfound" key={e}>
              {e}
            </StyledSignINBodyLinks>
          ))}
        </StyledSignINBodyRight>
      </StyledSignINBody>
    </StyledSignINCartContanier>
  );
};
