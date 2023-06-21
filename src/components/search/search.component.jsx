import {
  StyledSearchCategories,
  StyledSearchContainer,
  StyledSearchForm,
  StyledSearchIcon,
  StyledSearchInput,
  StyledFocusShadow,
  StyledCategoriesOption,
  StyledOptionContainer,
  StyledDropDownIcon,
} from "./search.styles.js";
import React from "react";

import { categories } from "../../data/navCategories/categories";
import { useState, useEffect } from "react";

const Search = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("All");
  const [SearchValue, SetSearchValue] = useState("");
  useEffect(() => {
    setOpen(false);
  }, [select]);
  function test(e) {
    setSelect(e);
    setOpen(false);
  }
  return (
    <StyledSearchContainer>
      {toggle ? <StyledFocusShadow onClick={() => setToggle(false)} /> : null}
      <StyledSearchForm>
        <StyledSearchCategories
          id="options"
          name="categories"
          onClick={() => setOpen((prev) => !prev)}
        >
          {select} <StyledDropDownIcon />
        </StyledSearchCategories>
        {open ? (
          <StyledOptionContainer>
            {categories.map((e) => (
              <StyledCategoriesOption onClick={() => test(e)} key={e} value={e}>
                {e}
              </StyledCategoriesOption>
            ))}
          </StyledOptionContainer>
        ) : null}

        <StyledSearchInput
          onClick={() => setToggle(true)}
          value={SearchValue}
          placeholder="Search Amazon"
          type="search"
          onChange={(e) => SetSearchValue(e.target.value)}
        />
        <StyledSearchIcon type="submit" role="button" />
      </StyledSearchForm>
    </StyledSearchContainer>
  );
};
export default Search;
