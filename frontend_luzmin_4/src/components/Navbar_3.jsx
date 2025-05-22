import React from "react";
import { Link } from "react-router-dom";

const Navbar_3 = () => {
  return (
    <nav style={{ background: "#333", padding: "1rem" }}>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ marginRight: "1rem" }}>
          <Link to="/" style={{ color: "#00ffcc", textDecoration: "none" }}>Home</Link>
        </li>
        <li style={{ marginRight: "1rem" }}>
          <Link to="/services" style={{ color: "#00ffcc", textDecoration: "none" }}>Services</Link>
        </li>
        <li style={{ marginRight: "1rem" }}>
          <Link to="/projects" style={{ color: "#00ffcc", textDecoration: "none" }}>Monitoreo Satelital</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "#00ffcc", textDecoration: "none" }}>Resultados</Link>
        </li>

        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo"
          style={{ padding: "10px 10px", paddingTop: "10px", margin: "2px", marginTop: "10px" }}
        >
          Open Offcanvas Sidebar
        </button>

      </ul>
    </nav>
  );
};

export default Navbar_3;