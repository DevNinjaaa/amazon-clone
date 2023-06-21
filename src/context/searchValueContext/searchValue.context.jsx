import { createContext, useState } from "react";

export const SearchValueContext = createContext({
  searchvalue: "",
  setSearchValue: () => null,
});

export const SearchValueProvider = ({ children }) => {
  const [searchvalue, setSearchValue] = useState("");
  const value = { searchvalue, setSearchValue };
  return (
    <SearchValueContext.Provider value={value}>
      {children}
    </SearchValueContext.Provider>
  );
};
