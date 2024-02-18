import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import clientId from '../src/components/key'

import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <Router>
    <App />
    </Router>
    </GoogleOAuthProvider>
   </React.StrictMode>
    )

