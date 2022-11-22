import classes from "./JelszoValtoztatasForm.module.css";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { useState } from "react";

const JelszoValtoztatasForm = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [renewPassword, setReNewPassword] = useState("");

  const reauthenticate = (currentPassword) => {
    const authCredential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return reauthenticateWithCredential(user, authCredential);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!newPassword || !renewPassword) {
      alert("Kérjük, adja meg az új jelszót!");
      return;
    }

    if (newPassword !== renewPassword) {
      alert("Az új jelszavak nem egyeznek!");
      return;
    }

    if (currentPassword == newPassword) {
      alert("A megadott új jelszó megegyezik a jelenlegivel. A jelszóváltoztatáshoz kérjük adjon meg egy új jelszót!");
      return;
    }
    reauthenticate(currentPassword)
      .then(() => {
        updatePassword(user, newPassword)
          .then(() => {
            alert("Jelszó sikeresen megváltoztatva!");
            console.log("A jelszó megváltoztatva");
            setCurrentPassword("");
            setNewPassword("");
            setReNewPassword("");
          })
          .catch((error) => {
            if (error.message.includes("weak-password")) {
              alert(
                "Az új jelszónak minimum 6 karakter hosszúnak kell lennie!"
              );
            }
            console.log(error.message);
          });
      })
      .catch((error) => {
        if (error.message.includes("wrong-password")) {
          alert("A régi jelszó nem megfelelő!");
        }
        console.log(error.message);
      });
      setCurrentPassword("");
      setNewPassword("");
      setReNewPassword("");
  };

  return (
    <div>
      <h3 className={classes["jelszo-felirat"]}>Jelszó megváltoztatása:</h3>
      <form onSubmit={submitHandler}>
        <div className={classes["jelszo-container"]}>
          <label htmlFor="jelenlegi-jelszo">Jelenlegi jelszó:</label>
          <input
            className={classes["jelszo"]}
            type="password"
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
          <label htmlFor="uj-jelszo">Új jelszó:</label>
          <input
            className={classes["jelszo"]}
            type="password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <label htmlFor="uj-jelszo-megegyszer">Új jelszó ismét:</label>
          <input
            className={classes["jelszo"]}
            type="password"
            value={renewPassword}
            onChange={(event) => setReNewPassword(event.target.value)}
          />
          <button className={classes["jelszo-button"]} type="submit">
            Jelszó megváltoztatása
          </button>
        </div>
      </form>
    </div>
  );
};
export default JelszoValtoztatasForm;

/*A 18. sorban a html hivatkozas miatt az uj-jelszo-megegyszer nem lett javítva ismet-re, nehogy gond legyen.*/
