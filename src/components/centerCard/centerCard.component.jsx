import CountriesDropBox from "../countries/countries.component";
import React from "react";

import {
  StyledCardContanier,
  StyledTitleCard,
  StyledCardBody,
  StyledBodyPara,
  StyledBodyButtun,
  StyledLine,
  StyledOR,
} from "./centerCard.styles";
export const CardContanier = () => {
  return (
    <StyledCardContanier>
      <StyledTitleCard>Choose your delivery location</StyledTitleCard>
      <StyledCardBody>
        <StyledBodyPara>
          Delivery options and delivery speeds may vary for different locations
        </StyledBodyPara>
        <StyledBodyButtun>Sign-in to see your address</StyledBodyButtun>
        <StyledLine>
          <StyledOR>Or</StyledOR>
        </StyledLine>
        <CountriesDropBox />
      </StyledCardBody>
    </StyledCardContanier>
  );
};
