import classes from "./KepzesLeJelentkezes.module.css";
import { useContext } from "react";
import { UserContext } from "./AuthContext";
import { db } from "./firebase-config";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";

const KepzesLeJelentkezes = (props) => {
  const userContext = useContext(UserContext);

  const handleLeJelentkezes = async () => {
    try {
      await updateDoc(
        doc(db, "kepzesek", props.kepzesId),
        {
          resztvevok: arrayRemove(userContext.user.email)
        }
      );
      alert("A lejelentkezés a képzésről sikeresen megtörtént!");
    } catch (error) {
      alert("Valami hiba történt");
      console.log(error);
    }
  };

  return (
    <button className={classes["lejelentkezes"]} onClick={handleLeJelentkezes}>
      Lejelentkezem
    </button>
  );
};
export default KepzesLeJelentkezes;
