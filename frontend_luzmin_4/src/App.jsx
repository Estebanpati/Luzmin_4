import React, { useState } from "react";
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
import Map from "./components/Map";

function App() {
  const [showNavbar2, setShowNavbar2] = useState(false);
  const [baseLayer, setBaseLayer] = useState("OpenStreetMap");
  const [overlays, setOverlays] = useState({
    Cities: true,
    Parks: false,
  });

  const toggleOverlay = (event) => {
    const { value, checked } = event.target;
    setOverlays((prevOverlays) => ({
      ...prevOverlays,
      [value]: checked,
    }));
  };

  return (
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
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

