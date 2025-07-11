import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

function GarmentView() {
  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow w-100" style={{ maxWidth: "700px" }}>
        <Card.Body>
          <Card.Title className="text-center fs-2 mb-4">👗 Registro de Prendas</Card.Title>

          <Form className="d-flex flex-column gap-3 mb-4">
            <Form.Control
              placeholder="Nueva prenda"
              disabled
            />
            <Button variant="outline-primary" className="w-100">
              ➕ Agregar
            </Button>
          </Form>

          <hr className="mb-4" />

          <Row xs={1} className="g-3">
            {["Camisa", "Pantalón", "Blusa", "Vestido"].map((garment, index) => (
              <Col key={index}>
                <Card className="p-3 border-0 shadow-sm">
                  <h5 className="text-center mb-3">{garment}</h5>
                  <div className="d-flex justify-content-between">
                    <Button variant="outline-success" className="w-50 me-2">
                      ✍️ Editar
                    </Button>
                    <Button variant="danger" className="w-50">
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

export default GarmentView;
