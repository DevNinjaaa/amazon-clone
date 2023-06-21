import styled from "styled-components";

import backgroundImg from "../../../assets/sellercenteral.png";
import { Link } from "react-router-dom";

export const StyledBackground = styled.div`
  width: 101rem;
  height: 50rem;
  top: 30%;
  left: 30%;
  position: absolute;
  transform: scale(1.5);
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: -500;
`;
export const StyledH1 = styled.h1`
  position: absolute;
  top: 20%;
  left: 10vw;
  font-size: 5.2rem;
  max-width: 35vw;
  font-family: mediumfont;
`;
export const StyledH4 = styled.h1`
  position: absolute;
  top: 40%;
  left: 10vw;
  font-size: 2rem;
  max-width: 30vw;

  font-family: lightfont;
`;
export const StyledButton = styled(Link)`
  text-decoration: none;
  color: balck;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  position: absolute;
  background: #febd69;
  top: 50%;
  left: 10vw;
  font-size: 2rem;
  width: 10%;
  height: 4rem;
  font-size: 1.4rem;
  font-family: lightfont;
  &:hover {
    background: #f3a847;
  }
`;
