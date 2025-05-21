import React from "react";
import mineriaResponsable from '../assets/imagenes-gpt/mineria-responsable.png';
import innovacionTecnologica from '../assets/imagenes-gpt/inovacion-tecnologica.png';
import sostenibilidad from '../assets/imagenes-gpt/Sostenibilidad.png';

const Cuerpo = () => {
  return (
    <div className="container-fluid mt-1 bg-secondary">
      {/* Sección 1: Introducción */}
      <section className="text-center mb-5">
        <h1 className="display-4 text-bg-secondary">MONITOREO DE VARIABLES HIDROLÓGICAS EN EDUCACIÓN SUPERIOR</h1>
        <p className="lead text-bg-secondary">
          Nos dedicamos a impulsar la innovación en la industria minera, con un enfoque en la sostenibilidad y el progreso tecnológico.
        </p>
      </section>

      {/* Sección 2: Imágenes con descripciones */}
      <section className="row text-center mb-5">
        <div className="col-md-4">
          <img src={mineriaResponsable} className="img-fluid rounded mb-3" alt="Minería Responsable" />
          <h4 className="text-info">Minería Responsable</h4>
          <p className="text-muted">
            Nuestros proyectos están diseñados para minimizar el impacto ambiental y maximizar la eficiencia.
          </p>
        </div>
        <div className="col-md-4">
          <img src={innovacionTecnologica} className="img-fluid rounded mb-3" alt="Innovación Tecnológica" />
          <h4 className="text-info">Innovación Tecnológica</h4>
          <p className="text-muted">
            Implementamos las últimas tecnologías para mejorar los procesos de extracción y exploración.
          </p>
        </div>
        <div className="col-md-4">
          <img src={sostenibilidad} className="img-fluid rounded mb-3" alt="Sostenibilidad" />
          <h4 className="text-info">Sostenibilidad</h4>
          <p className="text-muted">
            Nos comprometemos con un desarrollo minero sostenible, con respeto al medio ambiente y las comunidades.
          </p>
        </div>
      </section>

      {/* Sección 3: Beneficios */}
      <section className="text-center bg-light p-5 rounded">
        <h2 className="text-primary mb-4">¿Por qué elegir LUZMIN?</h2>
        <div className="row">
          <div className="col-md-4">
            <i className="bi bi-gear-fill text-primary display-4 mb-3"></i>
            <h5>Procesos Eficientes</h5>
            <p className="text-muted">
              Utilizamos tecnología avanzada para garantizar que nuestros procesos sean los más eficientes del mercado.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-globe text-primary display-4 mb-3"></i>
            <h5>Alcance Global</h5>
            <p className="text-muted">
              Trabajamos a nivel global, con operaciones en varios continentes y clientes en todo el mundo.
            </p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-heart text-primary display-4 mb-3"></i>
            <h5>Compromiso Social</h5>
            <p className="text-muted">
              Estamos comprometidos con el bienestar de las comunidades locales y el medio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 4: Testimonios */}
      <section className="mt-5">
        <h2 className="text-center text-primary mb-4">Testimonios de Clientes</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-info">Juan Pérez</h5>
                <h6 className="card-subtitle mb-2 text-muted">Gerente de Proyectos</h6>
                <p className="card-text">
                  "Trabajar con LUZMIN ha sido una experiencia increíble. Su enfoque en la innovación nos ha permitido mejorar nuestros procesos y aumentar la productividad."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-info">María López</h5>
                <h6 className="card-subtitle mb-2 text-muted">Directora de Exploración</h6>
                <p className="card-text">
                  "Gracias a la tecnología avanzada de LUZMIN, hemos logrado optimizar nuestras operaciones de exploración, lo que nos ha ahorrado tiempo y recursos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cuerpo;
