import { useContext } from "react";
import React from "react";

import {
  StyledCountriesContanier,
  StyledCountriesSelect,
  StyledCountriesOption,
} from "./coutries.styles";
import { CountryContext } from "../../context/countryContext/country.context";
import { countryList } from "../../data/navCategories/categories";
const CountriesDropBox = () => {
  const { setCountry } = useContext(CountryContext);

  return (
    <StyledCountriesContanier>
      <StyledCountriesSelect
        onChange={(e) => setCountry(e.target.value)}
        id="country"
        name="country"
        className="form-control"
      >
        {countryList.map((e) => (
          <StyledCountriesOption key={e} value={e}>
            {e}
          </StyledCountriesOption>
        ))}
      </StyledCountriesSelect>
    </StyledCountriesContanier>
  );
};

export default CountriesDropBox;
