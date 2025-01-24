import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const SAMLPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSAMLLogin = () => {
    // Simulate redirecting to a SAML authentication flow
    const mockToken = "mock-saml-token"; // Simulated token

    // Redirect back with token in the URL fragment
    const redirectUri = "http://localhost:3000/login/saml"; // App's callback URI
    const fragment = `access_token=${mockToken}&token_type=bearer&expires_in=3600`;

    window.location.href = `${redirectUri}#${fragment}`;
  };

  useEffect(() => {
    const handleTokenExtraction = () => {
      const hash = window.location.hash;
      if (hash) {
        const params = new URLSearchParams(hash.substring(1)); // Extract token from the fragment
        const token = params.get("access_token");
        if (token) {
          login(token); // Store the token

          // After a slight delay, navigate to the protected page
          setTimeout(() => {
            navigate("/protected/saml"); // Redirect to protected page
          }, 1000); // Simulate a slight delay
        } else {
          // If token is empty or missing, redirect to main page
          alert("Unauthorized access!");
          navigate("/");
        }
      } else {
        // If there's no hash, stay on the login page
        navigate("/login/saml");
      }
    };

    // Listen for changes in the URL fragment (hash)
    window.addEventListener("hashchange", handleTokenExtraction, false);

    // Initially check if the URL has a token
    handleTokenExtraction();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("hashchange", handleTokenExtraction, false);
    };
  }, [login, navigate]); // Re-run this effect when login or navigate change

  return (
    <div>
      <h1>SAML Login</h1>
      <button onClick={handleSAMLLogin}>Login with SAML</button>
    </div>
  );
};

export default SAMLPage;
