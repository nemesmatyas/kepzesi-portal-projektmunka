import { Link } from "react-router-dom";
import classes from "./KompetenciaSection.module.css";

const KompetenciaSection = (props) => {
  const FEJLECEK = {
    techIsm: ["Ismeret azonosító", "Ismeret neve", "Ismeret típusa"],
    keszKepz: ["Képzés azonosító", "Képzés neve", "Dátum", "Kategória"],
    cert: ["Tanúsítvány azonosító", "Tanúsítvány neve", "Dátum", "Érvényesség"],
    bukKepz: ["Képzés azonosító", "Képzés neve", "Dátum", "Magyarázat"]
  };

  return (
    <table className={classes["komp-sect-table"]}>
      <caption>{props.caption}</caption>
      <thead>
        <tr>
          {FEJLECEK[props.type].map((cella) => (
            <th key={Math.random()}>{cella}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
        props.data.map((sor) => {      
          return <tr key={Math.random()}>
            {<td><Link to="/">{sor[Object.keys(sor)[0]]}</Link></td>}
            {Object.keys(sor).slice(1).map((key) => (
              <td key={Math.random()}>{sor[key]}</td>
            ))}
          </tr>
        })}
      </tbody>
    </table>
  );
};
export default KompetenciaSection;
