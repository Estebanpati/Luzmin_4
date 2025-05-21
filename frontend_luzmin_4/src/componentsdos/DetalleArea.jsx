import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Importación de imágenes
import Dorismineubicacion from '../assets/areas-mineras-imagenes/Dorismine11024-ubicacion.png';
import Dorismine11024area from '../assets/areas-mineras-imagenes/Dorismine11024-2-area.png';
import Cicloorogenicodelprecambrico from '../assets/Geologia-imagenes/Ciclo-orogenico-del-precambrico.png';
import Distritominerosanramon from '../assets/Geologia-imagenes/Distrito-minero-san-ramon.png';
import DISTRITOSMINEROSDELPRECAMBRICOBOLIVIANO from '../assets/Geologia-imagenes/DISTRITOS MINEROS DEL PRECAMBRICO BOLIVIANO.jpg';
import INTERPRETACIONDELCORREDORMETALOGENETICOSANRAMON from '../assets/Geologia-imagenes/INTERPRETACION DEL CORREDOR METALOGENETICO SAN RAMON.png';
import mapaaerogeofisica from '../assets/Geologia-imagenes/mapa-aerogeofisica.png';
import MapaGeologico from '../assets/Geologia-imagenes/MapaGeologico.jpg';
import modelogeologicodanielito from '../assets/Geologia-imagenes/modelo-geologico-danielito.png';

const DetalleArea = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const [zoomedImage, setZoomedImage] = useState(null); // Estado para controlar la imagen ampliada

  // Manejo de clic en imagen
  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  // Cerrar zoom
  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="container mt-5">
      <h1>Detalles del Área Minera</h1>
      <p>Mostrando detalles del área con ID: {id}</p>

      {/* Información del área minera */}
      <div className="row">
        <div className="col-sm-4 p-3 bg-dark text-white">
          <h2 className="text-warning">Potencial del Área Minera</h2>
          <hr />
          <p>
            Calidad, cantidad y tipo de minerales presentes. Reservas comprobadas y certificadas. Viabilidad técnica de extracción.
          </p>
        </div>
        <div className="col-sm-8 p-3 bg-primary text-white">
          {/* Primera fila de imágenes */}
          <div className="row">
            <div className="col-sm-4">
              <img
                src={Dorismineubicacion}
                alt="Dorismine ubicacion"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(Dorismineubicacion)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={Dorismine11024area}
                alt="Dorismine area"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(Dorismine11024area)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={Cicloorogenicodelprecambrico}
                alt="Ciclo-orogenico"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(Cicloorogenicodelprecambrico)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Segunda fila de imágenes */}
          <div className="row mt-3">
            <div className="col-sm-4">
              <img
                src={Distritominerosanramon}
                alt="Distrito minero San Ramón"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(Distritominerosanramon)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={DISTRITOSMINEROSDELPRECAMBRICOBOLIVIANO}
                alt="Distritos mineros del Precámbrico Boliviano"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(DISTRITOSMINEROSDELPRECAMBRICOBOLIVIANO)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={INTERPRETACIONDELCORREDORMETALOGENETICOSANRAMON}
                alt="Interpretación del corredor metalogenético San Ramón"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(INTERPRETACIONDELCORREDORMETALOGENETICOSANRAMON)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bloque adicional */}
      <div className="row mt-2">
        <div className="col-sm-12 p-3 bg-primary text-white">
          <div className="row">
            <div className="col-sm-4">
              <img
                src={mapaaerogeofisica}
                alt="Mapa aerogeofísica"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(mapaaerogeofisica)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={MapaGeologico}
                alt="Mapa geológico"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(MapaGeologico)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="col-sm-4">
              <img
                src={modelogeologicodanielito}
                alt="Modelo geológico Danielito"
                className="img-fluid rounded shadow d-block mx-auto w-100"
                onClick={() => handleImageClick(modelogeologicodanielito)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="row mt-2">
        <div className="col-sm-4 p-3 bg-dark text-white">
          <h2 className="text-warning">Factibilidad Económica</h2>
          <hr />
          <p>Costos de operación, proyección de ingresos y retorno de inversión (ROI) esperado.</p>
          <button type="button" className="btn btn-secondary">Factibilidad Económica</button>
        </div>
        <div className="col-sm-4 p-3 bg-primary text-white">
          <h2 className="text-dark">Contexto Legal y Político</h2>
          <hr />
          <p>Marco legal, regalías e impuestos, seguridad jurídica y permisos requeridos.</p>
          <button type="button" className="btn btn-secondary">Descargar Documentos</button>
        </div>
        <div className="col-sm-4 p-3 bg-dark text-white">
          <h2 className="text-warning">Infraestructura y Logística</h2>
          <hr />
          <p>Accesibilidad al área y costos de transporte del mineral al mercado.</p>
          <button type="button" className="btn btn-secondary">Infraestructura</button>
        </div>
      </div>

      {/* Sección final */}
      <div className="row mt-2">
        <div className="col-sm-6 p-3 bg-primary text-white">
          <h2 className="text-dark">Estabilidad Social y Ambiental</h2>
          <hr />
          <p>Impacto ambiental, relación con comunidades y planes de responsabilidad social.</p>
          <button type="button" className="btn btn-secondary">Descargar Documentos PDF</button>
        </div>
        <div className="col-sm-6 p-3 bg-dark text-white">
          <h2 className="text-warning">Fotografías del Lugar</h2>
        </div>
      </div>

      {/* Modal para mostrar la imagen ampliada */}
      {zoomedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1050 }}
          onClick={handleCloseZoom}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '90%', maxWidth: '90%' }}
          />
        </div>
      )}
    </div>
  );
};

export default DetalleArea;
