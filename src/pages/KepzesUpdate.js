import { useState, useEffect } from "react";
import { db } from "../components/firebase-config";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";

import classes from "./KepzesUpdate.module.css";

function KepzesUpdate() {
    let { kepzesId } = useParams();
    const navigate = useNavigate();
    const [aktkepzesNeve, setaktkepzesNeve] = useState("");
    const [aktkepzesKategoria, setaktkepzesKategoria] = useState("");
    const [aktkepzesMaxLetszam, setaktkepzesMaxLetszam] = useState("");
    const [aktkepzesDate, setaktkepzesDate] = useState("");
    const [aktkepzesStartTime, setaktkepzesStartTime] = useState("");
    const [aktkepzesEndTime, setaktkepzesEndTime] = useState("");
    const [aktkepzesLeiras, setaktkepzesLeiras] = useState("");

    useEffect(() => {
        onSnapshot(doc(db, "kepzesek", kepzesId), (doc) => {
          setaktkepzesNeve(doc.get("kepzes_neve"));
          setaktkepzesDate(doc.get("date"));
          setaktkepzesStartTime(doc.get("start_time"));
          setaktkepzesEndTime(doc.get("end_time"));
          setaktkepzesKategoria(doc.get("kategoria"));
          setaktkepzesLeiras(doc.get("leiras"));
          setaktkepzesMaxLetszam(doc.get("max_letszam"));
        });
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const kepzesRef = doc(db, "kepzesek", kepzesId);
        await updateDoc(kepzesRef, {
            date: aktkepzesDate,
            end_time: aktkepzesEndTime,
            kategoria: aktkepzesKategoria,
            kepzes_neve: aktkepzesNeve,
            max_letszam: aktkepzesMaxLetszam,
            start_time: aktkepzesStartTime,
            leiras: aktkepzesLeiras
        }).then(() => {
            console.log(kepzesId, "képzés módosítva!");
            alert("A képzés módosítva!");
            navigate('/kepzesek');
        }).catch((error) => {
            console.log(error.message);
        });
    };

    return (
        <div className={classes["update-kepzes-container"]}>
            <form className={classes["update-kepzes-form"]} onSubmit={handleSubmit}>
                <h3>{kepzesId} képzés szerkesztése</h3>
                <label htmlFor="kepzes_neve">Képzés neve</label>
                <input
                    type="text"
                    id="kepzes_neve"
                    defaultValue={aktkepzesNeve}
                    onChange={(event) => {
                        setaktkepzesNeve(event.target.value);
                    }}
                />
                <label htmlFor="kepzes_kategoria">Kategória</label>
                <input
                    type="text"
                    id="kepzes_kategoria"
                    defaultValue={aktkepzesKategoria}
                    onChange={(event) => {
                        setaktkepzesKategoria(event.target.value);
                    }}
                />
                <label htmlFor="kepzes_max_letszam">Maximum létszám</label>
                <input
                    type="number"
                    id="kepzes_max_letszam"
                    defaultValue={aktkepzesMaxLetszam}
                    onChange={(event) => {
                        setaktkepzesMaxLetszam(event.target.value);
                    }}
                />
                <label htmlFor="kepzes_date">Képzés napja</label>
                <input
                    type="text"
                    id="kepzes_date"
                    defaultValue={aktkepzesDate}
                    onChange={(event) => {
                        setaktkepzesDate(event.target.value);
                    }}
                />
                <label htmlFor="kepzes_start_time">Képzés kezdésének ideje</label>
                <input
                    type="text"
                    id="kepzes_start_time"
                    defaultValue={aktkepzesStartTime}
                    onChange={(event) => {
                        setaktkepzesStartTime(event.target.value);
                    }}
                />
                <label htmlFor="kepzes_end_time">Képzés végének ideje</label>
                <input
                    type="text"
                    id="kepzes_end_time"
                    defaultValue={aktkepzesEndTime}
                    onChange={(event) => {
                        setaktkepzesEndTime(event.target.value);
                    }}
                />
                <label htmlFor="kepzes_leiras">Képzés leírása</label>
                <input
                    type="text"
                    id="kepzes_leiras"
                    defaultValue={aktkepzesLeiras}
                    onChange={(event) => {
                        setaktkepzesLeiras(event.target.value);
                    }}
                />
                <button
                    className={classes["update-kepzes-button"]}
                    label="Mentés"
                    type="submit"
                >
                    Mentés
                </button>
            </form>
        </div>
    );
}
export default KepzesUpdate;
