import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import L from 'leaflet';
import EnvironmentalCharts from './EnvironmentalCharts';
import RadiationGauge from './radiationData';

// Iconos personalizados para los marcadores
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Monitoreo = () => {
  const areasMineras = {
    "Area 1 - Mina Sur": {
      lat: -17.78629,
      lng: -63.18117,
      ph: 6.5,
      contenidoSolidos: 40,
      temperatura: 22,
      humedad: 55,
      caudal: [12, 17, 10, 7, 15, 12, 8],
      turbidez: 20,
      oxigenoDisuelto: 8,
      metalesPesados: 0.15,
      materialParticulado: 45,
      ruido: 70,
      radiacion: 0.05,
    },
    "Area 2 - Mina Norte": {
      lat: -16.50233,
      lng: -68.12357,
      ph: 7.2,
      contenidoSolidos: 32,
      temperatura: 19,
      humedad: 60,
      caudal: [8, 15, 14, 11, 13, 9, 12],
      turbidez: 25,
      oxigenoDisuelto: 6,
      metalesPesados: 0.10,
      materialParticulado: 50,
      ruido: 68,
      radiacion: 0.03,
    },
    "Area 3 - Mina Oeste": {
      lat: -19.01958,
      lng: -65.26196,
      ph: 7.8,
      contenidoSolidos: 25,
      temperatura: 24,
      humedad: 65,
      caudal: [10, 18, 13, 9, 16, 11, 14],
      turbidez: 15,
      oxigenoDisuelto: 7,
      metalesPesados: 0.12,
      materialParticulado: 60,
      ruido: 72,
      radiacion: 0.07,
    },
  };

  const [selectedArea, setSelectedArea] = useState("Area 1 - Mina Sur");
  const [datos, setDatos] = useState(areasMineras["Area 1 - Mina Sur"]);

  const handleChangeArea = (event) => {
    const areaSeleccionada = event.target.value;
    setSelectedArea(areaSeleccionada);
    setDatos(areasMineras[areaSeleccionada]);
  };

  const caudalChartData = {
    labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    datasets: [
      {
        label: `Caudal del Río (m³/s) - ${selectedArea}`,
        backgroundColor: 'rgba(56, 103, 214, 0.6)',
        borderColor: 'rgba(56, 103, 214, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(56, 103, 214, 0.8)',
        hoverBorderColor: 'rgba(56, 103, 214, 1)',
        data: datos.caudal,
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Dashboard de Monitoreo Ambiental</h1>
      <p className="lead text-center">Monitoreo en tiempo real de los parámetros ambientales en áreas mineras.</p>

      {/* Dropdown de selección */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <label htmlFor="areaMineraSelect" className="form-label">
            Selecciona un área minera:
          </label>
          <select
            className="form-select form-select-lg shadow-sm"
            id="areaMineraSelect"
            onChange={handleChangeArea}
            value={selectedArea}
          >
            {Object.keys(areasMineras).map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Rejilla de contenido */}
      <div className="row">
        {/* Mapa */}
        <div className="col-sm-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">Mapa de Áreas Mineras</h5>
              <MapContainer
                center={[-17.78629, -63.18117]}
                zoom={6}
                style={{ height: '300px', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {Object.entries(areasMineras).map(([area, data]) => (
                  <Marker
                    key={area}
                    position={[data.lat, data.lng]}
                    icon={customIcon}
                  >
                    <Popup>
                      <strong>{area}</strong>
                      <br />
                      PH: {data.ph}
                      <br />
                      Temperatura: {data.temperatura}°C
                      <br />
                      Humedad: {data.humedad}%
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="col-sm-8">
          <div className="row">
            {[
              { title: 'Nivel de pH', value: datos.ph, unit: '', color: 'success' },
              { title: 'Contenido de Sólidos (%)', value: datos.contenidoSolidos, unit: '%', color: 'info' },
              { title: 'Temperatura (°C)', value: datos.temperatura, unit: '°C', color: 'warning' },
              { title: 'Humedad (%)', value: datos.humedad, unit: '%', color: 'primary' },
            ].map((indicator, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className={`card text-center shadow-sm border-${indicator.color}`}>
                  <div className="card-body">
                    <h5 className="card-title">{indicator.title}</h5>
                    <p className={`display-5 text-${indicator.color}`}>{indicator.value}{indicator.unit}</p>
                    <small className="text-muted">Actualizado en tiempo real</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* Gráfica de De Esteban con puro codigo */}
      <div className="row m-1">
    <div className="col-sm-4 p-1 bg-danger text-white">
        <RadiationGauge/>
    </div>
    <div className="col-sm-8 p-1 bg-dark text-white">
        <EnvironmentalCharts/>
    </div>
  </div>








      {/* Gráfica de caudal */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-lg mb-4">
            <div className="card-body">
              <h5 className="card-title text-center">Gráfica de Caudal del Río</h5>
              <div style={{ height: '300px' }}>
                <Bar data={caudalChartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 p-3 bg-dark text-white">
            <RadiationGauge/>
        </div>
        <div class="col-sm-4 p-3 bg-primary text-white">
            <EnvironmentalCharts/>

        </div>
        <div class="col-sm-4 p-3 bg-dark text-white">
        <div className="row">
        <div className="col-12">
          <div className="card shadow-lg mb-4">
            <div className="card-body">
              <h5 className="card-title text-center">Gráfica de Caudal del Río</h5>
              <div style={{ height: '300px' }}>
                <Bar data={caudalChartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>






    </div>
  );
};

export default Monitoreo;