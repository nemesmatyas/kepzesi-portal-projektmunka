import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import LoginForm from "../components/LoginForm";
//import RoundedButton from "../UI/RoundedButton";
import { UserAuth } from "../components/AuthContext";
import Lablec from "../components/Lablec";
import classes from "./Login.module.css";

function Login_Page() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = UserAuth();
  const { forgotPassword } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await login(loginEmail, loginPassword);
      navigate("/kezdooldal");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const forgotPasswordHandler = (event) => {
    event.preventDefault();
    if(loginEmail) forgotPassword(loginEmail).then(() => {
      console.log("Az elfelejtett jelszó a ",loginEmail," e-mail címre elküldve!");
      setLoginEmail("");
    })
  };

  return (
    <>
      <h1 className={classes["kepzesi-portal"]}>Képzési portál</h1>
      <div className={classes["login-page"]}>
        <div className={classes["login-container"]}>
          <h3 className={classes["login-header"]}>Kérjük, jelentkezzen be!</h3>
          <div className={classes["login-form"]}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="login_email">Email cím</label>
              <input
                className={classes["login-input-email"]}
                type="email"
                id="login_email"
                placeholder="Email..."
                onChange={(event) => setLoginEmail(event.target.value)}
              />
              <label htmlFor="login_password">Jelszó</label>
              <input
                className={classes["login-input-password"]}
                type="password"
                id="login_password"
                placeholder="Jelszó..."
                onChange={(event) => setLoginPassword(event.target.value)}
              />
              <a href="/" onClick={forgotPasswordHandler}>Elfelejtette a jelszavát?</a>
              {error ? (
                <div className={classes["login-invalid"]}>
                  Helytelen felhasználónév vagy jelszó.
                </div>
              ) : (
                <div className={classes["login-invalid-hidden"]}></div>
              )}
              <button
                className={classes["login-button"]}
                onClick={login}
                label="Bejelentkezés"
                type="submit"
              >
                Bejelentkezés
              </button>
            </form>
          </div>
        </div>
      </div>
      <Lablec />
    </>
  );
}
export default Login_Page;
