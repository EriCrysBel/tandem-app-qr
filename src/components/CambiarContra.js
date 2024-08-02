import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { SiSpringsecurity } from "react-icons/si";
import styled from 'styled-components';

function CambiarContra(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Assuming you will provide email input
  const [message, setMessage] = useState("");

  const toggle = () => setModal(!modal);

  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = async () => {
    const response = await fetch('https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/change-password.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });

    const data = await response.json();
    setMessage(data.message);
    if (response.ok) {
      toggle();
    }
  };

  const Contrabutton = styled.button`
    background-color: #5e039780;
    padding: 0.3em;
    width: 100%;
    display: grid;
    grid-template-columns: 50px 200px;
    border-radius: 5px;
    column-gap: 5px;
    justify-content: center;
    align-content: center;
    color: white;
    margin-top: 1em;
    align-items: center;
    &:hover {
      background-color: #5e0397;
    }
  `;

  return (
    <div>
      <Contrabutton onClick={toggle}>
        <SiSpringsecurity fontSize={40}/>
        <p>Cambiar contraseña</p>
      </Contrabutton>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className='justify-content-end'>
          <h3 className='m-1'>Cambiar contraseña</h3>
        </ModalHeader>
        <ModalBody>
          {message && <p>{message}</p>}
          <Form>
            <FormGroup>
              <Input
                id="email"
                name="email"
                placeholder="Escribe tu email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="contraseña"
                name="contraseña"
                placeholder="Escribe tu nueva contraseña"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Cambiar contraseña
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

CambiarContra.propTypes = {
  className: PropTypes.string,
};

export default CambiarContra