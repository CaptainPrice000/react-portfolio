import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";

const OAuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOAuthLogin = () => {
    // Simulate redirecting to an OAuth2 authorization server
    const authEndpoint = "http://localhost:3000/mock-oauth-authorize";
    const clientId = "mock-client-id";
    const redirectUri = "http://localhost:3000/login/oauth";
    const responseType = "token";
    const scope = "read write";
    const state = "random-state";

    const url = `${authEndpoint}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
    window.location.href = url;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const params = new URLSearchParams(hash.substring(1));
        const token = params.get("access_token");
        if (token) {
          dispatch(setToken(token));
          navigate("/protected/oauth");
        }
      }
    };

    handleHashChange(); // Check on component mount
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [dispatch, navigate]);

  return (
    <div>
      <h1>OAuth2 Login</h1>
      <button onClick={handleOAuthLogin}>Login with OAuth2</button>
    </div>
  );
};

export default OAuthPage;
