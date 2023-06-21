// STYLED COMPONENTS
import {
  StyledDeliverContainer,
  StyledDeliverSpan,
  StyledDeliverCountry,
  StyledLocationIcon,
  StyledFocusShadow,
} from "./deliver.styles";

// REACT COMPONENTS
import { CardContanier } from "../centerCard/centerCard.component";
import React from "react";

// HOOKS
import { useState, useContext, useEffect } from "react";
import { CountryContext } from "../../context/countryContext/country.context";

// Country Provider
const Deliver = () => {
  const [toggle, setToggle] = useState(false);

  const { country } = useContext(CountryContext);
  function togglefunc() {
    setToggle((prevToggle) => !prevToggle);
  }
  useEffect(() => {
    setTimeout(togglefunc, 200);
  }, [country]);
  return (
    <div>
      <StyledDeliverContainer onClick={togglefunc}>
        {toggle ? <StyledFocusShadow /> : null}
        <StyledLocationIcon />
        <StyledDeliverSpan>
          Deliver to
          <StyledDeliverCountry>{country}</StyledDeliverCountry>
        </StyledDeliverSpan>
      </StyledDeliverContainer>
      {toggle ? <CardContanier /> : null}
    </div>
  );
};
export default Deliver;
