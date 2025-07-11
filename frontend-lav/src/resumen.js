import { Button, Card, Container, Table, Row, Col } from 'react-bootstrap';
import './App.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    const [summaries] = useState([
        { 
            garment: 'Camisa', 
            service: 'Lavado',
            total: 22 
        },
    ]);
    
    return (
        <>
            <Container className="justify-content-center align-items-center">
                <Card className="mt-4 border-primary">
                    <Card.Header className="bg-primary text-white">
                        <Card.Title className="mb-0 text-center">📋 Lista de Resumen</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover className="mt-3">
                            <thead className="bg-light">
                                <tr>
                                    <th className="text-center">Prenda</th>
                                    <th className="text-center">Servicio</th>
                                    <th className="text-center">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {summaries?.map((summary, index) => (
                                    <tr key={index}>
                                        <td className="text-center">{summary.garment}</td>
                                        <td className="text-center">{summary.service}</td>
                                        <td className="text-center">${summary.total}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="3">
                                        <div className="d-flex justify-content-between align-items-center p-3">
                                            <h4 className="mb-0 text-primary">Total: ${summaries.reduce((acc, curr) => acc + curr.total, 0)}</h4>
                                            <div>
                                                <Button variant="success" className="me-2">Pagar</Button>
                                                <Button variant="warning" onClick={() => navigate('/hola')}>Agregar otro servicio</Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default App;