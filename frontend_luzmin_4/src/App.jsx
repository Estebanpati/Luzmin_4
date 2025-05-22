import React, { useState } from "react";
<<<<<<< HEAD
import Inicio from "./componentsdos/Inicio";
=======
>>>>>>> 3d159338dcbb9375702035ab562cd5ebee8d559e
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar_2 from "./components/Navbar_2";
import Inicio from "./componentsdos/Inicio"
import Nosotros from "./componentsdos/Nosotros";
import SubirAreasMineras from "./componentsdos/SubirAreasMineras";
import ProfesionalTecnico from "./componentsdos/ProfesionalTecnico";
import Inversionistas from "./componentsdos/Inversionistas";
import Footer from "./components/Footer";
import DetalleArea from "./componentsdos/DetalleArea";
import Monitoreo from "./componentsdos/Monitoreo";
<<<<<<< HEAD
import Appdos from "./App_2";
import Map from "./components/Map"; // <-- Agrega esta línea
import App_Monitoreo_amb from "./App_Monitoreo_amb";

function App() {
  // Agrega estos estados para Map
=======
import Map from "./components/Map";

function App() {
  const [showNavbar2, setShowNavbar2] = useState(false);
>>>>>>> 3d159338dcbb9375702035ab562cd5ebee8d559e
  const [baseLayer, setBaseLayer] = useState("OpenStreetMap");
  const [overlays, setOverlays] = useState({
    Cities: true,
    Parks: false,
  });

  return (
<<<<<<< HEAD
    <div>
      <Router>
        <Navbar />
=======
    <Router>
      <>
        {!showNavbar2 ? (
          <Navbar
            onShowNavbar2={() => setShowNavbar2(true)}
            setBaseLayer={setBaseLayer}
            toggleOverlay={toggleOverlay}
            overlays={overlays}
          />
        ) : (
          <Navbar_2 onBack={() => setShowNavbar2(false)} />
        )}
        <Map baseLayer={baseLayer} overlays={overlays} />
>>>>>>> 3d159338dcbb9375702035ab562cd5ebee8d559e
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/inversionistas" element={<Inversionistas />} />
          <Route path="/profesional-tecnico" element={<ProfesionalTecnico />} />
          <Route path="/subir-areas-mineras" element={<SubirAreasMineras />} />
          <Route path="/detalle-area/:id" element={<DetalleArea />} />
          <Route path="/monitoreo" element={<Monitoreo />} />
          <Route path="/mapa" element={<Map baseLayer={baseLayer} overlays={overlays} />} />
<<<<<<< HEAD
          <Route path="/appdos" element={<Appdos />} />
          <Route path="/monitoreo-ambiental" element={<App_Monitoreo_amb />} />
        </Routes>
        <Footer />
      </Router>
    </div>
=======
        </Routes>
        <Footer />
      </>
    </Router>
>>>>>>> 3d159338dcbb9375702035ab562cd5ebee8d559e
  );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> 3d159338dcbb9375702035ab562cd5ebee8d559e
