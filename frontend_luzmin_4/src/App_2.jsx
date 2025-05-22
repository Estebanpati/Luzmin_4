import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Map from "./components/Map";
import Navbar_2 from "./components/Navbar_2";
import Footer from "./components/Footer";

function Appdos() {
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
      <Navbar_2
        setBaseLayer={setBaseLayer}
        toggleOverlay={toggleOverlay}
        overlays={overlays}
      />

      <Map baseLayer={baseLayer} overlays={overlays} />

      <Routes>
        <Route path="/mapa" element={<Map baseLayer={baseLayer} overlays={overlays} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Appdos;

