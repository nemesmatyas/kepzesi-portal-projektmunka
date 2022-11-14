/**
 * Ez a komponens egy konkrét képzés adatlapját jeleníti meg, miután a felhasználó kiválasztotta az "Elérhető képzések" listából
 * TODO: API hívás az adatok megjelenítéséhez, egyelőre hardcodeolt adatokkal dolgozunk
 */
import KepzesJelentkezes from "./KepzesJelentkezes";
import { UserContext } from "./AuthContext";
import classes from "./KepzesPage.module.css";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase-config";
import { onSnapshot, doc} from "firebase/firestore";


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
    },[])

  return (
    <div className={classes["kepzes-oldal"]}>
      {/* Borítókép */}
      <table className={classes["kepzes-tablazat"]}>
        <thead>
          <tr>
            <th>Képzés azonosító</th>
            <th>Képzés neve</th>
            <th>Képzés kezdete</th>
            <th>Képzés vége</th>
            <th>Kategória</th>
            <th>Létszám</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{kepzesId}</td>
            <td>{kepzes_neve}</td>
            <td>{date} {start_time}</td>
            <td>{date} {end_time}</td>
            <td>{kategoria}</td>
            <td>{resztvevok.length + "/" + max_letszam}</td>
          </tr>
        </tbody>
      </table>
      <h3 className={classes["leiras"]}>Képzés részletes leírása:</h3>
      <p>
        {leiras}
      </p>
      <button className={classes["kepzes-button"]}>Jelentkezem</button>
    </div>
  );
};
export default KepzesPage;