import classes from "./JelszoValtoztatasForm.module.css";

const JelszoValtoztatasForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Jelszóváltoztatási kérés elküldve");
  };

  return (
    <>
      <h3>Jelszó megváltoztatása:</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="jelenlegi-jelszo">Jelenlegi jelszó:</label>
          <input className={classes["jelenlegi-jelszo"]} type="password" />
          <label htmlFor="uj-jelszo">Új jelszó:</label>
          <input className={classes["uj-jelszo"]} type="password" />
          <label htmlFor="uj-jelszo-megegyszer">Új jelszó ismét:</label>
          <input className={classes["uj-jelszo-ismet"]} type="password" />
          <button className={classes["gomb"]} type="submit">Elküld</button>
        </div>
      </form>
    </>
  );
};
export default JelszoValtoztatasForm;

/*A 18. sorban a html hivatkozas miatt az uj-jelszo-megegyszer nem lett javítva ismet-re, nehogy gond legyen.*/
