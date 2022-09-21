import { NavLink } from "react-router-dom";
import classes from "./Fejlec.module.css";

const Fejlec = (props) => {
  return (
    <header className={classes.fejlec}>
      <h1>{props.page}</h1>
      <NavLink to="/">Kezdőoldal</NavLink>
      <NavLink to="/kepzesek">Képzések</NavLink>
      <NavLink to="kompetenciaim">Kompetenciáim</NavLink>
      <NavLink to="/kpi">KPI</NavLink>
      <NavLink to="/profil">Profilom</NavLink>     
    </header>
  );
};
export default Fejlec;
