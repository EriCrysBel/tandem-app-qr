import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { PiUserSwitchDuotone } from "react-icons/pi";

const ChangeRoleUser = ({ className, initialEmail, onRoleChanged }) => {
  const [email, setEmail] = useState(initialEmail);
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/change-role.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud');
      }

      setMessage(data.message);
      onRoleChanged(); // Llamar a la función callback después de cambiar el rol
      toggle(); // Cerrar el modal
    } catch (error) {
      setMessage(error.message || 'Error al cambiar el rol.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <a onClick={toggle}><PiUserSwitchDuotone className="social-link" fontSize={40} /></a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={<button className="close" onClick={toggle} type="button">&times;</button>} className='justify-content-end'>
          <h3 className='m-1'>Cambiar el rol</h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Label for="email"><h6>Correo del empleado:</h6></Label>
              <p>{email}</p>
              {/* <Input
                type="text"
                placeholder="Escribe el email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /> */}
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Rol</legend>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Admin
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="role"
                    value="employee"
                    checked={role === 'employee'}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Employee
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="role"
                    value="guest"
                    checked={role === 'guest'}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Guest
                </Label>
              </FormGroup>
            </FormGroup>
            <ModalFooter>
              <Button color="primary" type="submit" disabled={loading}>
                {loading ? 'Subiendo...' : 'Actualizar rol'}
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

export default ChangeRoleUser