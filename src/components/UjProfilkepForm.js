import classes from "./UjProfilkepForm.js";

const UjProfilkepForm = () => {
  return (
    <>
      <h3>Profilkép megváltoztatása</h3>
      <form className={classes["uj-profilkep-form"]}>
        <label htmlFor="uj-profilkep">Új profilkép feltöltése</label>
        <input id="uj-profilkep" type="file" accept="image" />
        <button type="submit">Elküld</button>
      </form>
    </>
  );
};
export default UjProfilkepForm;
