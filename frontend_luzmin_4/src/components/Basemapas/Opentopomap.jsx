import React from "react";
import { TileLayer } from "react-leaflet";

function Opentopomap() {
  return (
    <TileLayer
      attribution="Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)"
      url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
      maxZoom={19}
    />
  );
}

export default Opentopomap;
