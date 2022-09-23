import { Link } from "react-router-dom";
import KezdooldalCard from "../components/KezdooldalCard";

const Kezdooldal = () => {

  return (
    <>
      <KezdooldalCard page="komp">
        <Link to="/kompetenciaim">Kompetenciáim</Link>
      </KezdooldalCard>
      <KezdooldalCard page="kepz">
        <Link to="/kepzesek">Elérhető képzések</Link>
      </KezdooldalCard>
      <KezdooldalCard>
        <Link to="/kpi">KPI</Link>
      </KezdooldalCard>
    </>
  );
};
export default Kezdooldal;
