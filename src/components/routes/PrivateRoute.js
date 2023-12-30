// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();

  const isAuthenticated = !!token;
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
