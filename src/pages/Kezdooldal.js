import { Link } from "react-router-dom";

const Kezdooldal = () => {
  return (
    <>
      <Link to="/">Kezdőoldal</Link>
      <Link to="/kompetenciaim">Kompetenciáim</Link>
      <Link to="/kepzesek">Képzések</Link>
      <Link to="/kpi">KPI</Link>
    </>
  );
};
export default Kezdooldal;
