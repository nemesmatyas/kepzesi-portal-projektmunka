import ProfilAdatlapCard from "../components/ProfilAdatlapCard";
import JelszoValtoztatasForm from "../components/JelszoValtoztatasForm";
import UjProfilkepForm from "../components/UjProfilkepForm";
import classes from "./Profil.module.css";

const Profil = () => {
  return (
    <div className={classes["profil-container"]}>
      <ProfilAdatlapCard />
      <JelszoValtoztatasForm />
      <UjProfilkepForm />
    </div>
  );
};
export default Profil;
