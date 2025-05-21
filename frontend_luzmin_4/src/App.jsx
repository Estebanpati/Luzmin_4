import React, { useState } from "react";
import Inicio from "./componentsdos/Inicio"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nosotros from "./componentsdos/Nosotros";
import SubirAreasMineras from "./componentsdos/SubirAreasMineras";
import ProfesionalTecnico from "./componentsdos/ProfesionalTecnico";
import Inversionistas from "./componentsdos/Inversionistas";
import Footer from "./components/Footer";
import DetalleArea from "./componentsdos/DetalleArea";
import Monitoreo from "./componentsdos/Monitoreo";
import Map from "./components/Map";


function App() {

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
    <div>
      <Router>
        <Navbar setBaseLayer={setBaseLayer}
        toggleOverlay={toggleOverlay}
        overlays={overlays} />
        
        <Map baseLayer={baseLayer} overlays={overlays} />
      
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/inversionistas" element={<Inversionistas />} />
          <Route path="/profesional-tecnico" element={<ProfesionalTecnico />} />
          <Route path="/subir-areas-mineras" element={<SubirAreasMineras />} />
          <Route path="/detalle-area/:id" element={<DetalleArea />} />
          <Route path="/monitoreo" element={<Monitoreo/>}/>
          <Route path="/mapa" element={<Map baseLayer={baseLayer} overlays={overlays} />} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
