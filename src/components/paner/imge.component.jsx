import React, { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import {
  StyledCartContainer,
  StyledCartLI,
  StyledCartIMG,
  StyledCartUL,
  StyledArrowLeft,
  StyledArrowRight,
} from "./imge.style";

export const HomeImges = () => {
  const [counter, setCounter] = useState(0);
  const toggle = () => {
    if (counter === 0) {
      return (
        <StyledCartLI>
          <StyledCartIMG src={img1} className="img1" />
        </StyledCartLI>
      );
    } else if (counter === 1) {
      return (
        <StyledCartLI>
          <StyledCartIMG src={img2} className="img2" />
        </StyledCartLI>
      );
    } else if (counter === 2) {
      return (
        <StyledCartLI>
          <StyledCartIMG src={img3} className="img3" />
        </StyledCartLI>
      );
    } else if (counter === 3) {
      return (
        <StyledCartLI>
          <StyledCartIMG src={img4} className="img4" />
        </StyledCartLI>
      );
    } else if (counter === 4) {
      return (
        <StyledCartLI>
          <StyledCartIMG src={img5} className="img6" />
        </StyledCartLI>
      );
    }
  };
  const increase = (e) => {
    if (e === 4) {
      return setCounter(1);
    } else {
      setCounter(e + 1);
    }
  };
  const decrease = (e) => {
    if (e === 0) {
      return setCounter(4);
    } else {
      setCounter(e - 1);
    }
  };
  return (
    <StyledCartContainer>
      <StyledCartUL>{toggle()}</StyledCartUL>
      <StyledArrowLeft onClick={() => increase(counter)} />
      <StyledArrowRight onClick={() => decrease(counter)} />
    </StyledCartContainer>
  );
};
