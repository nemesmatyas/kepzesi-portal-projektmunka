import { useState } from "react";
import { db } from "../components/firebase-config";
import { doc, setDoc } from "firebase/firestore";

import classes from "./NewKepzes.module.css";

function NewKepzes() {
  const [kepzesAzon, setKepzesAzon] = useState("");
  const [kepzesNeve, setKepzesNev] = useState("");
  const [kepzesKategoria, setKepzesKat] = useState("");
  const [kepzesMaxLetszam, setKepzesMaxLetsz] = useState("");
  const [kepzesDate, setKepzesDate] = useState("");
  const [kepzesStartTime, setKepzesStartTime] = useState("");
  const [kepzesEndTime, setKepzesEndTime] = useState("");
  const [kepzesLeiras, setKepzesLeiras] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const kepzesRef = doc(db, "kepzesek", kepzesAzon);
      await setDoc(kepzesRef, {
        date: kepzesDate,
        end_time: kepzesEndTime,
        kategoria: kepzesKategoria,
        kepzes_neve: kepzesNeve,
        max_letszam: kepzesMaxLetszam,
        start_time: kepzesStartTime,
        leiras: kepzesLeiras,
        aktualis_letszam: 0,
        resztvevok: [],
      });
      alert("A képzés sikeresen létrehozva!");
      setKepzesAzon("");
      setKepzesNev("");
      setKepzesKat("");
      setKepzesMaxLetsz("");
      setKepzesDate("");
      setKepzesStartTime("");
      setKepzesEndTime("");
      setKepzesLeiras("");
    } catch (error) {
      alert("Valami hiba történt");
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className={classes["new-kepzes-container"]}>
      <form className={classes["new-kepzes-form"]} onSubmit={handleSubmit}>
        <h3>Új képzés létrehozása</h3>
        <label htmlFor="kepzes_azon">Képzés azonosító</label>
        <input
          type="text"
          id="kepzes_azon"
          value={kepzesAzon}
          placeholder="Képzés azonosító..."
          onChange={(event) => {
            setKepzesAzon(event.target.value);
          }}
          required
        />
        <label htmlFor="kepzes_neve">Képzés neve</label>
        <input
          type="text"
          id="kepzes_neve"
          value={kepzesNeve}
          placeholder="Képzés neve..."
          onChange={(event) => {
            setKepzesNev(event.target.value);
          }}
          required
        />
        <label htmlFor="kepzes_kategoria">Kategória</label>
        <input
          type="text"
          id="kepzes_kategoria"
          value={kepzesKategoria}
          placeholder="Kategória..."
          onChange={(event) => {
            setKepzesKat(event.target.value);
          }}
        />
        <label htmlFor="kepzes_max_letszam">Maximum létszám</label>
        <input
          type="number"
          id="kepzes_max_letszam"
          value={kepzesMaxLetszam}
          placeholder="Max létszám..."
          onChange={(event) => {
            setKepzesMaxLetsz(event.target.value);
          }}
          required
        />
        <label htmlFor="kepzes_date">Képzés napja</label>
        <input
          type="text"
          id="kepzes_date"
          value={kepzesDate}
          placeholder="Képzés napja..."
          onChange={(event) => {
            setKepzesDate(event.target.value);
          }}
          required
        />
        <label htmlFor="kepzes_start_time">Képzés kezdésének ideje</label>
        <input
          type="text"
          id="kepzes_start_time"
          value={kepzesStartTime}
          placeholder="Képzési kezdésének ideje..."
          onChange={(event) => {
            setKepzesStartTime(event.target.value);
          }}
        />
        <label htmlFor="kepzes_end_time">Képzés végének ideje</label>
        <input
          type="text"
          id="kepzes_end_time"
          value={kepzesEndTime}
          placeholder="Képzés végének ideje..."
          onChange={(event) => {
            setKepzesEndTime(event.target.value);
          }}
        />
        <label htmlFor="kepzes_leiras">Képzés leírása</label>
        <input
          type="text"
          id="kepzes_leiras"
          value={kepzesLeiras}
          placeholder="Képzés leírása..."
          onChange={(event) => {
            setKepzesLeiras(event.target.value);
          }}
        />
        <button
          className={classes["new-kepzes-button"]}
          label="Létrehozás"
          type="submit"
        >
          Létrehozás
        </button>
      </form>
    </div>
  );
}
export default NewKepzes;
