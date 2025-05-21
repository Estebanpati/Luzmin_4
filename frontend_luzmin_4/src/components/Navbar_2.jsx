import React from "react";

const Navbar_2 = ({ onBack }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand">Navbar 2</span>
      <button className="btn btn-secondary ms-auto" onClick={onBack}>
        Volver
      </button>
      {/* Aquí puedes agregar el contenido de tu Navbar_2 */}
    </div>
  </nav>
);

export default Navbar_2;