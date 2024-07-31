import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { SiSpringsecurity } from "react-icons/si";
import styled from 'styled-components';

function CambiarContra(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  
  );
  
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
  &:hover{
  background-color: #5e0397;
  }`
  return (
    <div>
      <Contrabutton onClick={toggle}>
        <SiSpringsecurity fontSize={40}/>
        <p>Cambiar contraseña</p>
      </Contrabutton>
      <Modal isOpen={modal} toggle={toggle} className={className} >
      <ModalHeader toggle={toggle} close={closeBtn}className='justify-content-end'>
          <h3 className='m-1'>Cambiar contraseña</h3>
        </ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup>
            <Input
              id="contraseña"
              name="contraseña"
              placeholder="Escribe tu nueva contraseña"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="confirmarcontraseña"
              name="confirmarcontraseña"
              placeholder="Repite tu nueva contraseña"
              type="text"/>
          </FormGroup>
        
          <FormGroup check>
            <Input type="checkbox" />
            {' '}
            <Label check className='mb-4'>
              Confirmo los cambios
            </Label>
          </FormGroup>

        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
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

export default CambiarContra;