import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const login = (user) => {
    setIsAuthenticated(true);
    setUserProfile(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserProfile(null);
  };

  const contextValues = {
    isAuthenticated,
    userProfile,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
