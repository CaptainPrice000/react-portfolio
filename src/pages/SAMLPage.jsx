import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";

const SAMLPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSAMLLogin = () => {
    const authEndpoint = "http://localhost:3000/mock-saml-authorize";
    const redirectUri = "http://localhost:3000/login/saml";
    const samlRequest = "mock-saml-request";

    const url = `${authEndpoint}?SAMLRequest=${encodeURIComponent(samlRequest)}&RelayState=${encodeURIComponent(
      redirectUri
    )}`;
    window.location.href = url;
  };

  useEffect(() => {
    const handleTokenExtraction = () => {
      const params = new URLSearchParams(window.location.search);
      const samlResponse = params.get("SAMLResponse");
      if (samlResponse) {
        const decodedResponse = decodeURIComponent(samlResponse);
        dispatch(setToken(decodedResponse));
        navigate("/protected/saml");
      }
    };

    handleTokenExtraction(); // Check on component mount
  }, [dispatch, navigate]);

  return (
    <div>
      <h1>SAML Login</h1>
      <button onClick={handleSAMLLogin}>Login with SAML</button>
    </div>
  );
};

export default SAMLPage;
