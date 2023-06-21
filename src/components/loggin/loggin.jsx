import React, { useState } from "react";
import { SignInCart } from "../signinCart/signincart.component";
import { IsAuthCookie } from "../../utils/utils";
import {
  StyledFocusShadow,
  StyledLoginContanier,
  StyledLoginSpanOne,
  StyledLoginSpanTwo,
} from "./loggin.styles";

export const LoginButton = () => {
  IsAuthCookie("session");
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      {IsAuthCookie ? (
        <div>hi, you are logged in</div>
      ) : (
        <StyledLoginContanier
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <StyledLoginSpanOne>hello, signin</StyledLoginSpanOne>
          <StyledLoginSpanTwo>Account&List </StyledLoginSpanTwo>
          {isHovered && <SignInCart />}
          {isHovered && <StyledFocusShadow onClick={handleMouseLeave} />}
        </StyledLoginContanier>
      )}
    </>
  );
};
