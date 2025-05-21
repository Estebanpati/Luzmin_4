import React from "react";
import Cities from "./Capasclave/Cities";
import Parks from "./Capasclave/Parks";




function Overlayers({ overlays }) {
  return (
    <>
      {overlays.Cities && <Cities />}
      {overlays.Parks && <Parks />} 
    </>
  );
}

export default Overlayers;