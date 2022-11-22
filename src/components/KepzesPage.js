import KepzesJelentkezes from "./KepzesJelentkezes";
import { UserContext } from "./AuthContext";
import classes from "./KepzesPage.module.css";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase-config";
import { onSnapshot, doc } from "firebase/firestore";

const KepzesPage = () => {
  const userContext = useContext(UserContext);
  let { kepzesId } = useParams();
  const [kepzes_neve, setKepzesNeve] = useState("");
  const [date, setKepzesDate] = useState("");
  const [start_time, setKepzesStartTime] = useState("");
  const [end_time, setKepzesEndTime] = useState("");
  const [kategoria, setKepzesKategoria] = useState("");
  const [leiras, setKepzesLeiras] = useState("");
  const [max_letszam, setKepzesMaxLetszam] = useState("");
  const [resztvevok, setKepzesResztvevok] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "kepzesek", kepzesId), (doc) => {
      console.log("Current data: ", doc.data());
      setKepzesNeve(doc.get("kepzes_neve"));
      setKepzesDate(doc.get("date"));
      setKepzesStartTime(doc.get("start_time"));
      setKepzesEndTime(doc.get("end_time"));
      setKepzesKategoria(doc.get("kategoria"));
      setKepzesLeiras(doc.get("leiras"));
      setKepzesMaxLetszam(doc.get("max_letszam"));
      setKepzesResztvevok(doc.get("resztvevok"));
    });
  }, []);

  return (
    <div className={classes["kepzes-oldal"]}>
      <table className={classes["kepzes-tablazat"]}>
        <tr>
          <td className={classes["cimek"]}>Képzés azonosító:</td>
          <td className={classes["ertekek"]}>{kepzesId}</td>
        </tr>
        <tr>
          <td className={classes["cimek"]}>Képzés neve:</td>
          <td className={classes["ertekek"]}>{kepzes_neve}</td>
        </tr>
        <tr>
          <td className={classes["cimek"]}>Képzés kezdete:</td>
          <td className={classes["ertekek"]}>
            {date} {start_time}
          </td>
        </tr>
        <tr>
          <td className={classes["cimek"]}>Képzés vége:</td>
          <td className={classes["ertekek"]}>
            {date} {end_time}
          </td>
        </tr>
        <tr>
          <td className={classes["cimek"]}>Kategória:</td>
          <td className={classes["ertekek"]}>{kategoria}</td>
        </tr>
        <tr>
          <td className={classes["cimek"]}>Létszám:</td>
          <td className={classes["ertekek"]}>
            {resztvevok.length + "/" + max_letszam}
          </td>
        </tr>
      </table>
      <h3 className={classes["leiras"]}>Képzés részletes leírása:</h3>
      <p>{leiras}</p>
      {resztvevok.length === parseInt(max_letszam, 10) ? (
        <button className={classes["megtelt"]}>Megtelt</button>
      ) : resztvevok.includes(userContext.user.email) ? (
        <button className={classes["mar-jelentkezett"]}>Jelentkezve</button>
      ) : (
        <KepzesJelentkezes className={classes["kepzes-jelentkezes-button"]} kepzesId={kepzesId} resztvevok={resztvevok} />
      )}
    </div>
  );
};
export default KepzesPage;
