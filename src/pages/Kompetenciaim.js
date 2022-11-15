import classes from "./Kompetenciaim.module.css";

import TechnikaiIsmeretek from "../components/TechnikaiIsmeretek";
import Tanusitvanyok from "../components/Tanusitvanyok";
import SikeresKepzesek from "../components/SikeresKepzesek";
import SikertelenKepzesek from "../components/SikertelenKepzesek";

const Kompetenciaim = () => {

  return (
    <div className={classes["kompetenciaim-container"]}>
      <TechnikaiIsmeretek />
      <Tanusitvanyok />
      <SikeresKepzesek />
      <SikertelenKepzesek />
      
    </div>
  );
};
export default Kompetenciaim;
