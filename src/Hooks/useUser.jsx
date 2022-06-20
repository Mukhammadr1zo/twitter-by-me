import React from "react";
import { Context } from "../Context/UserContext";

const useUser = (setterOnly = false) => {
  const { user, setUser } = React.useContext(Context);

  React.useEffect(() => {
    // Get user
    (async () => {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();

      // Find user
      for (let i = 0; i <= data.total_pages; i++) {
        const response = await fetch("https://reqres.in/api/users?page=" + (i + 1));
        const data = await response.json();

        data.data.forEach((data) => {
          if (data.email === window.localStorage.getItem("email")) {
            setUser(data);
          }
        });
      }
    })();
  }, [setUser]);

  return setterOnly ? [setUser] : [user, setUser];
};

export default useUser;
