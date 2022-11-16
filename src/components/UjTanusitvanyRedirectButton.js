import { useNavigate } from "react-router-dom";

import classes from "./UjTanusitvanyRedirectButton.module.css";

const UjTanusitvanyRedirectButton = () => {
    const navigate = useNavigate();

    const ujCertRedirect = () => {
        navigate("/ujTanusitvany");
    }

    return <button className={classes["uj-cert-redirect-button"]} onClick={ujCertRedirect}>Új tanúsítvány hozzáadása</button>
}
export default UjTanusitvanyRedirectButton;