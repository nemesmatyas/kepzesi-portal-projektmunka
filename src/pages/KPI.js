import KorabbiNegyedevek from "../components/KorabbiNegyedevek";
import AktualisNegyedev from "../components/AktualisNegyedev";
import classes from "./KPI.module.css";

const KPI = () => {

  return (
    <div className={classes["kpi-container"]}>
      <AktualisNegyedev />
      <KorabbiNegyedevek />   
    </div>
  );
};
export default KPI;
