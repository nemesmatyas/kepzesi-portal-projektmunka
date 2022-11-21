import { useState, useContext } from "react";
import { UserContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/firebase-config";

import classes from "./NewCert.module.css";

const NewCert = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const [ujCertAzon, setUjCertAzon] = useState("");
  const [ujCertNev, setUjCertNev] = useState("");
  const [ujCertKiallitasDatum, setUjCertKiallitasDatum] = useState("");
  const [ujCertLejaratDatum, setUjCertLejaratDatum] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Új tanúsítvány létrehozva");

    const ujCertObj = {
      azonosito: ujCertAzon,
      nev: ujCertNev,
      kiallitas_datum: ujCertKiallitasDatum,
      lejarat_datum: ujCertLejaratDatum,
      tulajdonos: userContext.user.uid,
    };

    try {
      await addDoc(collection(db, "tanusitvanyok"), ujCertObj);
      alert("Tanúsítvány sikeresen hozzáadva");
      navigate("/kompetenciaim");
    } catch (error) {
      alert("Valami hiba történt");
      console.log(error);
    }

    setUjCertAzon("");
    setUjCertNev("");
    setUjCertKiallitasDatum("");
    setUjCertLejaratDatum("");

    console.log(ujCertObj);
  };

  return (
    <div className={classes["uj-cert-container"]}>
      <h1 className={classes["uj-cert-h1"]}>Új tanúsítvány hozzáadása</h1>
      <form className={classes["uj-cert-form"]} onSubmit={submitHandler}>
        <label htmlFor="cert-nev">Tanúsítvány neve</label>
        <input className={classes["uj-cert-input"]}
          type="text"
          id="cert-nev"
          placeholder="Tanúsítvány neve..."
          value={ujCertNev}
          onChange={(e) => setUjCertNev(e.target.value)}
          required
        />
        <label htmlFor="cert-azon">Tanúsítvány azonosítója</label>
        <input className={classes["uj-cert-input"]}
          type="text"
          id="cert-azon"
          placeholder="Tanúsítvány azonosítója..."
          value={ujCertAzon}
          onChange={(e) => setUjCertAzon(e.target.value)}
        />
        <label htmlFor="cert-kiallitas-datuma">
          Tanúsítvány kiállításának időpontja
        </label>
        <input className={classes["uj-cert-date"]}
          type="date"
          id="cert-kiallitas-datuma"
          value={ujCertKiallitasDatum}
          onChange={(e) => setUjCertKiallitasDatum(e.target.value)}
        />
        <label htmlFor="cert-lejarat-datuma">
          Tanúsítvány lejáratának időpontja
        </label>
        <input className={classes["uj-cert-date"]}
          type="date"
          id="cert-lejarat-datuma"
          value={ujCertLejaratDatum}
          onChange={(e) => setUjCertLejaratDatum(e.target.value)}
        />
        <button type="submit" className={classes["uj-cert-mentes-button"]}>
          Mentés
        </button>
      </form>
    </div>
  );
};
export default NewCert;
