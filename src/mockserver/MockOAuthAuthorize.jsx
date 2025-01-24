import React, { useEffect } from "react";

const MockOAuthAuthorize = () => {

  useEffect(() => {
    // Simulate a delay of 2 seconds before redirecting with tokens
    setTimeout(() => {
      const accessToken = "mock-access-token";
      const idToken = "mock-id-token"; // mock ID Token

      const redirectUri = "http://localhost:3000/login/oauth";
      const fragment = `access_token=${accessToken}&id_token=${idToken}&token_type=bearer&expires_in=3600`;

      window.location.href = `${redirectUri}#${fragment}`; // Redirect with tokens
    }, 2000); // 2-second delay
  }, []);

  return <h1>Mock OIDC Authorization (Delaying for 2 seconds)...</h1>;
};

export default MockOAuthAuthorize;
