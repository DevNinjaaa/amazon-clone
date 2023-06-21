import React from "react";
import {
  StyledBackground,
  StyledH4,
  StyledH1,
  StyledButton,
} from "./starting.style";
export const SellerCentralStarting = () => {
  return (
    <>
      <StyledH1>Take control over your brand's growth on Amazon</StyledH1>
      <StyledH4>
        Amazon's seller services can help you achieve exponential product growth
        and reap big rewards.
      </StyledH4>
      <StyledButton to={"/sellercentral/upload"}>Get Started</StyledButton>
      <StyledBackground />
    </>
  );
};
