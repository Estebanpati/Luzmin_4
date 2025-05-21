import React from 'react';
import visionImage from '../assets/imagenes-gpt/vision.jpg'; // Imagen representando la visión
import misionImagee from '../assets/imagenes-gpt/mision.jpg'; // Imagen representando la misión
import equipoImage from '../assets/imagenes-gpt/equipo.jpg'; // Imagen representando al equipo

const Nosotros = () => {
  return (
    <div className="container mt-5 text-bg-light ">
      {/* Título principal */}
      <h1 className="text-center mb-4">Sobre Nosotros</h1>
      <p className="lead text-center">Conozca más sobre nuestra empresa, nuestros valores y nuestro equipo.</p>

      {/* Sección de la misión */}
      <div className="row align-items-center mt-5">
        <div className="col-md-6">
          
          <img src={misionImagee} alt="Nuestra misión" className="img-fluid rounded shadow d-block mx-auto w-75" />

        </div>
        <div className="col-md-6">
          <h2>Misión</h2>
          <p>
            Nuestra misión es ser líderes en el sector minero, ofreciendo soluciones innovadoras que promuevan el desarrollo 
            económico y social. Nos comprometemos con la sostenibilidad y el bienestar de nuestras comunidades.
          </p>
        </div>
      </div>

      {/* Sección de la visión */}
      <div className="row align-items-center mt-5">
        <div className="col-md-6 order-md-2">
          <img src={visionImage} alt="Nuestra visión" className="img-fluid rounded shadow d-block mx-auto w-75" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>Visión</h2>
          <p>
            Nuestra visión es transformar la minería, impulsando una industria moderna y responsable con el medio ambiente,
            basada en la innovación tecnológica y la excelencia operativa.
          </p>
        </div>
      </div>

      {/* Sección de valores */}
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center">Nuestros Valores</h2>
          <p className="text-center">
            En Luzmin, nos guiamos por los valores de integridad, innovación, sostenibilidad y compromiso social.
            Creemos firmemente en la minería responsable y en el poder de la tecnología para mejorar nuestras operaciones
            y cuidar del planeta.
          </p>
        </div>
      </div>

      {/* Sección del equipo */}
      <div className="row align-items-center mt-5">
        <div className="col-md-6">
          <img src={equipoImage} alt="Nuestro equipo" className="img-fluid rounded shadow d-block mx-auto w-75" />
        </div>
        <div className="col-md-6">
          <h2>Nuestro Equipo</h2>
          <p>
            Contamos con un equipo multidisciplinario de expertos en minería, tecnología y desarrollo sostenible,
            todos ellos comprometidos con el éxito de nuestros proyectos y el bienestar de las comunidades en las que operamos.
          </p>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="row mt-5">
        <div className="col text-center">
          <h3>Contáctanos</h3>
          <p>¿Quieres saber más? Escríbenos y estaremos encantados de atenderte.</p>
          <a href="/contactenos" className="btn btn-primary">Contáctenos</a>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
