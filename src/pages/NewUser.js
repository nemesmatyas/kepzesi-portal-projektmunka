import { useState } from "react";
//import RoundedButton from "../UI/RoundedButton";
import classes from "./NewUser.module.css";
import { UserAuth } from "../components/AuthContext";


function NewUser () {

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
          await register(registerEmail, registerPassword, registerLastname, registerFirstname, registerIdnumber, registerPosition,
            registerStartdate);
            alert("A felhasználó sikeresen létrehozva!");
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };

    return (
        <form className={classes["new-user-container"]}>
            <h3>Új felhasználó létrehozása</h3>
            <input type="text" id="register_lastname" placeholder="Vezetéknév..." onChange={(event) => { setRegisterLastname(event.target.value); }} />
            <input type="text" id="register_firstname" placeholder="Keresztnév..." onChange={(event) => { setRegisterFirstname(event.target.value); }} />
            <input type="number" id="register_idnumber" placeholder="Törzsszám..." onChange={(event) => { setRegisterIdnumber(event.target.value); }} />
            <input type="text" id="register_position" placeholder="Beosztás..." onChange={(event) => { setRegisterPosition(event.target.value); }} />
            <input type="text" id="register_startdate" placeholder="Munkaviszony kezdete..." onChange={(event) => { setRegisterStartdate(event.target.value); }} />
            <input type="email" id="register_email" placeholder="Email..." onChange={(event) => { setRegisterEmail(event.target.value); }} />
            <input type="password" id="register_password" placeholder="Jelszó..." onChange={(event) => { setRegisterPassword(event.target.value); }} />
            <button className={classes["new-user-button"]} onClick={handleSubmit} label="Létrehozás" type="submit">Létrehozás</button>   
        </form>  
    );
}
export default NewUser;