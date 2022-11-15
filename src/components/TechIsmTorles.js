import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";

import classes from "./TechIsmTorles.module.css";

const TechIsmTorles = ({ techIsmId }) => {
    const handleDelete = async () => {
        await deleteDoc(doc(db, "technikai_ismeretek", techIsmId));
    }

    return <button className={classes["tech-ism-torles"]} onClick={handleDelete}>Törlés</button>
}
export default TechIsmTorles;