import { Routes, Route } from "react-router-dom";
import Kezdooldal from './pages/Kezdooldal';
import Kepzesek from "./pages/Kepzesek";
import KepzesPage from "./components/KepzesPage";
import Kompetenciaim from "./pages/Kompetenciaim";
import KPI from "./pages/KPI";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Keret from "./components/Keret";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Keret />}>
          <Route index element={<Kezdooldal />} />
          <Route path="kepzesek" element={<Kepzesek />} />
          <Route path="/kepzesek/:kepzesId" element={<KepzesPage />} />
          <Route path="kompetenciaim" element={<Kompetenciaim />} />
          <Route path="kpi"  element={<KPI />}/>
          <Route path="profil" element={<Profil />}/>
        </Route>
        <Route path="login" element={<Login />}/>        
        <Route path="*" element={<h1>A keresett oldal nem található.</h1>} />   
      </Routes>
    </div>
  );
}

export default App;
