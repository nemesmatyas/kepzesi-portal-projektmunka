import { Link } from "react-router-dom";
import classes from "./Fejlec.module.css";

const Fejlec = (props) => {
  return (
    <header className={classes.fejlec}>
      <h1>{props.page}</h1>
      <Link to="/profil">Profilom</Link>
    </header>
  );
};
export default Fejlec;
