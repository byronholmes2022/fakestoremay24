import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const getStoredToken = () => localStorage.getItem("token");

  return getStoredToken() ? <Outlet /> : <Navigate to={"/login"} />;
}
