import { useContext, useState, useEffect } from "react";
import { UserContext } from "./AuthContext";
import { db } from "./firebase-config";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import UjTechIsmRedirectButton from "./UjTechIsmRedirectButton";
import TechIsmTorles from "./TechIsmTorles";

import classes from "./TechnikaiIsmeretek.module.css";

const TechnikaiIsmeretek = () => {
  const userContext = useContext(UserContext);
  const [technikaiIsmeretek, setTechnikaiIsmeretek] = useState([]);
  console.log(userContext.user.uid);

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "technikai_ismeretek"),
        where("tulajdonos", "==", userContext.user.uid)
      );
      onSnapshot(q, (querySnapshot) => {
        const techIsmLista = [];
        querySnapshot.forEach((doc) => {
          techIsmLista.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTechnikaiIsmeretek(techIsmLista);
      });
    })();
  }, [userContext.user.uid]);

  console.log(technikaiIsmeretek);

  return (
    <div className={classes["tech-ism-container"]}>
      {technikaiIsmeretek.length === 0 ? (
        <div className={classes["nincs-tech-ism"]}>Nincs technikai ismeret</div>
      ) : (
        <table className={classes["tech-ism-table"]}>
          <caption>Technikai ismeretek</caption>
          <thead>
            <tr>
              <th>Ismeret neve</th>
              <th>Ismeret típusa</th>
              <th>Ismeret szintje</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {technikaiIsmeretek.map((ism) => (
              <tr key={ism.id}>
                <td>{ism.nev}</td>
                <td>{ism.tipus}</td>
                <td>{ism.szint}</td>
                <td>
                  <TechIsmTorles techIsmId={ism.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className={classes["uj-tech-ism-container"]}>
        <UjTechIsmRedirectButton />
      </div>
    </div>
  );
};
export default TechnikaiIsmeretek;
