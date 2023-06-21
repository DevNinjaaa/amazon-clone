import styled from "styled-components";

import dog from "../../assets/dog.png";

export const StyledNfoundContanier = styled.div`
  font-family: "lightfont";
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  transform: translate(-50%, -50%);
`;

export const StyledHeader = styled.h1`
  font-size: 6.4rem;
  color: brown;
  display: block;
  margin: 0;
`;
export const StyledMain = styled.span`
  font-size: 2.8rem;
`;
export const Styledtext = styled.span`
  font-size: 2.8rem;
`;
export const StyledDogImg = styled.div`
  background: url(${dog}) no-repeat center;
  transform: scale(0.9);
  width: 50rem;
  height: 50rem;
`;
