import styled from "styled-components";

export const StyledCardContanier = styled.div`
  z-index: 500;
  width: 35rem;
  background: white;
  height: 22rem;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
`;
export const StyledTitleCard = styled.div`
  font-size: 1.6rem;
  background: #f0f2f2;
  border-bottom: 1px solid;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  height: 6rem;
  display: flex;
  padding-left: 10%;
  align-items: center;
`;
export const StyledCardBody = styled.div`
  font-size: 1.5rem;
  margin-left: 10%;
  margin-right: 10%;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  div {
    margin-bottom: 1rem;
  }
`;
export const StyledBodyPara = styled.div``;
export const StyledBodyButtun = styled.button`
  width: 100%;
  border: none;
  height: 3rem;
  border-radius: 5px;
  background: #ffd814;
  &:hover {
    background: darkorange;
  }
`;
export const StyledLine = styled.div`
  width: 100%;
  margin-top: 2rem;
  height: 1px;
  background: black;
`;
export const StyledOR = styled.span`
  background: white;
  display: flex;
  position: absolute;
  font-size: 1rem;
  font-family: "lightfont";
  justify-content: center;
  align-items: center;
  left: 47.5%;
  top: 71%;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  z-index: 50;
`;
