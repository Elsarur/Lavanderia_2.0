import React, { useState } from "react";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

function GarmentsView() {
  const defaultGarment = "Camisa";
  const [newGarment, setNewGarment] = useState("");
  const [garments, setGarments] = useState(["Camisa", "Pantalón", "Blusa"]);

  const addGarment = () => {
    if (!newGarment) return;
    const data = [...garments, newGarment];
    setGarments(data);
    setNewGarment("");
  };

  const deleteGarment = (index) => {
    const data = garments.filter((_, i) => i !== index);
    setGarments(data);
  };

  const editGarment = (index) => {
    const nuevoValor = prompt("Editar prenda:", garments[index]);
    if (nuevoValor !== null && nuevoValor !== "") {
      const data = [...garments];
      data[index] = nuevoValor;
      setGarments(data);
    }
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow w-100" style={{ maxWidth: "700px" }}>
        <Card.Body>
          <Card.Title className="text-center fs-2 mb-4">👗 Registro de Prendas</Card.Title>

          <Form className="d-flex flex-column gap-3 mb-4">
            <Form.Control
              placeholder="Nueva prenda"
              value={newGarment}
              onChange={(e) => setNewGarment(e.target.value)}
            />
            <Button variant="outline-primary" className="w-100" onClick={addGarment}>
              ➕ Agregar
            </Button>
          </Form>

          <hr className="mb-4" />

          <Row xs={1} className="g-3">
            {garments.map((garment, index) => (
              <Col key={index}>
                <Card className="p-3 border-0 shadow-sm">
                  <h5 className="text-center mb-3">{garment}</h5>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-success"
                      className="w-50 me-2"
                      onClick={() => editGarment(index)}
                    >
                      ✍️ Editar
                    </Button>
                    <Button
                      variant="danger"
                      className="w-50"
                      onClick={() => deleteGarment(index)}
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

export default GarmentsView;
