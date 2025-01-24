import React, { useEffect } from "react";

const MockSAMLAuthorize = () => {

  useEffect(() => {
    setTimeout(() => {
        // Simulate sending a SAML response after authorization
        const samlResponse = encodeURIComponent("mock-saml-assertion"); // A mock SAML assertion

        // Redirect the user back to the SAML callback with the mock assertion
        const redirectUri = "http://localhost:3000/login/saml";
        window.location.href = `${redirectUri}?SAMLResponse=${samlResponse}`;
    }, 2000); // 2-second delay
  }, []);

  return <h1>Mock SAML Authorization...</h1>;
};

export default MockSAMLAuthorize;
