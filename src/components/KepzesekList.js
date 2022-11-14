import classes from "./KepzesekList.module.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import KepzesJelentkezes from "./KepzesJelentkezes";
import { UserContext } from "./AuthContext";

const KepzesekList = () => {
  const userContext = useContext(UserContext);
  const [kepzesLista, setKepzesLista] = useState([]);

  // Összes képzés betöltése
  useEffect(() => {
    (async () => {
      const query = collection(db, "kepzesek");
      onSnapshot(query, (querySnapshot) => {
        const ujKepzesLista = [];
        querySnapshot.forEach((doc) => {
          const nextDoc = {
            id: doc.id,
            ...doc.data(),
          };
          ujKepzesLista.push(nextDoc);
        });
        setKepzesLista(ujKepzesLista);
      });
    })();
  }, []);

  console.log(kepzesLista);

  return (
    <div className={classes["kepzesek-list"]}>
      <table className={classes["kepzesek-table"]}>
        <thead>
          <tr>
            <th>Képzés azonosító</th>
            <th>Képzés neve</th>
            <th>Dátum</th>
            <th>Kategória</th>
            <th>Létszám</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {kepzesLista.map(
            ({ id, kepzes_neve, date, kategoria, max_letszam, resztvevok }) => (
              <tr key={id}>
                <td>
                  <Link to={`/kepzesek/${id}`}>{id}</Link>
                </td>
                <td>{kepzes_neve}</td>
                <td>{date}</td>
                <td>{kategoria}</td>
                <td>{resztvevok.length + "/" + max_letszam}</td>
                <td>
                  {resztvevok.length === parseInt(max_letszam, 10) ? (
                    <button className={classes["megtelt"]}>Megtelt</button>
                  ) : resztvevok.includes(userContext.user.email) ? (
                    <button className={classes["mar-jelentkezett"]}>
                      Jelentkezve
                    </button>
                  ) : (
                    <KepzesJelentkezes kepzesId={id} resztvevok={resztvevok} />
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
export default KepzesekList;
