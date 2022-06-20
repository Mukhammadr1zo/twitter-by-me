import React from "react";

const Context = React.createContext(null);

function Provider({ children }) {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {}, [user]);

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}

export { Context, Provider };
