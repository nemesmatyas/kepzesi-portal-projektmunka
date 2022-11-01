import classes from "./UjProfilkepForm.module.css";

const UjProfilkepForm = () => {
  return (
    <>
      <h3>Profilkép megváltoztatása:</h3>
      <form className={classes["uj-profilkep-form"]}>
        <label htmlFor="uj-profilkep">Új profilkép feltöltése:</label>
        <input className={classes["uj-profilkep"]} type="file" accept="image" />
        <button className={classes["gomb"]} type="submit">Elküld</button>
      </form>
    </>
  );
};
export default UjProfilkepForm;
