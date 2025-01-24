import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedPage = ({ pageType }) => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  if (!token) {
    return <h1>You are not authorized. Please login.</h1>;
  }

  const handleLogout = () => {
    logout(); // Clear the stored token
    navigate("/"); // Redirect to the home page or login page
  };

  return (
    <div>
      <h1>Welcome to the Protected Page!</h1>
      <p>You're logged in with the {pageType} token.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedPage;
