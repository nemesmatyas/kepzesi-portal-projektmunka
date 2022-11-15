import { useState } from "react";
import { db } from "../components/firebase-config";
import { doc, setDoc } from "firebase/firestore";

function NewKepzes () {

    const [kepzes_azon, setKepzesAzon] = useState("");
    const [kepzes_neve, setKepzesNev] = useState("");
    const [kepzes_kategoria, setKepzesKat] = useState("");
    const [kepzes_max_letszam, setKepzesMaxLetsz] = useState("");
    const [kepzes_date, setKepzesDate] = useState("");
    const [kepzes_start_time, setKepzesStartTime] = useState("");
    const [kepzes_end_time, setKepzesEndTime] = useState("");
    const [kepzes_leiras, setKepzesLeiras] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            const kepzesRef = doc(db, "kepzesek", kepzes_azon);
            await setDoc(kepzesRef, 
            {date: kepzes_date, 
            end_time: kepzes_end_time,
            kategoria: kepzes_kategoria,
            kepzes_neve: kepzes_neve,
            max_letszam: kepzes_max_letszam,
            start_time: kepzes_start_time,
            leiras: kepzes_leiras,
            aktualis_letszam: 0});
            alert("A képzés sikeresen létrehozva!");
          } catch (error) {
            setError(error.message);
            console.log(error.message);
          }
    };

    return (
        <form >
            <h3>Új képzés létrehozása</h3>
            <input type="text" id="kepzes_azon" placeholder="Képzés azonosító..." onChange={(event) => { setKepzesAzon(event.target.value); }} />
            <input type="text" id="kepzes_neve" placeholder="Képzés neve..." onChange={(event) => { setKepzesNev(event.target.value); }} />
            <input type="text" id="kepzes_kategoria" placeholder="Kategória..." onChange={(event) => { setKepzesKat(event.target.value); }} />
            <input type="number" id="kepzes_max_letszam" placeholder="Max létszám..." onChange={(event) => { setKepzesMaxLetsz(event.target.value); }} />
            <input type="text" id="kepzes_date" placeholder="Képzés napja..." onChange={(event) => { setKepzesDate(event.target.value); }} />
            <input type="text" id="kepzes_start_time" placeholder="Képzési kezdésének ideje..." onChange={(event) => { setKepzesStartTime(event.target.value); }} />
            <input type="text" id="kepzes_end_time" placeholder="Képzés végének ideje..." onChange={(event) => { setKepzesEndTime(event.target.value); }} />
            <input type="text" id="kepzes_leiras" placeholder="Leírás..." onChange={(event) => { setKepzesLeiras(event.target.value); }} />
            <button onClick={handleSubmit} label="Létrehozás" type="submit">Létrehozás</button>   
        </form>  
    );
}
export default NewKepzes;