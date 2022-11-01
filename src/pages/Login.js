import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import LoginForm from "../components/LoginForm";
//import RoundedButton from "../UI/RoundedButton";
import { UserAuth } from "../components/AuthContext";

function Login_Page() {
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {login} = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await login(loginEmail,loginPassword);
      navigate('/kezdooldal');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} /*className={classes}*/>
      <h3>Bejelentkezés</h3>
      <input type="email" id="login_email" placeholder="Email..." onChange={(event) =>  setLoginEmail(event.target.value) } />
      <input type="password" id="login_password" placeholder="Jelszó..." onChange={(event) => setLoginPassword(event.target.value) } />
      <button onClick={login} label="Bejelentkezés" type="submit">Bejelentkezés</button>
    </form>  
  );

}
export default Login_Page;
