import styled from "styled-components";
import { ReactComponent as Amazon } from "../../assets/amazon.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

export const StyledAmazonIcon = styled(Amazon)`
  box-sizing: border-box;
  transform: scale(0.9);
  width: 12.5rem;
  height: 6rem;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: white 1px solid;
  }
`;
export const StyledCartIcon = styled(Cart)`
  fill: #ffffff;
  width: 5rem;
`;
export const StyledNav = styled.div`
  font-family: boldfont;
  min-width: 100vw;
  flex-wrap: nowrap;
  height: 6rem;
  color: #ffffff;
  background: #131921;
  display: flex;
`;
export const SyledNavRight = styled.div`
  width: auto;
  flex-grow: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const SyledNavleft = styled.div`
  width: 20rem;
  flex-grow: 100;
  display: flex;
  flex-direction: row;
`;
