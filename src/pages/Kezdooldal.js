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
          <Link to="/kompetenciaim">
            <img 
              src= 'https://egyedi-oneletrajz.hu/images/stories/virtuemart/product/%C3%B6n%C3%A9letrajz_%C3%A1talak%C3%ADt%C3%A1s.jpg'
              alt="kompetencia">
            </img>
          </Link>
        </div>
      </KezdooldalCard>
      <KezdooldalCard page="kepz">
        <Link className={classes["kezdooldal-card-link"]} to="/kepzesek">Elérhető képzések</Link>
        <div className={classes["kezdooldal-card-img"]}>
          <Link to="/kepzesek">
            <img
              src= 'https://i0.wp.com/szakmaikamara.hu/wp-content/uploads/2017/12/kepzes_800x445.jpg?resize=800%2C445&ssl=1'
              alt="kompetencia">
            </img>
          </Link>
        </div>
      </KezdooldalCard>
      <KezdooldalCard>
        <Link className={classes["kezdooldal-card-link"]} to="/kpi">KPI</Link>
        <div className={classes["kezdooldal-card-img"]}>
          <Link to="/kpi">
            <img
              src= 'https://amphos.go.th/wp-content/uploads/2019/03/kpi_sme.jpg'
              alt="kompetencia">
            </img>
          </Link>
        </div>
      </KezdooldalCard>
    </div>
  );
};
export default Kezdooldal;
