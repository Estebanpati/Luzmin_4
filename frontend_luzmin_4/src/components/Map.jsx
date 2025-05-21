import React from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Baselayers from "./Baselayers";
import Overlayers from "./Overlayers";

// Definimos la posición central del mapa
const center = [39.73, -104.99];

function Map({ baseLayer, overlays }) {
  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={true} style={{ height: "70vh", width: "70vw" }}>
      <Baselayers baseLayer={baseLayer} />
      <Overlayers overlays={overlays} />
    </MapContainer>
  );
}

export default Map;