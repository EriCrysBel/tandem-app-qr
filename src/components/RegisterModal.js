import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { FaUserPlus } from "react-icons/fa";

function RegisterModal({ className, buttonText }) {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setError('');
    setSuccess('');
  };

  const [nombre, setNombre] = useState('');
  const [delegacion, setDelegacion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    if (!nombre || !email || !delegacion || !password) {
      setError('Por favor, complete todos los campos obligatorios.');
      return;
    }

    console.log(nombre, delegacion, email, password);
    try {
      const response = await fetch('https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/register-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          delegacion: delegacion,
          email: email,
          password: password
        })
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error en la solicitud: ${response.status} ${text}`);
      }
      const data = await response.json();
      console.log(data);
      setSuccess('Registro exitoso. Bienvenido!');
      setError('');
      setNombre('');
      setDelegacion('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error registrando usuario:', error);
      setError('Hubo un error al registrar el usuario. Por favor, intente de nuevo más tarde.');
      setSuccess('');
    }
  };

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Button color="success" onClick={toggle}>
        <p><FaUserPlus size={30}/> {buttonText}</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className='justify-content-end'>
          <h3 className='m-1'>Registro de nuevos usuarios</h3>
        </ModalHeader>
        <ModalBody>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}
          <Form>
            <FormGroup floating>
              <Input
                id="nombreregister"
                name="nombreregister"
                placeholder="Escribe tu nombre y apellidos"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Label for="nombreregister">
                Escribe tu nombre y apellidos
              </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
              <Input
                id="emailregister"
                name="emailregister"
                placeholder="Escribe tu correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="emailregister">
                Escribe tu correo electrónico
              </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
              <Input
                id="passwordregister"
                name="passwordregister"
                placeholder="Escribe tu contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for="passwordregister">
                Escribe tu contraseña
              </Label>
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="delegacionregister">
                Selecciona tu delegación
              </Label>
              <Input
                id="delegacionregister"
                name="delegacionregister"
                type="select"
                value={delegacion}
                onChange={(e) => setDelegacion(e.target.value)}
              >
                <option value="">Selecciona una delegación</option>
                <option value="Aranjuez">Aranjuez</option>
                <option value="El Escorial">El Escorial</option>
                <option value="La Granja San Ildefonso">La Granja San Ildefonso</option>
                <option value="Mallorca">Mallorca</option>
                <option value="Moncloa">Moncloa</option>
              </Input>
            </FormGroup>
            {' '}
            <Button color="primary" onClick={handleRegister}>
              Registrar
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

RegisterModal.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default RegisterModal