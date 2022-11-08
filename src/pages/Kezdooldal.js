import KezdooldalCard from "../components/KezdooldalCard";

import kompetenciaimCardImg from "../assets/kompetenciaim_card.png";
import kepzesekCardImg from "../assets/kepzesek_card.png";
import kpiCardImg from "../assets/kpi_card.png";

import classes from "./kezdooldal.module.css";

const Kezdooldal = () => {
  const cardData = [
    {
      id: 1,
      pageRoute: "/kompetenciaim",
      cardDisplayText: "Kompetenciáim",
      imgRoute: kompetenciaimCardImg,
    },
    {
      id: 2,
      pageRoute: "/kepzesek",
      cardDisplayText: "Képzések",
      imgRoute: kepzesekCardImg,
    },
    {
      id: 3,
      pageRoute: "/kpi",
      cardDisplayText: "KPI",
      imgRoute: kpiCardImg,
    },
  ];

  return (
    <div className={classes["kezdooldal-container"]}>
      {cardData.map((card) => (
        <KezdooldalCard
          key={card.id}
          linkToPage={card.pageRoute}
          cardDisplayText={card.cardDisplayText}
          imgRoute={card.imgRoute}
        />
      ))}
    </div>
  );
};
export default Kezdooldal;
