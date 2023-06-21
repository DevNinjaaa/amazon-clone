import styled from "styled-components";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";

export const StyledDeliverContainer = styled.div`
  box-sizing: border-box;
  padding: 0 1rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 2rem;

  margin: 0.5rem;
  border: 1px solid transparent;
  &:hover {
    border: 0.1rem solid;
  }
`;
export const StyledLocationIcon = styled(LocationIcon)`
  margin-top: 0.8rem;
  position: relative;
  width: 1.5rem;
  stroke: #ffffff;
  color: white;
`;
export const StyledDeliverSpan = styled.div`
  color: #ccc;
  margin: 0.5rem;
  font-size: 1.2rem;
`;
export const StyledDeliverCountry = styled.div`
  font-size: 1.4rem;
  width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 0 2rem;
  width: fitcontant;
  color: white;
`;
export const StyledFocusShadow = styled.div`
  width: 100vw;
  height: 100vw;
  background: #333;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 400;
`;
