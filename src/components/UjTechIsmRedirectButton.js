import classes from "./UjTechIsmRedirectButton.module.css";

import { useNavigate } from "react-router-dom"

const UjTechIsmRedirectButton = () => {
    const navigate = useNavigate();

    const ujKepzesRedirect = () => {
        navigate("/ujTechnikaiIsmeret");
    }

    return <button className={classes["uj-tech-ism"]} onClick={ujKepzesRedirect}>Új technikai ismeret hozzáadása</button>
}
export default UjTechIsmRedirectButton;