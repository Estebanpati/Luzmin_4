import React from "react";
import { Marker, Popup, LayerGroup } from "react-leaflet";

// Definimos las posiciones de los marcadores
const crownHill = [39.75, -105.09];
const rubyHill = [39.68, -105.0];

function Parks() {
  return (
    <LayerGroup>
      <Marker position={crownHill}>
        <Popup>This is Crown Hill Park.</Popup>
      </Marker>
      <Marker position={rubyHill}>
        <Popup>This is Ruby Hill Park.</Popup>
      </Marker>
    </LayerGroup>
  );
}

export default Parks;
