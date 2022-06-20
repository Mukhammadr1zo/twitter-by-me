import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [language, setLanguage] = React.useState(window.localStorage.getItem("language") || "en");

  React.useEffect(() => {
    if (language) {
      window.localStorage.setItem("language", language);
    } else {
      window.localStorage.removeItem("language");
    }
  }, [language]);

  return <Context.Provider value={{ language, setLanguage }}>{children}</Context.Provider>;
}

export { Context, Provider };
