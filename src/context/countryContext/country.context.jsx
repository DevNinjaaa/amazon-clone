import { createContext, useState } from "react";
import React from "react";

export const CountryContext = createContext({
  country: "Egypt",
  setCountry: () => null,
});

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState("Egypt");
  const value = { country, setCountry };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};
