import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import OAuthPage from "./pages/OAuthPage";
import SAMLPage from "./pages/SAMLPage";
import { AuthProvider } from "./pages/AuthProvider";
import ProtectedPage from "./pages/ProtectedPage";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to SSO Example!</h1>
              <div>
                <button>
                  <Link to="/login/oauth" style={{ textDecoration: "none", color: "black" }}>
                    Go to OAuth Login
                  </Link>
                </button>
                <button>
                  <Link to="/login/saml" style={{ textDecoration: "none", color: "black" }}>
                    Go to SAML Login
                  </Link>
                </button>
              </div>
            </div>
          }
        />
        <Route path="/login/oauth" element={<OAuthPage />} />
        <Route path="/login/saml" element={<SAMLPage />} />
        <Route path="/protected/oauth" element={<ProtectedPage pageType="OAuth" />} />
        <Route path="/protected/saml" element={<ProtectedPage pageType="SAML" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
