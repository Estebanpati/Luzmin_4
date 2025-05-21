import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SubirAreasMineras = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes integrar Firebase u otra API para guardar los datos del área minera
  };

  const LocationMarker = () => {
    const [position, setPosition] = React.useState(null);

    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position ? (
      <Marker position={position}>
        <p>Latitud: {position.lat}, Longitud: {position.lng}</p>
      </Marker>
    ) : null;
  };

  return (
    <div className="container mt-3" style={{ backgroundColor: '#121212', color: '#ffffff' }}>
      <h1 className="text-center mb-4">Subir Nueva Área Minera</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="shadow p-4 rounded">
        <Row>
          {/* Columna 1: Formulario */}
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Área Minera</Form.Label>
              <Form.Control 
                type="text" 
                {...register("nombreArea", { required: true })} 
                placeholder="Ej. Mina Cerro Rico" 
              />
            </Form.Group>

            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Código del Área Minera</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register("codigoArea", { required: true })} 
                    placeholder="Ej. 12345" 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Municipio</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register("municipio", { required: true })} 
                    placeholder="Ej. Municipio X" 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tipo de Sociedad</Form.Label>
                  <Form.Select {...register("tipoSociedad", { required: true })}>
                    <option>Cooperativa</option>
                    <option>Unipersonal</option>
                    <option>SRL</option>
                    <option>Sociedad Anonima</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Avance del Trámite</Form.Label>
                  <Form.Select {...register("avanceTramite", { required: true })}>
                    <option>Pendiente</option>
                    <option>Culminado</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Select {...register("departamento", { required: true })}>
                    <option>La Paz</option>
                    <option>Oruro</option>
                    <option>Potosí</option>
                    <option>Tarija</option>
                    <option>Pando</option>
                    <option>Beni</option>
                    <option>Cochabamba</option>
                    <option>Chuquisaca</option>
                    <option>Santa Cruz</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register("provincia", { required: true })} 
                    placeholder="Ej. Provincia Y" 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tipo de Trámite</Form.Label>
                  <Form.Select {...register("tipoTramite", { required: true })}>
                    <option>CAM</option>
                    <option>LPE</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Cantidad de Cuadrículas</Form.Label>
                  <Form.Control 
                    type="number" 
                    {...register("cantidadCuadriculas", { required: true })} 
                    placeholder="Ej. 10" 
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          {/* Columna 2: Imágenes, mapa y archivos */}
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Imágenes del Lugar Minero</Form.Label>
              <Form.Control 
                type="file" 
                multiple 
                {...register("imagenesMinero")} 
              />
            </Form.Group>

            <div className="mb-3">
              <Form.Label>Ubicación del Área Minera (Latitud y Longitud)</Form.Label>
              <MapContainer 
                center={[-16.5, -68.15]} 
                zoom={6} 
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <LocationMarker />
              </MapContainer>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Subir Archivos PDF</Form.Label>
              <Form.Control 
                type="file" 
                multiple 
                accept=".pdf" 
                {...register("archivosPDF")} 
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3 w-30">
          Subir Área Minera
        </Button>
      </Form>
    </div>
  );
};

export default SubirAreasMineras;
