import classes from "./ProfilAdatlapCard.module.css";

const ProfilAdatlapCard = () => {
  return (
    <div className={classes["profile-data"]}>
        <table>
          <tr>
            <td className={classes["cimek"]}>Név:</td>
            <td>Gipsz Jakab</td>
          </tr>
          <tr>
            <td className={classes["cimek"]}>Törzsszám:</td>
            <td>16336</td>
          </tr>
          <tr>
            <td className={classes["cimek"]}>Beosztás:</td>
            <td>Szoftverfejlesztő</td>
          </tr>
          <tr>
            <td className={classes["cimek"]}>Munkaviszony kezdete:</td>
            <td>2019.09.09.</td>
          </tr>
        </table>
      <div className={classes["profile-pic"]}>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80"
          alt="Profilkép"
        />
      </div>
    </div>
  );
};
export default ProfilAdatlapCard;
