import { Button, Card, Container, Table, InputGroup, Form, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'


function FullClientModuleView() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClient();
    }, []);

    const getClient = () => {
        //Peticion a DB
        const client = [
            {
                
                name: "Sarur",
                phone_number: "1234567890",
                address:"Haciendas"

            },
            {
                
                name: "Hector",
                phone_number: "0987654321",
                address:"ITA"
            },
        ];
        setClients(client);
    }


  return (
    <>
      <Container>
        <Card className="mt-4">
          <Card.Body>
            <Card.Title className="mb-4 text-center">Lista de Clientes</Card.Title>

            <InputGroup className="mb-4">
              <Form.Control
                placeholder=" Buscaro" />
              <Button > Buscar</Button>
            </InputGroup>

            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th> Teléfono</th>
                  <th>Dirección</th>
                </tr>
              </thead>
              <tbody>
                    {
                        clients?.map((client) => (
                            <tr>
                                
                                <td>{client.name}</td>
                                <td>{client.phone_number}</td>
                                <td>{client.address}</td>
                                <td>
                                    <Row className='text-center'>
                                        <Col>
                                            <Button> Editar </Button>
                                        </Col>
                                        <Col>
                                            <Button  > Eliminar </Button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>

                    </tr>
                </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default FullClientModuleView;