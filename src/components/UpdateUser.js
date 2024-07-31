import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { TbUserEdit } from "react-icons/tb";

const UpdateUser = ({ className, initialNombre, initialEmail, initialDelegacion, onUserUpdated }) => {
  const [nombre, setNombre] = useState(initialNombre);
  const [email, setEmail] = useState(initialEmail);
  const [delegacion, setDelegacion] = useState(initialDelegacion);
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost/gatsby-qr/v1/update-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, delegacion }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud');
      }

      setMessage(data.message);
      onUserUpdated(); // Llamar a la función callback después de la actualización
      toggle(); // Cerrar el modal
    } catch (error) {
      setMessage(error.message || 'Error al actualizar los datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <a onClick={toggle}><TbUserEdit fontSize={40} className="social-link"/></a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={<button className="close" onClick={toggle} type="button">&times;</button>} className='justify-content-end'>
          <h3 className='m-1'>Cambiar datos</h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email"><h6>Este perfil corresponde al empleado: {nombre}</h6></Label>
              <p><h6>Correo: {email}</h6></p>
              {/* <Input
                type="email"
                id="email"
                name="email"
                placeholder="Escribe el email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /> */}
            </FormGroup>
            <FormGroup>
              <Label for="nombre">Escribe el nombre</Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escribe el nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="delegacion">Elige la delegación</Label>
              <Input
                type="select"
                id="delegacion"
                name="delegacion"
                value={delegacion}
                onChange={(e) => setDelegacion(e.target.value)}
                required
              >
                <option value={initialDelegacion}>{initialDelegacion}</option>
                <option value="Aranjuez">Aranjuez</option>
                <option value="El Escorial">El Escorial</option>
                <option value="La Granja San Ildefonso">La Granja San Ildefonso</option>
                <option value="Mallorca">Mallorca</option>
                <option value="Moncloa">Moncloa</option>
              </Input>
            </FormGroup>
            <ModalFooter>
              <Button color="primary" type="submit" disabled={loading}>
                {loading ? 'Subiendo...' : 'Actualizar datos'}
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Form>
          {message && <p>{message}</p>}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UpdateUser;