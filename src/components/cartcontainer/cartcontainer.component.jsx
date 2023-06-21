import React from "react";
import { Link } from "react-router-dom";
import {
  StyledCartContainer,
  StyledCartContainerTitle,
  StyledCartContainerPara,
} from "./cartcontainer.style";
export const Cartcontainer = () => {
  return (
    <StyledCartContainer>
      <StyledCartContainerTitle>
        Your Amazon Cart is empty.
      </StyledCartContainerTitle>

      <StyledCartContainerPara>
        Your Shopping Cart lives to serve. Give it purpose — fill it with
        groceries, clothing, household supplies, electronics, and more. Continue
        shopping on the <Link to={"/"}>Amazon.com homepage, </Link> learn about
        today's deals, or visit your Wish List.
      </StyledCartContainerPara>
    </StyledCartContainer>
  );
};
