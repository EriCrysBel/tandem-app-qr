// React Component: ModalSoporte.js
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

function ModalSoporte({ modal, toggleModal }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSend = async () => {
    const data = { nombre, email, asunto, mensaje };

    try {
      const response = await fetch('http://localhost/gatsby-qr/v1/email-soporte.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      // alert('Error al enviar el correo electrónico');
      console.error('Error:', error);
    }

    toggleModal();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Soporte</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Escribe tu nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="email"
                name="email"
                placeholder="Escribe tu correo"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="asunto">Asunto*</Label>
              <Input
                id="asunto"
                name="asunto"
                type="text"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Mensaje</Label>
              <Input
                id="exampleText"
                name="mensaje"
                type="textarea"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSend}>Enviar mensaje</Button>
          <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalSoporte
