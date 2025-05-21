import React from "react";
import Opentopomap from "./Basemapas/Opentopomap";


function Baselayers({ baseLayer }) {
  return (
    <>
      {baseLayer === "OpenTopoMap" && <Opentopomap />}
    </>
  );
}

export default Baselayers;
