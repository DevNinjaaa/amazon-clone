import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBoxLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  width: 31.8rem;
  height: fit-contant;
  padding: 1.4rem 1.8rem;
  background: white;
  border: 1px solid #ccc;
  border-radius: 1rem;
  gap: 0.5rem;
  // flex-basis: calc(33.33% - 20px);
`;
export const StyledBoxImg = styled.img`
  width: 6.611rem;
  height: 6.611rem;
  display: flex;
  justify-content: center;
`;
export const StyledBoxDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledBoxSpanTitle = styled.span`
  font-size: 1.7rem;
`;
export const StyledBoxSpanDescription = styled.span`
  font-size: 1.4rem;
`;
