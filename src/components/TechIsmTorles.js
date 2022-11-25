import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import classes from "./TechIsmTorles.module.css";

const TechIsmTorles = ({ techIsmId }) => {
    const handleDelete = async () => {
        await deleteDoc(doc(db, "technikai_ismeretek", techIsmId));
    }

    return <button className={classes["tech-ism-torles"]} onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></button>
}
export default TechIsmTorles;