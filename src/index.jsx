import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ThemeProvider } from "./Context/ThemeContext";
import { Provider as LanguageProvider } from "./Context/LanguageContext";
import { Provider as AuthenticationProvider } from "./Context/Authentication";
import { Provider as UserProvider } from "./Context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <AuthenticationProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </AuthenticationProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
