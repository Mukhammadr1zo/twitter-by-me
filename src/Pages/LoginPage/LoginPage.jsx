import React from "react";
import TwitterIcon from "../../Assets/Images/TwitterLogo.svg";
import useToken from "../../Hooks/useToken";

import "./LoginPage.scss";

const LoginPage = () => {
  const [setIsLoggedIn] = useToken(true);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });

    const data = await res.json();

    if (data?.token) {
      setIsLoggedIn(data?.token);
      window.localStorage.setItem("email", email.value.trim());
    }
  };

  React.useEffect(() => {
    window.localStorage.removeItem("token");
    setIsLoggedIn("");
  });

  return (
    <section className="login">
      <img className="login__logo" src={TwitterIcon} alt="Twitter logo" width={50} height={41} />

      <h2 className="login__heading">Log in to Twitter</h2>

      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="text"
          name="email"
          placeholder="Phone number, email address"
          defaultValue={"eve.holt@reqres.in"}
        />

        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={"cityslicka"}
        />
        <button className="login__button">Log In</button>
      </form>

      <div className="login__bottom">
        <button className="login__bottom__button" name="sign-up">
          Forgot password?
        </button>

        <button className="login__bottom__button" name="forgot-password">
          Sign up to Twitter?
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
