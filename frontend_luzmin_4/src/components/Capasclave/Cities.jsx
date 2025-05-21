import React from "react";
import { Marker, Popup, LayerGroup } from "react-leaflet";

// Definimos las posiciones de los marcadores
const littleton = [39.61, -105.02];
const denver = [39.74, -104.99];
const aurora = [39.73, -104.8];
const golden = [39.77, -105.23];

function Cities() {
  return (
    <LayerGroup>
      <Marker position={littleton}>
        <Popup>This is Littleton, CO.</Popup>
      </Marker>
      <Marker position={denver}>
        <Popup>This is Denver, CO.</Popup>
      </Marker>
      <Marker position={aurora}>
        <Popup>This is Aurora, CO.</Popup>
      </Marker>
      <Marker position={golden}>
        <Popup>This is Golden, CO.</Popup>
      </Marker>
    </LayerGroup>
  );
}

export default Cities;