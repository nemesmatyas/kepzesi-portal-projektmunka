import KorabbiNegyedevek from "../components/KorabbiNegyedevek";
import AktualisNegyedev from "../components/AktualisNegyedev";

const KPI = (props) => {
  props.pageCallback("KPI értékelések");
  return (
    <>
      <KorabbiNegyedevek />
      <AktualisNegyedev />   
    </>
  );
};
export default KPI;
