import styled from "styled-components";

export const StyledGolobal = styled.div`
  background: #f9fbfc;
  position: absolute;
  width: 100%;
  height: fit-contant;
`;

export const StyledFormContainer = styled.div`
  padding: 5%;
  background: #fff;
  position: relative;
  width: 70vw;
  bottom: 0;

  top: 100vh;
  left: 50%;
  transform: translate(-50%, -50%);
  height: fit-content;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0 5rem -20px rgba(0, 0, 0, 0.5);
`;
export const StyledFormInputs = styled.div``;
export const StyledBullutInfo = styled.span`
  font-size: 1.8rem;
  font-family: mediumfont;
`;
export const StyledBullut = styled.span`
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: black;
  font-size: 1.8rem;
  color: white;
  border-radius: 50%;
  pointer: cursor;
`;
export const StyledCategories = styled.div`
  font-size: 1.8rem;
  margin: 2rem;
  &:hover {
    background: gray;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  margin-top: 2rem;
  gap: 2rem;
`;

export const SyledInput = styled.input`
  width: 40vw;
  height: 3rem;
`;
export const SyledLabel = styled.label`
  font-size: 1.8rem;
`;

export const StyledP = styled.p`
  padding: 10rem 0 0 2rem;
  font-size: 1.8rem;
`;
export const StyledBtn = styled.input`
  position: absolute;
  top: 90%;
  text-decoration: none;
  margin: 10rem 0 0 10rem;
  color: balck;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: #febd69;
  font-size: 2rem;
  width: 10%;
  height: 4rem;
  font-size: 1.4rem;
  font-family: lightfont;
  &:hover {
    background: #f3a847;
  }
`;
