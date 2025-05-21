import React from "react";
import './Cabecera.css';


const Cabecera = () => {
  return (
    <header className="cabecera d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="display-3 text-white mb-3">CENTRO DE ESTUDIOS Y FORMACIÓN DE POSGRADO E INVESTIGACIÓN</h1>
        <p className="lead text-white mb-4">
        UNIVERSIDAD PÚBLICA DE EL ALTO DIRECCIÓN DE POSGRADO
        </p>
        <a href="#cuerpo" className="btn btn-primary btn-lg">Descubre Más</a>
      </div>
    </header>
  );
};

export default Cabecera;