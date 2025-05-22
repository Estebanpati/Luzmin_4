import React, { useState } from "react";
import Inicio from "./componentsdos/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nosotros from "./componentsdos/Nosotros";
import SubirAreasMineras from "./componentsdos/SubirAreasMineras";
import ProfesionalTecnico from "./componentsdos/ProfesionalTecnico";
import Inversionistas from "./componentsdos/Inversionistas";
import Footer from "./components/Footer";
import DetalleArea from "./componentsdos/DetalleArea";
import Monitoreo from "./componentsdos/Monitoreo";
import Appdos from "./App_2";
import Map from "./components/Map"; // <-- Agrega esta línea

function App() {
  // Agrega estos estados para Map
  const [baseLayer, setBaseLayer] = useState("OpenStreetMap");
  const [overlays, setOverlays] = useState({
    Cities: true,
    Parks: false,
  });

  return (
    <div>
      <Router>
        <Navbar />
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
          <Route path="/appdos" element={<Appdos />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
