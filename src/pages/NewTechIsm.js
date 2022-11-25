import { useState, useContext } from "react";
import { UserContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/firebase-config";

import classes from "./NewTechIsm.module.css";

const NewTechIsm = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const [ujTechIsmNev, setUjTechIsmNev] = useState("");
  const [ujTechIsmTipus, setUjTechIsmTipus] = useState("");
  const [ujTechIsmSzint, setUjTechIsmSzint] = useState("Kezdő");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Új képzés létrehozva");
    const ujTechIsmObj = {
      nev: ujTechIsmNev,
      tipus: ujTechIsmTipus,
      szint: ujTechIsmSzint,
      tulajdonos: userContext.user.uid,
    };

    try {
      await addDoc(collection(db, "technikai_ismeretek"), ujTechIsmObj);
      alert("Technikai ismeret sikeresen létrehozva");
      navigate("/kompetenciaim");
    } catch (error) {
      alert("Valami hiba történt");
      console.log(error);
    }

    setUjTechIsmNev("");
    setUjTechIsmTipus("");
    console.log(ujTechIsmObj);
  };

  return (
    <div className={classes["uj-tech-ism-page"]}>
      <div className={classes["uj-tech-ism-container"]}>
        <h1 className={classes["uj-tech-ism-h1"]}>
          Új technikai ismeret létrehozása
        </h1>
        <form className={classes["uj-tech-ism-form"]} onSubmit={submitHandler}>
          <label htmlFor="tech-ism-nev">Technikai ismeret neve</label>
          <input
            type="text"
            id="tech-ism-nev"
            placeholder="Ismeret neve..."
            value={ujTechIsmNev}
            onChange={(e) => setUjTechIsmNev(e.target.value)}
            required
          />
          <label htmlFor="tech-ism-tipus">Technikai ismeret típusa</label>
          <input
            type="text"
            id="tech-ism-tipus"
            placeholder="Ismeret típusa.."
            value={ujTechIsmTipus}
            onChange={(e) => setUjTechIsmTipus(e.target.value)}
            required
          />
          <label htmlFor="tech-ism-szint">Technikai ismeret szintje</label>
          <select
            id="tech-ism-szint"
            value={ujTechIsmSzint}
            onChange={(e) => setUjTechIsmSzint(e.target.value)}
          >
            <option value="Kezdő">Kezdő</option>
            <option value="Haladó">Haladó</option>
            <option value="Szakértő">Szakértő</option>
          </select>
          <button
            type="submit"
            className={classes["uj-tech-ism-mentes-button"]}
          >
            Mentés
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewTechIsm;
