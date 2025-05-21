import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfesionalTecnico = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  // Simulación de áreas mineras para estudios
  const areasEstudio = [
    { id: 1, nombre: 'Mina Cerro Rico', ubicacion: 'Potosí', descripcion: 'Rica en minerales de plata y zinc.', estado: 'Requiere estudio' },
    { id: 2, nombre: 'Mina Colquiri', ubicacion: 'La Paz', descripcion: 'Minerales de estaño y wolframio.', estado: 'Estudio en progreso' },
    { id: 3, nombre: 'Mina San Cristóbal', ubicacion: 'Potosí', descripcion: 'Principal productora de plata y zinc.', estado: 'Operativa' },
    { id: 4, nombre: 'Mina Huanuni', ubicacion: 'Oruro', descripcion: 'Gran depósito de estaño.', estado: 'Estudio completado' },
    { id: 5, nombre: 'Mina Don Mario', ubicacion: 'Santa Cruz', descripcion: 'Minerales de oro y cobre.', estado: 'Producción limitada' },
    { id: 6, nombre: 'Mina Choroma', ubicacion: 'Chuquisaca', descripcion: 'Rica en minerales de cobre y oro.', estado: 'Requiere estudio' },
    { id: 7, nombre: 'Mina Bolívar', ubicacion: 'Oruro', descripcion: 'Plomo, plata y zinc en abundancia.', estado: 'Estudio en progreso' },
    { id: 8, nombre: 'Mina Puquio Norte', ubicacion: 'Pando', descripcion: 'Minerales de oro en depósitos aluviales.', estado: 'Exploración inicial' },
    { id: 9, nombre: 'Mina Siglo XX', ubicacion: 'Potosí', descripcion: 'Histórica mina de estaño.', estado: 'Requiere mantenimiento' }
  ];

  // Función para manejar el clic en el botón
  const handleVerDetalles = (areaId) => {
    navigate(`/detalle-area/${areaId}`); // Redirigir con el ID del área
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Áreas Mineras para Estudios Técnicos</h1>
      <div className="row">
        {areasEstudio.map((area) => (
          <div className="col-md-4 mb-4" key={area.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{area.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{area.ubicacion}</Card.Subtitle>
                <Card.Text>{area.descripcion}</Card.Text>
                <p><strong>Estado: </strong>{area.estado}</p>
                <Button variant="primary" onClick={() => handleVerDetalles(area.id)}>
                  Ver Detalles del Área
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfesionalTecnico;
