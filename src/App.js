import { Routes, Route } from "react-router-dom";
import Kezdooldal from './pages/Kezdooldal';
import Kepzesek from "./pages/Kepzesek";
import KepzesPage from "./components/KepzesPage";
import Kompetenciaim from "./pages/Kompetenciaim";
import KPI from "./pages/KPI";
import Profil from "./pages/Profil";
import Keret from "./components/Keret";
import './App.css';
import Login_Page from "./pages/Login";
import NewUser from "./pages/NewUser";
import { AuthContextProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NewKepzes from "./pages/NewKepzes";

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route index element={<Login_Page />} />
            <Route path="/" element={<Keret />}>
              <Route path="kezdooldal" element={<ProtectedRoute><Kezdooldal /></ProtectedRoute>} />
              <Route path="kepzesek" element={<ProtectedRoute><Kepzesek /></ProtectedRoute>} />
              <Route path="/kepzesek/:kepzesId" element={<ProtectedRoute><KepzesPage /></ProtectedRoute>} />
              <Route path="/kepzesek/newkepzes" element={<ProtectedRoute><NewKepzes /></ProtectedRoute>} />
              <Route path="kompetenciaim" element={<ProtectedRoute><Kompetenciaim /></ProtectedRoute>} />
              <Route path="kpi" element={<ProtectedRoute><KPI /></ProtectedRoute>}/>
              <Route path="newuser" element={<ProtectedRoute><NewUser /></ProtectedRoute>}/>
              <Route path="profil" element={<ProtectedRoute><Profil /></ProtectedRoute>}/>
            </Route>      
            <Route path="*" element={<h1>A keresett oldal nem található.</h1>} />   
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
