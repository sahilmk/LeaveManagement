import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import { LoginContextProvider } from './Context/AuthContext';
import "./Styles/globalStyling.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginContextProvider>
      <Router>
        <App />
      </Router>
    </LoginContextProvider>
  </React.StrictMode>
)
