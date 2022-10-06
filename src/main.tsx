import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoginContextProvider } from "./Context/AuthContext";
import "./Styles/globalStyling.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoginContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoginContextProvider>
  </React.StrictMode>
);
