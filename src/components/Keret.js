import './Keret.module.css';
import { Outlet, useLocation } from "react-router-dom";
import Fejlec from "./Fejlec";
import Lablec from "./Lablec";
import classes from "./Keret.module.css";

const Keret = () => {
    const location = useLocation();
    let currentPageName = '';

    switch (location.pathname) {
        case '/kepzesek':
            currentPageName = 'Elérhető képzések';
            break;
        case '/kompetenciaim':
            currentPageName = 'Kompetenciáim';
            break;
        case '/kpi':
            currentPageName = 'KPI értékelések';
            break;
        case '/newuser':
            currentPageName = 'Új felhasználó';
            break;
        case '/profil':
            currentPageName = 'Profilom';
            break;
        default:
            currentPageName = 'Kezdőoldal';
    }

  return (
    <>
      <Fejlec pageName={currentPageName} className={classes["fejlec"]} />
        <Outlet />
      <Lablec />
    </>
  );
};
export default Keret;
