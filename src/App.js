import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Kezdooldal from './pages/Kezdooldal';
import Kepzesek from "./pages/Kepzesek";
import KepzesPage from "./components/KepzesPage";
import Kompetenciaim from "./pages/Kompetenciaim";
import KPI from "./pages/KPI";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Fejlec from "./components/Fejlec";
import Lablec from "./components/Lablec";
import './App.css';

function App() {
  // Az oldal nevét tároljuk itt, amit aztán megjelenítünk a fejlécen
  const [page, setPage] = useState('Kezdőoldal');
  // Lekérjük az adott oldaltól a nevét, és beállítjuk state-nek, hogy oldaltól függően mindig az aktuális oldal nevét jelenítsük meg a fejlécen
  const getPage = (pageName) => {
    setPage(pageName);
  }

  return (
    <div className="App">
      <Fejlec page={page} />
      <Routes>
        <Route path="/" element={<Kezdooldal pageCallback={getPage} />} />
        <Route path="/kepzesek" element={<Kepzesek pageCallback={getPage}/>} />
        <Route path="/kepzesek/:kepzesId" element={<KepzesPage pageCallback={getPage} />} />
        <Route path="/kompetenciaim"  element={<Kompetenciaim pageCallback={getPage} />}/>
        <Route path="/kpi"  element={<KPI pageCallback={getPage} />}/>
        <Route path="/login" element={<Login pageCallback={getPage} />}/>
        <Route path="/profil" element={<Profil pageCallback={getPage} />}/>
        <Route path="*" element={<h1>A keresett oldal nem található.</h1>} />     
      </Routes>
      <Lablec />
    </div>
  );
}

export default App;
