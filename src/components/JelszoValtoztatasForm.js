const JelszoValtoztatasForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Jelszóváltoztatási kérés elküldve");
  };

  return (
    <>
      <h3>Jelszó megváltoztatása</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="jelenlegi-jelszo">Jelenlegi jelszó</label>
        <input id="jelenlegi-jelszo" type="password" />
        <label htmlFor="uj-jelszo">Új jelszó</label>
        <input id="uj-jelszo" type="password" />
        <label htmlFor="uj-jelszo-megegyszer">Új jelszó mégegyszer</label>
        <input id="uj-jelszo-megegyszer" type="password" />
        <button type="submit">Elküld</button>
      </form>
    </>
  );
};
export default JelszoValtoztatasForm;
