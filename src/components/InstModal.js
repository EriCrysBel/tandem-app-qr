import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card,CloseButton } from 'reactstrap';

function InstModal(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="info" onClick={toggle} style={{ marginBottom: '1rem', fontSize:'20px' }}>
        Instrucciones de uso
      </Button>
      <Collapse isOpen={isOpen} {...args}>
      <Card>
      <CardBody>

      <CloseButton onClick={()=>{setIsOpen(false)}}/>
          
      <div style={{
          fontSize:'15px',
          marginTop:'30px',
      }}>
        <p>1 - Ingrese el contenido que desea codificar en el código QR (URL, coordenadas o texto según la selección de pestaña).</p>
        <p>2 - Elija el color y tamaño deseado para el código QR entre las opciones disponibles.</p>
        <p>3 - El código QR generado debe mostrarse junto con sus detalles en el apartado 'QR Creado'.</p>
        <p>4 - Para finalizar puede descargar el Qr generado en el formato de su preferencia</p>
        </div>
        </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default InstModal;