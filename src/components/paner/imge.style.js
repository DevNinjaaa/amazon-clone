import styled from "styled-components";
import { ReactComponent as Arrowleft } from "../../assets/arrowleft.svg";
import { ReactComponent as Arrowright } from "../../assets/arrowright.svg";

export const StyledCartContainer = styled.div`
  z-index: -1;
  position: absolute;
  left: 10%;
  width: 80vw;
`;
export const StyledCartUL = styled.ul`
  top: 40%;

  width: 80wv;
`;
export const StyledCartLI = styled.li`
  list-style: none;
  top: 40%;
  position: absolute;
`;
export const StyledCartIMG = styled.img`
  width: 100%;
`;
export const StyledArrowLeft = styled(Arrowleft)`
  path {
    fill: black;
  }
  width: 5rem;
  top: 10vh;
  left: 3vw;
  position: absolute;
`;
export const StyledArrowRight = styled(Arrowright)`
  path {
    fill: black;
  }
  width: 5rem;
  top: 10vh;
  left: 75vw;
  position: absolute;
`;
