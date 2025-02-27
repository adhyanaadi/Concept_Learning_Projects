import React from "react";
import { Navigate } from "react-router";

const isAdmin = false; // ✅ Hardcoded condition

export default function Admin() {
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <h2>Welcome to the Admin Panel</h2>;
}
