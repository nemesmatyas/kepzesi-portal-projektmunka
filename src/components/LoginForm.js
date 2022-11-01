import RoundedButton from "../UI/RoundedButton";
//import { auth } from "./firebase-config";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={classes}>
      <h3>Bejelentkezés</h3>
      <input type="email" id="login_email" placeholder="Email..."/>
      <input type="password" id="login_password" placeholder="Jelszó..." />
      <RoundedButton label="Bejelentkezés" type="submit" />

      <h3>Bejelentkezett felhasználó: </h3>
      <RoundedButton label="Kijelentkezés" type="submit" />
    </form>  
  );
};
export default LoginForm;
