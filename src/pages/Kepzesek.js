import KepzesekList from "../components/KepzesekList";

const Kepzesek = (props) => {
  props.pageCallback("Elérhető képzések");

  const DUMMY_DATA = [
    {
      kepzesId: "EDU1000101",
      kepzesNev: "Képzés 1",
      kepzesDatum: "2022. 01. 01.",
      kepzesKat: "Programozás",
      kepzesAktLetsz: "5",
      kepzesMaxLetsz: "10"
    }, {
      kepzesId: "EDU1000102",
      kepzesNev: "Képzés 2",
      kepzesDatum: "2022. 02. 02.",
      kepzesKat: "Projektmenedzsment",
      kepzesAktLetsz: "4",
      kepzesMaxLetsz: "5"
    },
    {
      kepzesId: "EDU1000103",
      kepzesNev: "Képzés 3",
      kepzesDatum: "2022. 01. 03.",
      kepzesKat: "Soft skill",
      kepzesAktLetsz: "9",
      kepzesMaxLetsz: "12"
    }
  ];

  return (
    <>
      <KepzesekList kepzesek={DUMMY_DATA} />
    </>
  );
};
export default Kepzesek;
