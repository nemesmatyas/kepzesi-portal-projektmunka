import classes from "./ProfilAdatlapCard.module.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

const ProfilAdatlapCard = () => {
  const [user, setUser] = useState({});
  const [photoURL, setPhotoURL] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr05Ofxi9imMLzZoyfL8jBznxXFDNYCjOs0w&usqp=CAU");
  const [currentUserFirstname, setCurrentUserFirstname] = useState("");
  const [currentUserLastname, setCurrentUserLastname] = useState("");
  const [currentUserIdnumber, setCurrentUserIdnumber] = useState("");
  const [currentUserPosition, setCurrentUserPosition] = useState("");
  const [currentUserStartdate, setCurrentUserStartdate] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
          console.log("Current data: ", doc.data());
          setCurrentUserFirstname(doc.get("Firstname"));
          setCurrentUserLastname(doc.get("Lastname"));
          setCurrentUserIdnumber(doc.get("identification_number"));
          setCurrentUserPosition(doc.get("position"));
          setCurrentUserStartdate(doc.get("start_date"));
        });
        if (currentUser?.photoURL){
          setPhotoURL(currentUser.photoURL);
        }
    })
    return () => {
        unsubscribe();
    };
    },[])

    const profilkepStyles = {
      maxWidth: "400px",
      maxHeight: "400px"
    };

  return (
    <div className={classes["profile-data"]}>
        <table className={classes["profile-data-table"]}>
          <tr>
            <th className={classes["cimek"]}>Név:</th>
            <td>{currentUserLastname} {currentUserFirstname}</td>
          </tr>
          <tr>
            <th className={classes["cimek"]}>Törzsszám:</th>
            <td>{currentUserIdnumber}</td>
          </tr>
          <tr>
            <th className={classes["cimek"]}>Beosztás:</th>
            <td>{currentUserPosition}</td>
          </tr>
          <tr>
            <th className={classes["cimek"]}>Munkaviszony kezdete:</th>
            <td>{currentUserStartdate}</td>
          </tr>
        </table>
      <div className={classes["profile-pic"]}>
        <img
          src={photoURL}
          style={profilkepStyles}
          alt="Profilkép"
        />
      </div>
    </div>
  );
};
export default ProfilAdatlapCard;
