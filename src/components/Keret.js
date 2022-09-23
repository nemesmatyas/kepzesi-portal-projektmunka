import { Outlet, useLocation } from "react-router-dom";
import Fejlec from "./Fejlec";
import Lablec from "./Lablec";

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
        case '/profil':
            currentPageName = 'Profilom';
            break;
        default:
            currentPageName = 'Kezdőoldal';
    }

  return (
    <>
      <Fejlec pageName={currentPageName} />
        <Outlet />
      <Lablec />
    </>
  );
};
export default Keret;
