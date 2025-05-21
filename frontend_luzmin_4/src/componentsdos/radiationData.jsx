// Componente React: Reloj de Radiación Solar
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RadiationGauge.css';

// JSON de datos simulados
const radiationData = {
  "location": "Zona Minera A",
  "unit": "W/m²",
  "radiationLevels": [
    100, 200, 400, 600, 800, 1000, 1200, 1400
  ]
};

const RadiationGauge = () => {
  const [currentRadiation, setCurrentRadiation] = useState(0);

  useEffect(() => {
    // Simula cambios de radiación cada 2 segundos
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * radiationData.radiationLevels.length);
      setCurrentRadiation(radiationData.radiationLevels[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center mt-5">
      <h3>Medidor de Radiación Solar</h3>
      <div className="radiation-gauge-container">
        <div className="radiation-gauge">
          <div
            className="radiation-needle"
            style={{ transform: `rotate(${(currentRadiation / 1400) * 180 - 90}deg)` }}
          ></div>
        </div>
        <div className="radiation-value">
          <span>{currentRadiation}</span> {radiationData.unit}
        </div>
      </div>
      <h4>Ubicación: {radiationData.location}</h4>
    </div>
  );
};

export default RadiationGauge;
