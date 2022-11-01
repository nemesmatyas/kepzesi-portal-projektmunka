import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
//import RoundedButton from "../UI/RoundedButton";
import { auth } from "../components/firebase-config";


function NewUser () {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async (event) => {
        event.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form /*className={classes}*/>
            <h3>Új felhasználó létrehozása</h3>
            <input type="email" id="register_email" placeholder="Email..." onChange={(event) => { setRegisterEmail(event.target.value); }} />
            <input type="password" id="register_password" placeholder="Jelszó..." onChange={(event) => { setRegisterPassword(event.target.value); }} />
            <button onClick={register} label="Létrehozás" type="submit">Létrehozás</button>
        </form>  
    );
}
export default NewUser;