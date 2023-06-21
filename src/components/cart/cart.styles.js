import styled from "styled-components";
import { ReactComponent as Cart } from "../../assets/cart.svg";

export const StyledCartContainer = styled.div`
  display: flex;
  font-size: 2.5rem;
  border: 1px solid transparent;

  margin: 0.5rem;
  &:hover {
    border: 1px solid;
  }
`;
export const StyledCartIcon = styled(Cart)`
  fill: white;
  width: 4rem;
  padding-left: 0.5rem;
`;
export const StyledCartSpan = styled.span`
display: flex;
align-items: flex-end;
padding: 0.5rem;
}
`;
