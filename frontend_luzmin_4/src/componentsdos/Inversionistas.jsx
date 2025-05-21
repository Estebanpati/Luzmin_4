import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// Simulación de áreas mineras disponibles
const areasMineras = [
  { 
    id: 1, 
    nombre: 'Mina Cerro Rico', 
    ubicacion: 'Potosí', 
    descripcion: 'Área rica en plata y zinc.', 
    estado: 'Disponible', 
    latLng: [-19.5836, -65.7531],
    datosTecnicos: 'Potencialidad: Plata (40%), Zinc (30%), Plomo (20%), Otros (10%)'
  },
  { 
    id: 2, 
    nombre: 'Mina Colquiri', 
    ubicacion: 'La Paz', 
    descripcion: 'Zona con potencial de estaño y wolframio.', 
    estado: 'En Estudio', 
    latLng: [-16.3448, -67.9001],
    datosTecnicos: 'Potencialidad: Estaño (50%), Wolframio (35%), Otros (15%)'
  },
  { 
    id: 3, 
    nombre: 'Mina Oro Verde', 
    ubicacion: 'Santa Cruz', 
    descripcion: 'Oro de alta pureza disponible para explotación.', 
    estado: 'Disponible', 
    latLng: [-17.7977, -63.1976],
    datosTecnicos: 'Potencialidad: Oro (70%), Plata (20%), Otros (10%)'
  },
  // Datos adicionales generados aleatoriamente
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 4,
    nombre: `Mina Aleatoria ${i + 1}`,
    ubicacion: `Ubicación Aleatoria ${i + 1}`,
    descripcion: `Descripción de la mina aleatoria ${i + 1}.`,
    estado: i % 2 === 0 ? 'Disponible' : 'En Estudio',
    latLng: [
      -17.5 + Math.random() * 10 - 5, 
      -65.0 + Math.random() * 10 - 5
    ],
    datosTecnicos: `Potencialidad: Mineral ${i + 1} (50%), Otros (50%)`
  }))
];

const Inversionistas = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-1 text-light bg-dark" style={{ minHeight: '100vh' }}>
      <h1 className="text-center mb-4">Áreas Mineras Disponibles para Inversión</h1>
      
      {/* Visualización del Mapa */}
      <div className="row mb-3">
        <div className="col-12">
          <h4 className="text-center mb-3">Mapa de Áreas Mineras</h4>
          <MapContainer 
            center={[-17.7833, -63.1821]} 
            zoom={5} 
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {areasMineras.map((area) => (
              <Marker key={area.id} position={area.latLng}>
                <Popup>
                  <h5>{area.nombre}</h5>
                  <p><strong>Ubicación:</strong> {area.ubicacion}</p>
                  <p><strong>Estado:</strong> {area.estado}</p>
                  <p><strong>Potencialidad Minerológica:</strong></p>
                  <p>{area.datosTecnicos}</p>
                  <Button 
                    variant="primary" 
                    onClick={() => navigate(`/detalle-area/${area.id}`)}
                  >
                    Ver Más Detalles
                  </Button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Lista de áreas mineras */}
      <div className="row">
        {areasMineras.map((area) => (
          <div className="col-md-4 mb-4" key={area.id}>
            <Card className="h-100 shadow-sm bg-secondary text-light">
              <Card.Body>
                <Card.Title>{area.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{area.ubicacion}</Card.Subtitle>
                <Card.Text>{area.descripcion}</Card.Text>
                <p><strong>Estado: </strong>{area.estado}</p>
                <Button 
                  variant="primary" 
                  onClick={() => navigate(`/detalle-area/${area.id}`)}
                >
                  Más Información
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inversionistas;
