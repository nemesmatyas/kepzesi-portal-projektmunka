import { Link } from "react-router-dom";
import KezdooldalCard from "../components/KezdooldalCard";
import classes from "./kezdooldal.module.css";

const Kezdooldal = () => {

  return (
    <div className={classes["kezdooldal-container"]}>
      <KezdooldalCard className={classes["kezdooldal-card"]} page="komp">
        <div className={classes["kezdooldal-card-link"]}>
          <Link to="/kompetenciaim">Kompetenciáim</Link>
        </div>
        <div className={classes["kezdooldal-card-img"]}>
          <img 
            src={require("../components/kompetencia.png")} 
            alt="kompetencia">
          </img>
        </div>
      </KezdooldalCard>
      <KezdooldalCard page="kepz">
        <Link className={classes["kezdooldal-card-link"]} to="/kepzesek">Elérhető képzések</Link>
        <div className={classes["kezdooldal-card-img"]}>
          <img
            src={require("../components/kepzes.png")}
            alt="kompetencia">
          </img>
        </div>
      </KezdooldalCard>
      <KezdooldalCard>
        <Link className={classes["kezdooldal-card-link"]} to="/kpi">KPI</Link>
        <div className={classes["kezdooldal-card-img"]}>
          <img
            src={require("../components/kpi.png")}
            alt="kompetencia">
          </img>
        </div>
      </KezdooldalCard>
    </div>
  );
};
export default Kezdooldal;
