import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [theme, setTheme] = React.useState(window.localStorage.getItem("theme") || "light");

  React.useEffect(() => {
    if (theme) {
      window.localStorage.setItem("theme", theme);
    } else {
      window.localStorage.removeItem("theme");
    }
  }, [theme]);

  return <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>;
}

export { Context, Provider };
