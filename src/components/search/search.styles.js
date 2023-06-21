import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as Drop } from "../../assets/drobdown.svg";

export const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StyledSearchForm = styled.div`
  &:has(> input:focus) {
    outline: none;
    border: orange solid 2px;
    border-radius: 7px;
  }
  width: 60vw;
  border: transparent solid 2px;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 1.4rem;
  font-family: lightfont;
  z-index: 4;
`;

export const StyledSearchCategories = styled.div`
  height: 4.5rem;
  width: fit-content;
  padding: 0 4rem 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  color:black;
  border: none;
  display:flex;
  align-items:center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: #f3f3f3;
  border-right: 1px solid #d5d5d5;
  z-index: 2;
  cursor:pointer;

  font-size: 1.4rem;

  &:focus {
    z-index: 200;
    outline: orange solid 4px;
  }

  }
`;
export const StyledDropDownIcon = styled(Drop)`
  width: 3rem;
  left: 20%;
`;

export const StyledOptionContainer = styled.div`
  background: white;
  font-size: 2.4rem;
  padding: 1rem;
  cursor: pointer;
  overflow-y: scroll;
  color: black;
  height: 30rem;
  display: flex;
  flex-direction: column;
  width: 25rem;
  top: 2.9%;
  left: 22rem;
  position: absolute;
  margin: 2rem;
  z-index: 5;
`;
export const StyledCategoriesOption = styled.div`
  display: flex;
  &:hover {
    background: blue;
    color: white;
  }
`;

export const StyledSearchInput = styled.input`
  border: none;
  display: flex;
  flex-grow: 100;
  height: 4.5rem;
  font-size: 1.4rem;

  ::placeholder {
    opacity: 0.5;
    font-size: 1.5rem;
    left: 3rem;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
export const StyledFocusShadow = styled.div`
  width: 100vw;
  height: 100vw;
  background: #333;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;
export const StyledSearchIcon = styled(SearchIcon)`
  background: #febd69;
  stroke-width: 0.1rem;
  width: 4rem;
  height: 4.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  &:hover {
    background: #f3a847;
  }
`;
