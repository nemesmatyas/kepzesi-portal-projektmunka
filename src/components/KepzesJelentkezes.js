import classes from "./KepzesJelentkezes.module.css";

import { useContext } from "react";
import { UserContext } from "./AuthContext";
import { db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";

const KepzesJelentkezes = (props) => {
  const userContext = useContext(UserContext);

  const handleJelentkezes = async () => {
    if (props.resztvevok.includes(userContext.user.email)) {
      alert("A felhasználó már jelentkezett a képzésre!");
      return;
    }
    try {
      await setDoc(
        doc(db, "kepzesek", props.kepzesId),
        {
          resztvevok: [...props.resztvevok, userContext.user.email],
        },
        { merge: true }
      );
      alert("A jelentkezés a képzésre sikeresen megtörtént!");
    } catch (error) {
      alert("Valami hiba történt");
      console.log(error);
    }
  };

  return (
    <button className={classes["jelentkezes"]} onClick={handleJelentkezes}>
      Jelentkezem
    </button>
  );
};
export default KepzesJelentkezes;
