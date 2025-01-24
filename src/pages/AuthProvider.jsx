import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    // Retrieve token from storage if it exists
    return localStorage.getItem("authToken");
  });

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken); // Save token for SSO
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
