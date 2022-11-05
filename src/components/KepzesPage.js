/**
 * Ez a komponens egy konkrét képzés adatlapját jeleníti meg, miután a felhasználó kiválasztotta az "Elérhető képzések" listából
 * TODO: API hívás az adatok megjelenítéséhez, egyelőre hardcodeolt adatokkal dolgozunk
 */
 import classes from "./KepzesPage.module.css";

const KepzesPage = () => {
  // API call helye

  return (
    <div className={classes["kepzes-oldal"]}>
      {/* Borítókép */}
      <table className={classes["kepzes-tablazat"]}>
        <thead>
          <tr>
            <th>Képzés azonosító</th>
            <th>Képzés neve</th>
            <th>Képzés kezdete</th>
            <th>Képzés vége</th>
            <th>Kategória</th>
            <th>Létszám</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EDU1000101</td>
            <td>Képzés 1</td>
            <td>2022. 01. 01. 8:00</td>
            <td>2022. 01. 01. 16:00</td>
            <td>Programozás</td>
            <td>5/10</td>
          </tr>
        </tbody>
      </table>
      <h3 className={classes["leiras"]}>Képzés részletes leírása:</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue a
        justo at venenatis. Nunc consectetur sem quis libero mollis, eu commodo
        nibh pharetra. Nullam at odio faucibus, finibus purus ac, iaculis odio.
        Integer porta diam ac justo faucibus, vel commodo quam sagittis. Nullam
        porttitor imperdiet sapien non accumsan. Curabitur egestas suscipit
        pharetra. Donec auctor libero id elit finibus tincidunt. Vestibulum
        venenatis, massa id ultricies pharetra, augue eros cursus enim, sed
        feugiat elit leo eget orci. Ut vel tincidunt nibh. Nunc molestie mi ac
        lacus tincidunt, id mollis ante tincidunt. Ut tellus nisi, ullamcorper
        sed lacus ac, ornare laoreet enim. Donec eget sem non nisl aliquam
        tincidunt. Nullam condimentum ante libero, et lacinia eros ultrices
        vitae. Phasellus sodales porta augue.
      </p>
      <button className={classes["kepzes-button"]}>Jelentkezem</button>
    </div>
  );
};
export default KepzesPage;