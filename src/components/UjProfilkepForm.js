import classes from "./UjProfilkepForm.module.css";

const UjProfilkepForm = () => {
  return (
    <div>
      <h3 className={classes["profilkep-szoveg"]}>Profilkép megváltoztatása:</h3>
      <form>
        <label htmlFor="uj-profilkep">Új profilkép feltöltése:</label>
        <input className={classes["uj-profilkep"]} type="file" accept="image" />
        <button className={classes["profilkep-button"]} type="submit">Elküld</button>
      </form>
    </div>
  );
};
export default UjProfilkepForm;
