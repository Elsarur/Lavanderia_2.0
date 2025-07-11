import React, { useState } from 'react';
import { Button, Col, Container, Row, Form, Card, CloseButton } from 'react-bootstrap';
import Contants from './Contants';
import { useNavigate } from 'react-router-dom';

const { services, garments } = Contants;

const CreateOrder = () => {
  const navigate = useNavigate();

  // Prenda por defecto al crear una nueva
  const defaultGarment = {
    type: "Camisa",
    description: "",
    observations: "",
    services: [services[0]], // Primer servicio disponible por defecto
  };

  // Estado inicial de la orden
  const [order, setOrder] = useState({
    client_id: 0,
    user_id: 0,
    state: "recibido",
    total: 0,
    pagado: false,
    garments: [defaultGarment], // Comienza con una prenda
  });

  const [total, setTotal] = useState(0);

  // Calcula el total sumando todos los servicios de todas las prendas
  const calculateTotal = () => {
    let subTotal = 0;
    if (order.garments) {
      for (const garment of order.garments) {
        for (const service of garment.services) {
          subTotal += (service.quantity || 0) * (service.unitPrice || 0);
        }
      }
    }
    setTotal(subTotal);
  };

  // Añade una nueva prenda a la orden
  const addGarment = () => {
    const data = { ...order };
    data.garments.push({ ...defaultGarment });
    setOrder(data);
  };

  // Elimina una prenda de la orden
  const deleteGarment = (indexGarment) => {
    const data = { ...order };
    data.garments = data.garments.filter((_, i) => i !== indexGarment);
    setOrder(data);
  };

  // Añade un servicio a una prenda específica
  const addServiceToGarment = (indexGarment) => {
    const data = { ...order };
    data.garments[indexGarment].services.push({ ...services[0] });
    setOrder(data);
  };

  // Elimina un servicio de una prenda específica
  const deleteServiceToGarment = (indexGarment, indexService) => {
    const data = { ...order };
    data.garments[indexGarment].services = data.garments[indexGarment].services.filter((_, i) => i !== indexService);
    setOrder(data);
  };

  // Maneja cambios en los campos de la prenda
  const onChangeGarment = (key, value, indexGarment) => {
    const data = { ...order };
    data.garments[indexGarment][key] = value;
    setOrder(data);
  };

  // Maneja cambios en el tipo de servicio
  const onChangeService = (target, indexGarment, indexService) => {
    const data = { ...order };
    const newService = services.find(s => s.name === target.value);
    if (newService) {
      data.garments[indexGarment].services[indexService] = { ...newService };
    }
    setOrder(data);
  };

  // Maneja cambios en los campos del servicio (cantidad, precio)
  const onChangeServiceFields = (key, value, indexGarment, indexService) => {
    const data = { ...order };
    const parsedValue = key === 'name' ? value : parseFloat(value);
    data.garments[indexGarment].services[indexService][key] = parsedValue;
    setOrder(data);
  };

  return (
    <Container className='mx-auto mt-5'>
      <Card>
        <Card.Body>
          <Card.Title>Creación de Orden</Card.Title>
          <hr />
          <Row>
            <Col>
              <Button onClick={addGarment}>Agregar Prenda</Button>
            </Col>
          </Row>
          <h2>Prendas:</h2>
          {order.garments.map((garment, i) => (
            <div key={i} id="garment">
              <hr />
              {i > 0 && (
                <div className='text-end m-2'>
                  <Button variant='danger' onClick={() => deleteGarment(i)}>Eliminar prenda</Button>
                </div>
              )}
              <Row>
                <Col>
                  <Form>
                    <h4>#{i + 1}</h4>
                    <Row>
                      <Col>
                        <Form.Group className='mb-3'>
                          <Form.Label>Tipo de prenda:</Form.Label>
                          <Form.Select
                            name='type'
                            value={garment.type}
                            onChange={(e) => onChangeGarment("type", e.target.value, i)}
                          >
                            {garments.map((g, index) => (
                              <option key={index} value={g}>{g}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className='mb-3'>
                          <Form.Label>Descripción:</Form.Label>
                          <Form.Control
                            value={garment.description}
                            name='description'
                            onChange={(e) => onChangeGarment("description", e.target.value, i)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className='mb-3'>
                          <Form.Label>Observaciones:</Form.Label>
                          <Form.Control
                            value={garment.observations}
                            name='observations'
                            onChange={(e) => onChangeGarment("observations", e.target.value, i)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col>
                  <h4>Servicios:</h4>
                  {garment.services.map((service, is) => (
                    <div key={is} id='service' className='mb-3'>
                      {is > 0 && (
                        <div className='text-end m-2'>
                          <CloseButton onClick={() => deleteServiceToGarment(i, is)} />
                        </div>
                      )}
                      <Form.Select
                        name='services'
                        value={service.name}
                        onChange={(e) => onChangeService(e.target, i, is)}
                      >
                        {services.map((s, index) => (
                          <option key={index} value={s.name}>{s.name}</option>
                        ))}
                      </Form.Select>
                      <Row className='mt-2'>
                        <Col>
                          <p>Cantidad:</p>
                          <Form.Control
                            name="quantity"
                            type='number'
                            value={service.quantity || ''}
                            onChange={(e) => onChangeServiceFields("quantity", e.target.value, i, is)}
                          />
                        </Col>
                        <Col>
                          <p>Precio:</p>
                          <Form.Control
                            name="unitPrice"
                            type='number'
                            value={service.unitPrice || ''}
                            onChange={(e) => onChangeServiceFields("unitPrice", e.target.value, i, is)}
                          />
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <Button variant='success' className='mt-2' onClick={() => addServiceToGarment(i)}>Agregar Servicio</Button>
                </Col>
              </Row>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <Button className='me-2' onClick={calculateTotal}>Calcular Total</Button>
          <Button variant='secondary' onClick={() => navigate('/App')}>Resumen</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateOrder;