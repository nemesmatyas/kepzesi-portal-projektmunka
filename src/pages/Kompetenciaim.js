import KompetenciaSection from "../components/KompetenciaSection";

const DUMMY_DATA = {
  techIsm: [
    {
        techId: "TECH0000001",
        techNev: "C++ programozás",
        techTipus: "Programozási nyelv"
    },
    {
        techId: "TECH0000002",
        techNev: "JavaScript programozás",
        techTipus: "Programozási nyelv"
    }
  ],
  keszKepz: [
    {
      kepzId: "EDU0000001",
      kepzNev: "Python programozás",
      kepzDatum: "2022.06.28",
      kepzKategoria: "Technikai ismeretek",
    },
  ],
  cert: [
    {
      certId: "CERT00000001",
      certNev: "ITIL 4 Foundation",
      certDatum: "2021. 05. 15.",
      certErv: "Korlátlan",
    },
  ],
  bukKepz: [
    {
        kepzId: "EDU0000002",
        kepzNev: "Service Portal haladó",
        kepzIndok: "Lemondott képzés"
    }
  ],
};

const Kompetenciaim = (props) => {
  return (
    <>
      <h1>Kompetenciáim</h1>
      <KompetenciaSection
        data={DUMMY_DATA.techIsm}
        caption="Technikai ismeretek"
        type="techIsm"
      />
      <KompetenciaSection
        data={DUMMY_DATA.keszKepz}
        caption="Elvégzett képzéseim"
        type="keszKepz"
      />
      <KompetenciaSection
        data={DUMMY_DATA.cert}
        caption="Tanúsítványaim"
        type="cert"
      />
      <KompetenciaSection
        data={DUMMY_DATA.bukKepz}
        caption="Sikertelen képzéseim"
        type="bukKepz"
      />
    </>
  );
};
export default Kompetenciaim;
