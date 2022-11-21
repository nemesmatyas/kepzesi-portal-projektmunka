import classes from "./JelszoValtoztatasForm.module.css";
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useState } from "react";


const JelszoValtoztatasForm = () => {

  const auth = getAuth();
  const user = auth.currentUser;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [renewPassword, setReNewPassword] = useState("");

  const reauthenticate = (currentPassword) => {
    const authCredential = EmailAuthProvider.credential(user.email, currentPassword);
    return reauthenticateWithCredential(user, authCredential);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(newPassword == renewPassword){
      console.log("Jelszóváltoztatási kérés elküldve");

      reauthenticate(currentPassword).then(() => {
        updatePassword(user, newPassword).then(() => {
          console.log("A jelszó megváltoztatva");
        }).catch((error) => {
          console.log(error.message);
        });
      }).catch((error) => {
        console.log(error.message);
      });
    } else {
      console.log("Az új jelszó és az új jelszó ismét nem egyezik!");
    }
  };

  return (
    <div>
      <h3 className={classes["jelszo-felirat"]}>Jelszó megváltoztatása:</h3>
      <form onSubmit={submitHandler}>
        <div className={classes["jelszo-container"]}>
          <label htmlFor="jelenlegi-jelszo">Jelenlegi jelszó:</label>
          <input className={classes["jelszo"]} type="password" onChange={(event) => setCurrentPassword(event.target.value)} />
          <label htmlFor="uj-jelszo">Új jelszó:</label>
          <input className={classes["jelszo"]} type="password" onChange={(event) => setNewPassword(event.target.value)}/>
          <label htmlFor="uj-jelszo-megegyszer">Új jelszó ismét:</label>
          <input className={classes["jelszo"]} type="password" onChange={(event) => setReNewPassword(event.target.value)}/>
          <button className={classes["jelszo-button"]} type="submit">Elküld</button>
        </div>
      </form>
    </div>
  );
};
export default JelszoValtoztatasForm;

/*A 18. sorban a html hivatkozas miatt az uj-jelszo-megegyszer nem lett javítva ismet-re, nehogy gond legyen.*/
