import React from "react";
import {
  StyledBoxLink,
  StyledBoxImg,
  StyledBoxDescription,
  StyledBoxSpanTitle,
  StyledBoxSpanDescription,
} from "./box.styles";
export const Box = ({ imgurl, title, description, url }) => {
  return (
    <StyledBoxLink to={url}>
      <StyledBoxImg src={imgurl} />
      <StyledBoxDescription>
        <StyledBoxSpanTitle> {title} </StyledBoxSpanTitle>
        <StyledBoxSpanDescription> {description}</StyledBoxSpanDescription>
      </StyledBoxDescription>
    </StyledBoxLink>
  );
};
