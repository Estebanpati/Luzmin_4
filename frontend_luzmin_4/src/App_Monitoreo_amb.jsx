import React from "react";
import Navbar_3 from "./components/Navbar_3";

const App_Monitoreo_amb = () => {
  return (
    <div>
      <Navbar_3 />
      <div style={{ padding: "2rem" }}>
        <h1>Monitoreo Ambiental Esteban</h1>
        <p>
          Bienvenido al sistema de monitoreo ambiental. Aquí podrás visualizar datos
          en tiempo real sobre la calidad del aire, temperatura y otros parámetros
          ambientales.
        </p>
      </div>

      <div class="offcanvas offcanvas-start" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title">Heading</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <button class="btn btn-secondary" type="button">A Button</button>
  </div>
</div>
    </div>
  );
};

export default App_Monitoreo_amb;