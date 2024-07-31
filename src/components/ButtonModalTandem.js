import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import CarruselButtonTandem from './CarruselButtonTandem';
import './CarruselButton.css'
function ButtonModalTandem(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle} size='lg'>
        <p className='h2'>Usos de la aplicación</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} className='itemcarrusel'>
        <ModalHeader toggle={toggle} className='carruseltext itemcarrusel'><p>Usos de la aplicación</p></ModalHeader>
        <ModalBody className='itemcarrusel'>
          <CarruselButtonTandem/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ButtonModalTandem;