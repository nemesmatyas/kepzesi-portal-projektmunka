import { useState } from "react";
//import RoundedButton from "../UI/RoundedButton";
import classes from "./NewUser.module.css";
import { UserAuth } from "../components/AuthContext";

function NewUser() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerLastname, setRegisterLastname] = useState("");
  const [registerFirstname, setRegisterFirstname] = useState("");
  const [registerIdnumber, setRegisterIdnumber] = useState("");
  const [registerPosition, setRegisterPosition] = useState("");
  const [registerStartdate, setRegisterStartdate] = useState("");
  const [error, setError] = useState("");
  const { register } = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await register(
        registerEmail,
        registerPassword,
        registerLastname,
        registerFirstname,
        registerIdnumber,
        registerPosition,
        registerStartdate
      );
      alert("A felhasználó sikeresen létrehozva!");
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterLastname("");
      setRegisterFirstname("");
      setRegisterIdnumber("");
      setRegisterPosition("");
      setRegisterStartdate("");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className={classes["new-user-container"]}>
      <form className={classes["new-user-form"]} onSubmit={handleSubmit}>
        <h3>Új felhasználó létrehozása</h3>
        <label htmlFor="register_lastname">Vezetéknév</label>
        <input
          type="text"
          id="register_lastname"
          value={registerLastname}
          placeholder="Vezetéknév..."
          onChange={(event) => {
            setRegisterLastname(event.target.value);
          }}
          required
        />
        <label htmlFor="register_firstname">Keresztnév</label>
        <input
          type="text"
          id="register_firstname"
          value={registerFirstname}
          placeholder="Keresztnév..."
          onChange={(event) => {
            setRegisterFirstname(event.target.value);
          }}
          required
        />
        <label htmlFor="register_idnumber">Törzsszám</label>
        <input
          type="number"
          id="register_idnumber"
          value={registerIdnumber}
          placeholder="Törzsszám..."
          onChange={(event) => {
            setRegisterIdnumber(event.target.value);
          }}
          required
        />
        <label htmlFor="register_position">Beosztás</label>
        <input
          type="text"
          id="register_position"
          value={registerPosition}
          placeholder="Beosztás..."
          onChange={(event) => {
            setRegisterPosition(event.target.value);
          }}
        />
        <label htmlFor="register_startdate">Munkaviszony kezdete</label>
        <input
          type="text"
          id="register_startdate"
          value={registerStartdate}
          placeholder="Munkaviszony kezdete..."
          onChange={(event) => {
            setRegisterStartdate(event.target.value);
          }}
        />
        <label htmlFor="register_email">Email cím</label>
        <input
          type="email"
          id="register_email"
          value={registerEmail}
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          required
        />
        <label htmlFor="register_password">Jelszó</label>
        <input
          type="password"
          id="register_password"
          value={registerPassword}
          placeholder="Jelszó..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          required
        />
        <button
          className={classes["new-user-button"]}
          label="Létrehozás"
          type="submit"
        >
          Létrehozás
        </button>
      </form>
    </div>
  );
}
export default NewUser;
