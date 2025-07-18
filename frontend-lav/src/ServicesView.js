import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

function ServicesView() {
  const [newService, setNewService] = useState("");

  const [services, setServices] = useState([
    "Lavado", "Planchado", "Tintorería", "Especial"
  ]);

  const addService = () => {
    if (!newService) return;
    const data = [...services, newService];
    setServices(data);
    setNewService("");
  };

  const deleteService = (index) => {
    const data = services.filter((_, i) => i !== index);
    setServices(data);
  };

  const editService = (index) => {
    const nuevoValor = prompt("Editar servicio:", services[index]);
    if (nuevoValor !== null && nuevoValor !== "") {
      const data = [...services];
      data[index] = nuevoValor;
      setServices(data);
    }
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow w-100" style={{ maxWidth: "700px" }}>
        <Card.Body>
          <Card.Title className="text-center fs-2 mb-4">🧼 Registro de Servicios</Card.Title>

          <Form className="d-flex flex-column gap-3 mb-4">
            <Form.Control
              placeholder="Nuevo servicio"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
            />
            <Button variant="outline-primary" className="w-100" onClick={addService}>
              ➕ Agregar
            </Button>
          </Form>

          <hr className="mb-4" />

          <Row xs={1} className="g-3">
            {services.map((service, index) => (
              <Col key={index}>
                <Card className="p-3 border-0 shadow-sm">
                  <h5 className="text-center mb-3">{service}</h5>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-success"
                      className="w-50 me-2"
                      onClick={() => editService(index)}
                    >
                      ✍️ Editar
                    </Button>
                    <Button
                      variant="danger"
                      className="w-50"
                      onClick={() => deleteService(index)}
                    >
                      ❌ Eliminar
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ServicesView;
