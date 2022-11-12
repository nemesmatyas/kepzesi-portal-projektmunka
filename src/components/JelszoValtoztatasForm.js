import classes from "./JelszoValtoztatasForm.module.css";

const JelszoValtoztatasForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Jelszóváltoztatási kérés elküldve");
  };

  return (
    <div>
      <h3>Jelszó megváltoztatása:</h3>
      <form onSubmit={submitHandler}>
        <div className={classes["jelszo-container"]}>
          <label htmlFor="jelenlegi-jelszo">Jelenlegi jelszó:</label>
          <input className={classes["jelszo"]} type="password" />
          <label htmlFor="uj-jelszo">Új jelszó:</label>
          <input className={classes["jelszo"]} type="password" />
          <label htmlFor="uj-jelszo-megegyszer">Új jelszó ismét:</label>
          <input className={classes["jelszo"]} type="password" />
          <button className={classes["jelszo-button"]} type="submit">Elküld</button>
        </div>
      </form>
    </div>
  );
};
export default JelszoValtoztatasForm;

/*A 18. sorban a html hivatkozas miatt az uj-jelszo-megegyszer nem lett javítva ismet-re, nehogy gond legyen.*/
