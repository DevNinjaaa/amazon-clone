import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledSignINCartContanier = styled.div`
  z-index: 2;
  color: black;
  height: 38.6rem;
  width: 50rem;
  top: 7%;
  left: 70%;
  display: flex;
  flex-direction: column;
  background: white;
  position: absolute;
  padding: 1rem;
  border-radius: 4px;
`;
export const StyledSignINBtnContanier = styled.div`
  display: flex;
  flex-direction: column;
  width: 46rem;
  height: 6.4rem;
`;
export const StyledSignINBtn = styled(Link)`
  font-size: 1.3rem;
  border-radius: 4px;
  text-decoration: none;
  background: #febd69;
  display: flex;
  position: absolute;
  top: 3rem;
  left: 50%;
  align-items: center;
  transform: translate(-50%, -50%);
  justify-content: center;
  color: black;
  width: 20rem;
  height: 3rem;
  left: 50%;
  &:hover {
    background: #f3a847;
  }
`;
export const StyledSignInMainLink = styled.p`
  position: absolute;
  top: 4.5rem;
  font-size: 1.1rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledSpanHorizontal = styled.span`
  height: 26rem;
  width: 1px;
  position: absolute;
  top: 9rem;
  background: #eee;

  left: 50%;
`;
export const StyledSpanVertical = styled.span`
  height: 1px;
  width: 45rem;

  position: absolute;
  top: 8rem;
  background: #eee;

  left: 3rem;
`;
export const StyledBodyTitle = styled.span`
  font-size: 1.6rem;
  font-family: boldfont;
`;
export const StyledSignINBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0 0 0;
  justify-content: center;
`;
export const StyledSignINBodyLeft = styled.div`
  width: 22rem;
  display: flex;
  align-items: start;
  flex-direction: column;
`;
export const StyledSignINBodyRight = styled.div`
  width: 22rem;
  padding-left: 1rem;
  position: relative;
  align-items: start;
  display: flex;
  flex-direction: column;
`;
export const StyledSignILink = styled(Link)`
  font-size: 1rem;
  color: black;
  text-decoration: none;
`;
export const StyledSignINBodyLinks = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  &:hover {
    text-decoration: underline;
    color: orange;
  }
`;
