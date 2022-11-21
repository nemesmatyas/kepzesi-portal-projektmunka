import { useContext, useEffect, useState } from "react";
import { UserContext } from "./AuthContext";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./firebase-config";

import UjTanusitvanyRedirectButton from "./UjTanusitvanyRedirectButton";
import TanusitvanyTorles from "./TanusitvanyTorles";

import classes from "./Tanusitvanyok.module.css";

const Tanusitvanyok = () => {
  const userContext = useContext(UserContext);

  const [tanusitvanyok, setTanusitvanyok] = useState([]);

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "tanusitvanyok"),
        where("tulajdonos", "==", userContext.user.uid)
      );
      onSnapshot(q, (querySnapshot) => {
        const certLista = [];
        querySnapshot.forEach((doc) => {
          certLista.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTanusitvanyok(certLista);
      });
    })();
  }, [userContext.user.uid]);

  console.log(tanusitvanyok);

  return (
    <div className={classes["certs-container"]}>
      {tanusitvanyok.length === 0 ? (
        <div className={classes["nincs-cert"]}>Nincs megjeleníthető tanúsítvány!</div>
      ) : (
        <table>
          <caption>Tanúsítványok</caption>
          <thead>
            <tr>
              <th>Tanúsítvány azonosító</th>
              <th>Tanúsítvány neve</th>
              <th>Kiállítás dátuma</th>
              <th>Érvényességi idő</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tanusitvanyok.map((cert) => (
              <tr key={cert.id}>
                <td>{cert.azonosito}</td>
                <td>{cert.nev}</td>
                <td>{cert.kiallitas_datum}</td>
                <td>{cert.lejarat_datum}</td>
                <td>
                  <TanusitvanyTorles certId={cert.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className={classes["uj-cert-container"]}>
        <UjTanusitvanyRedirectButton />
      </div>
    </div>
  );
};
export default Tanusitvanyok;
