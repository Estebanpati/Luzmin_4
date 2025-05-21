import React from "react";

const Navbar_2 = ({ onBack }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand">Navbar 2</span>

        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                </li>
            </ul>
        </div>
      <button className="btn btn-secondary ms-auto" onClick={onBack}>
        Volver
      </button>
      {/* Aquí puedes agregar el contenido de tu Navbar_2 */}
    </div>

    




  </nav>
);

export default Navbar_2;