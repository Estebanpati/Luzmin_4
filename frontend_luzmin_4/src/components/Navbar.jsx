import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/imagenes-gpt/Luzmin-Logo.webp';
import avatar from '../assets/imagenes-gpt/avatar.png';

const Navbar = ({ setBaseLayer, toggleOverlay, overlays }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">       
      <div className="container-fluid">
        <Link className="navbar-brand" to="/inicio">
          <img src={logo} alt="LUZMIN Logo" style={{ width: "40px" }} className="rounded-pill" />
        </Link>

        <button
          className="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          {/* Ícono de hamburguesa que aparece en pantallas pequeñas. */}
        </button>

        {/* Contenedor de los enlaces del menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* collapse navbar-collapse: Permite que el contenido se colapse o expanda con el botón de hamburguesa. */}
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
              <Link className="nav-link" to="/inicio">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Nosotros">Nosotros</Link>
            </li>


            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="projectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={e => e.preventDefault()}
              >
                Cartera de Proyectos Mineros
              </a>
              <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                <li><Link className="dropdown-item" to="/subir-areas-mineras">Subir Áreas Mineras</Link></li>
                <li><Link className="dropdown-item" to="/profesional-tecnico">Profesional Técnico</Link></li>
                <li><Link className="dropdown-item" to="/inversionistas">Inversionistas</Link></li>
              </ul>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/monitoreo">Monitoreo Ambiental</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Base Layers</a>
              <ul className="dropdown-menu">
                
                <li>
                  <Link className="dropdown-item" to="/" onClick={() => setBaseLayer("OpenTopoMap")}>OpenTopoMap</Link>
                </li>
              </ul>
            </li>


             <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Overlays</a>
              <ul className="dropdown-menu">
                <li>
                  <label className="dropdown-item"><input type="checkbox" value="Cities" checked={overlays.Cities} onChange={toggleOverlay}/>Cities</label>
                </li>

                <li className="dropdown-header">Puntos estratégicos a</li>

                <li>
                  <label className="dropdown-item"><input type="checkbox" value="Parks" checked={overlays.Parks} onChange={toggleOverlay}/>Parks</label>
                </li>

                <li><hr className="dropdown-divider" /></li>

                
              </ul>
            </li>





            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// Exportamos el componente para que pueda ser utilizado en otros archivos.
