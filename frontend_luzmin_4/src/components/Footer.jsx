import React from "react";
import logo from '../assets/imagenes-gpt/Luzmin-Logo.webp'; // Importamos el logo

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-1">
      <div className="container p-4">
        <div className="row">
          {/* Columna 1: Información de la empresa */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Nuestra Empresa</h5>
            <img 
              src={logo} 
              alt="LUZMIN Logo" 
              className="img-fluid mb-3" 
              style={{ maxWidth: "150px" }} 
            />
          </div>

          {/* Columna 2: Links útiles */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">Política de privacidad</a>
              </li>
              <li>
                <a href="#" className="text-white">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#" className="text-white">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#" className="text-white">Contáctanos</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Mapa del sitio */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Mapa del Sitio</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">Inicio</a>
              </li>
              <li>
                <a href="#" className="text-white">Nosotros</a>
              </li>
              <li>
                <a href="#" className="text-white">Servicios</a>
              </li>
              <li>
                <a href="#" className="text-white">Cartera de Proyectos</a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Información de contacto */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contáctanos</h5>
            <p><i className="bi bi-envelope"></i> contacto@tuempresa.com</p>
            <p><i className="bi bi-phone"></i> +123 456 7890</p>
            <p><i className="bi bi-geo-alt"></i> Dirección Calle 123, Ciudad</p>
          </div>

          {/* Columna 5: Redes Sociales */}
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Síguenos</h5>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-white me-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://whatsapp.com" className="text-white">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-secondary">
        © 2024 Derechos Reservados: 
        <a className="text-white ms-1" href="https://tuempresa.com/">
          tuempresa.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
