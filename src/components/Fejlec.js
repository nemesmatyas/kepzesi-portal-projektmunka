import { useNavigate, NavLink } from "react-router-dom";
import classes from "./Fejlec.module.css";
import { UserAuth } from "./AuthContext";

const Fejlec = ({ pageName }) => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log("Kijelentkezve");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header className={classes.fejlec}>
      <h1>{pageName}</h1>
      <NavLink to="/kezdooldal">Kezdőoldal</NavLink>
      <NavLink to="/kepzesek">Képzések</NavLink>
      <NavLink to="kompetenciaim">Kompetenciáim</NavLink>
      <NavLink to="/kpi">KPI</NavLink>
      <NavLink to="/newuser">Új felhasználó</NavLink>
      <NavLink to="/profil">Profilom</NavLink>
      <div><p>Bejelentkezve: </p>
      {user && user.email}
      <button onClick={handleLogout} label="Kijelentkezés" type="submit">Kijelentkezés</button>
      </div>
    </header>
  );
};
export default Fejlec;
