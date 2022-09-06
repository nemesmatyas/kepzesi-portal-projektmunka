import RoundedButton from "../UI/RoundedButton";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={classes}>
      <label htmlFor="username">Felhasználónév</label>
      <input type="text" id="username" />
      <label htmlFor="password">Jelszó</label>
      <input type="password" id="password" />
      <RoundedButton label="Bejelentkezés" type="submit" />
    </form>  
  );
};
export default LoginForm;
