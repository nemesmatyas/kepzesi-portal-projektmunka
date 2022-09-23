/**
 * Ez a komponens egy konkrét képzés adatlapját jeleníti meg, miután a felhasználó kiválasztotta az "Elérhető képzések" listából
 * TODO: API hívás az adatok megjelenítéséhez, egyelőre hardcodeolt adatokkal dolgozunk
 */
const KepzesPage = () => {
  // API call helye

  return (
    <div>
      {/* Borítókép */}
      <p>Képzés azonosító:</p>
      <p>EDU1000101</p>
      <p>Képzés neve:</p>
      <p>Képzés 1</p>
      <p>Képzés kezdete:</p>
      <p>2022. 01. 01. 8:00</p>
      <p>Képzés vége:</p>
      <p>2022. 01. 01. 16:00</p>
      <p>Kategória</p>
      <p>Programozás</p>
      <p>Létszám:</p>
      <p>5/10</p>
      <p>Képzés részletes leírása:</p>
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
      <button>Jelentkezem</button>
    </div>
  );
};
export default KepzesPage;
