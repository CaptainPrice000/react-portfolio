import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import OAuthPage from "./pages/OAuthPage";
import SAMLPage from "./pages/SAMLPage";
import ProtectedPage from "./pages/ProtectedPage";
import MockOAuthAuthorize from "./mockserver/MockOAuthAuthorize";
import MockSAMLAuthorize from "./mockserver/MockSAMLAuthorize";
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
<Provider store={store}>
    <Router>
        <Routes>
            <Route
                path="/"
                element={
                <div>
                    <h1>Welcome to SSO Example!</h1>
                    <div>
                    <button>
                        <Link to="/login/oauth">
                            Go to OAuth Login
                        </Link>
                    </button>
                    <button>
                        <Link to="/login/saml">
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

            <Route path="/mock-oauth-authorize" element={<MockOAuthAuthorize />} />
            <Route path="/mock-saml-authorize" element={<MockSAMLAuthorize />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
</Provider>
);

export default App;
