import { useNavigate, NavLink } from "react-router-dom";
import classes from "./Fejlec.module.css";
import { UserAuth } from "./AuthContext";

const Fejlec = ({ pageName }) => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log("Kijelentkezve");
    } catch (error) {
      console.log(error.message);
    }
  };

  /***** Aktív és inaktív menüpontok CSS-e *****/
  let activeStyle = {
    textDecoration: "underline",
    color: "#161363"
  }

  let inactiveStyle = {
    color: "white",
    textDecoration: "none"    
  }

  const isActive = ({ isActive }) => isActive ? activeStyle : inactiveStyle;

  return (
    
    <header className={classes.fejlec}>
      <h1>{pageName}</h1>
      <NavLink to="/kezdooldal" style={isActive}>Kezdőoldal</NavLink>
      <NavLink to="/kepzesek" style={isActive}>Képzések</NavLink>
      <NavLink to="/kompetenciaim" style={isActive}>Kompetenciáim</NavLink>
      <NavLink to="/kpi" style={isActive}>KPI</NavLink>
      <NavLink to="/admin" style={isActive}>Admin</NavLink>
      <NavLink to="/profil" style={isActive}>{user.email}</NavLink>
      <button className={classes["logout-button"]} onClick={handleLogout} label="Kijelentkezés" type="submit">Kijelentkezés</button>  
    </header>
  );
};
export default Fejlec;
