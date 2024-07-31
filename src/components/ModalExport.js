import React, { useState } from 'react';
import { Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from 'reactstrap';
import PropTypes from 'prop-types';
import download from "downloadjs";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { LuArrowDownToLine } from "react-icons/lu";

function ModalExport({ className, qrRef }) {
  const [modal, setModal] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('png');
  const [descargado, setDescargado] = useState(false)

  const toggle = () => setModal(!modal);

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleDownload = async () => {
    if (qrRef.current) {
      let dataUrl;
      if (selectedFormat === 'png') {
        dataUrl = await toPng(qrRef.current); 
        // console.log('se ha descargado')
        setDescargado(true)
        
      } else if (selectedFormat === 'jpeg') {
        dataUrl = await toJpeg(qrRef.current);
      } else if (selectedFormat === 'svg') {
        dataUrl = await toSvg(qrRef.current);
      }
      download(dataUrl, `qr-code.${selectedFormat}`);
    }
    toggle(); // Close the modal after download
  };
  let mensaje=""
  if(descargado){
    mensaje = 'Se ha descargado el QR'
    // `<div className="alert alert-success" role="alert">
    //   Se ha descargado correctamente
    //   </div>`
  }
  
  return (
    <div>
      <Button color="success" className="guardarqr" onClick={toggle}>
      <LuArrowDownToLine size={30}/>
        <p>DESCARGAR</p>
      </Button>
      
      {mensaje}
      
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>Exportar</ModalHeader>
        <ModalBody>
          <p>Selecciona el formato para descargar el QR</p>
          <div className="radio-group">
            <label className='form-check-label'>
              <input className='form-check-input'
                type="radio"
                value="png"
                checked={selectedFormat === 'png'}
                onChange={handleFormatChange}
              />
              PNG
            </label>
            <label className='form-check-label'>
              <input className='form-check-input'
                type="radio"
                value="jpeg"
                checked={selectedFormat === 'jpeg'}
                onChange={handleFormatChange}
              />
              JPEG
            </label>
            <label className='form-check-label'>
              <input className='form-check-input'
                type="radio"
                value="svg"
                checked={selectedFormat === 'svg'}
                onChange={handleFormatChange}
              />
              SVG
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDownload}>
            Exportar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalExport.propTypes = {
  className: PropTypes.string,
  qrRef: PropTypes.object.isRequired,
};

export default ModalExport