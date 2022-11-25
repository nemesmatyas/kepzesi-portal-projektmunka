import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import classes from "./TanusitvanyTorles.module.css";

const TanusitvanyTorles = ({ certId }) => {
    const handleDelete = async () => {
        await deleteDoc(doc(db, "tanusitvanyok", certId));
    }

    return <button className={classes["cert-torles"]} onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></button>
}
export default TanusitvanyTorles;