import React from "react";
import { Route, Routes } from "react-router-dom";

import AppInner from "./Components/AppInner/AppInner";
import LoginPage from "./Pages/LoginPage/LoginPage";
import useTheme from "./Hooks/useTheme";
import useToken from "./Hooks/useToken";

import "./App.scss";

function App() {
  const [theme] = useTheme();
  const [token] = useToken();

  return (
    <div className={`app ${theme === "dark" ? "app--dark" : "app--light"}`}>
      {token ? (
        <Routes>
          <Route path="/*" element={<AppInner />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
