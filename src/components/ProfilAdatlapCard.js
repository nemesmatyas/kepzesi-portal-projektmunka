import classes from "./ProfilAdatlapCard.module.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import UjProfilkepForm from "./UjProfilkepForm";


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
        console.log(currentUser);
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

  return (
    <div className={classes["profile-data"]}>
        <table>
          <tr>
            <td className={classes["cimek"]}>Név:</td>
            <td>{currentUserLastname} {currentUserFirstname}</td>
          </tr>
          <tr>
            <td className={classes["cimek"]}>Törzsszám:</td>
            <td>{currentUserIdnumber}</td>
          </tr>
          <tr>
            <td className={classes["cimek"]}>Beosztás:</td>
            <td>{currentUserPosition}</td>
          </tr>
          <tr>
            <td className={classes["cimek"]}>Munkaviszony kezdete:</td>
            <td>{currentUserStartdate}</td>
          </tr>
        </table>
      <div className={classes["profile-pic"]}>
        <img
          src={photoURL}
          alt="Profilkép"
        />
      </div>
    </div>
  );
};
export default ProfilAdatlapCard;
