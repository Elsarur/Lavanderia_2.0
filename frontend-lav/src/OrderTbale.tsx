import React from "react";
import {Container, Card, Row, Col} from 'react-bootstrap'

export const Dashboard = () => {
    return(
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Lavanderia</Card.Title>
                    <Row>
                        <Col>Numero Prendas</Col>
                        <Col>Numero Servicios</Col>
                        <Col>Numero Clientes</Col>
                        <Col>Numero Usuarios</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Listado de Ordenes</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Ordenes Pendientes</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Container>
    )
}