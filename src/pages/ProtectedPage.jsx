import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../redux/slices/authSlice";

const ProtectedPage = ({ pageType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/");
  };

  if (!token) {
    return <h1>Access Denied. Please log in first.</h1>;
  }

  return (
    <div>
      <h1>Welcome to the Protected {pageType} Page!</h1>
      <p>Your token: {token}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedPage;
