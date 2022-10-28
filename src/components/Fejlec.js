import { NavLink } from "react-router-dom";
import classes from "./Fejlec.module.css";

const Fejlec = ({ pageName }) => {
  return (
    <header className={classes.fejlec}>
      <h1>{pageName}</h1>
      <NavLink className={classes["nav"]} to="/">Kezdőoldal</NavLink>
      <NavLink className={classes["nav"]} to="/kepzesek">Képzések</NavLink>
      <NavLink className={classes["nav"]} to="kompetenciaim">Kompetenciáim</NavLink>
      <NavLink className={classes["nav"]} to="/kpi">KPI</NavLink>
      <NavLink className={classes["nav"]} to="/profil">Profilom</NavLink>     
    </header>
  );
};
export default Fejlec;
