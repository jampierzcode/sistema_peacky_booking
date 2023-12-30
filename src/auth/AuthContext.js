import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const [usuario, setUsuario] = useState(
    sessionStorage.getItem("usuario") || null
  );
  const login = (newToken, user) => {
    setToken(newToken);
    setUsuario(JSON.stringify(user));
    sessionStorage.setItem("token", newToken);
    sessionStorage.setItem("usuario", JSON.stringify(user));
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem("token");
    setUsuario(null);
    sessionStorage.removeItem("usuario");
  };

  return (
    <AuthContext.Provider value={{ token, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
