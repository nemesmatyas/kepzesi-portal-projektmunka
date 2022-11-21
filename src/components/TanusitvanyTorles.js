import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";

import classes from "./TanusitvanyTorles.module.css";

const TanusitvanyTorles = ({ certId }) => {
    const handleDelete = async () => {
        await deleteDoc(doc(db, "tanusitvanyok", certId));
    }

    return <button className={classes["cert-torles"]} onClick={handleDelete}>Törlés</button>
}
export default TanusitvanyTorles;