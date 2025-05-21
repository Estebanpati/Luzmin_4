// Componente React: Gráficos de Monitoreo Ambiental
import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EnvironmentalCharts.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Datos simulados para monitoreo ambiental
const environmentalData = {
  ownership: {
    labels: ['Ejidal', 'Privada'],
    datasets: [
      {
        data: [73.5, 26.5],
        backgroundColor: ['#4caf50', '#ffca28'],
        hoverBackgroundColor: ['#388e3c', '#ffa000'],
      },
    ],
  },
  compliance: {
    labels: ['No', 'Sí'],
    datasets: [
      {
        data: [99.1, 0.9],
        backgroundColor: ['#f44336', '#4caf50'],
        hoverBackgroundColor: ['#d32f2f', '#388e3c'],
      },
    ],
  },
  airQuality: {
    labels: ['Buena', 'Regular', 'Mala'],
    datasets: [
      {
        data: [48.7, 13.7, 37.6],
        backgroundColor: ['#4caf50', '#ffca28', '#f44336'],
        hoverBackgroundColor: ['#388e3c', '#ffa000', '#d32f2f'],
      },
    ],
  },
};

const EnvironmentalCharts = () => {
  return (
    <div className="containeru mt-5 text-center">
      <h2>Gráficos de Monitoreo Ambiental</h2>
      <div className="row mt-4">
        {/* Gráfico de Propiedad */}
        <div className="col-md-4 mb-4">
          <h5>Propiedad</h5>
          <Pie data={environmentalData.ownership} options={{ responsive: true }} />
        </div>

        {/* Gráfico de Cumplimiento */}
        <div className="col-md-4 mb-4">
          <h5>Cumplimiento</h5>
          <Doughnut data={environmentalData.compliance} options={{ responsive: true }} />
        </div>

        {/* Gráfico de Calidad del Aire */}
        <div className="col-md-4 mb-4">
          <h5>Calidad del Aire</h5>
          <Pie data={environmentalData.airQuality} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalCharts;
