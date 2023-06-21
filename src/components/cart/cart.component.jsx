import {
  StyledCartIcon,
  StyledCartContainer,
  StyledCartSpan,
} from "./cart.styles";
import React from "react";

export const ShopCart = () => {
  return (
    <StyledCartContainer>
      <StyledCartIcon />
      <StyledCartSpan>Cart</StyledCartSpan>
    </StyledCartContainer>
  );
};
