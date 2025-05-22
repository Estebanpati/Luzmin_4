import React from "react";
import { Link } from "react-router-dom";

const Navbar_2 = ({ setBaseLayer, toggleOverlay, overlays }) => {
  return (
    <nav style={{ background: "#222", padding: "1rem" }}>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ marginRight: "1rem" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Inicio dos</Link>
        </li>
        <li style={{ marginRight: "1rem" }}>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>Acerca dos</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contacto dos</Link>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="mapa"
            role="button"
            data-bs-toggle="dropdown"
            style={{ color: "yellow", padding: "1px", margin: "1px" }} // Color, padding y margin
          >
            -- Base Layers --
          </a>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setBaseLayer("OpenTopoMap")}
              >
                OpenTopoMap
              </button>
            </li>
          </ul>
        </li>
        

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            style={{ color: "yellow", padding: "1px", margin: "1px"}} // Cambia el color a amarillo
          >
            -- Overlays --
          </a>
          <ul className="dropdown-menu">
            <li>
              <label className="dropdown-item">
                <input
                  type="checkbox"
                  value="Cities"
                  checked={overlays.Cities}
                  onChange={toggleOverlay}
                />
                Cities
              </label>
            </li>
            <li className="dropdown-header">Puntos estratégicos a</li>
            <li>
              <label className="dropdown-item">
                <input
                  type="checkbox"
                  value="Parks"
                  checked={overlays.Parks}
                  onChange={toggleOverlay}
                />
                Parks
              </label>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar_2;