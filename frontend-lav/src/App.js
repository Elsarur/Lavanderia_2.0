import { Form, Button, Container, Card } from "react-bootstrap";

export default function Login() {

   return (
    <Container className="justify-content-center align-items-center">
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="text-center">
            Bienvenido a lavanderia!
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label> Email:</Form.Label>
              <Form.Control
                placeholder="Ingresa tu correo electrónico"
        
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Password:</Form.Label>
              <Form.Control
                type="password"/>
            </Form.Group>

            <Button variant="success">
              Ingresar
            </Button> 
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
