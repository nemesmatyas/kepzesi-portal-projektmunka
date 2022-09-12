import ProfilAdatlapCard from "../components/ProfilAdatlapCard";
import JelszoValtoztatasForm from "../components/JelszoValtoztatasForm";
import UjProfilkepForm from "../components/UjProfilkepForm";

const Profil = (props) => {
  props.pageCallback("Profilom");

  return (
    <>
      <ProfilAdatlapCard />
      <JelszoValtoztatasForm />
      <UjProfilkepForm />
    </>
  );
};
export default Profil;
