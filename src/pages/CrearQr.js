import React, { useState, useRef } from "react";
import Layout from "../components/layout";
import QRCode from "qrcode.react";
import QrComponent from "../components/QrComponent";
import ModalExport from "../components/ModalExport";
import './CrearQr.css';
import TabsQr from "../components/TabsQr";
import Mapa from "../components/Mapa";
import { Button } from "reactstrap";
import { LuSave } from "react-icons/lu";
import { FaRedoAlt } from "react-icons/fa";
import InstModal from "../components/InstModal";
import CodigoQrNuevo from "../components/CodigoQrNuevo";


function CrearQr({ userId }) {
  const [data, setData] = useState('');
  const [description, setDescription] = useState('');
  const [nombre_ref, setNombre_ref] = useState('');
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const [tabValue, setTabValue] = useState('one');
  const [latLng, setLatLng] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const qrRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleColorChange = (color) => {
    setQrColor(color);
  };

  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  const handleLatChange = (e) => {
    const lat = e.target.value;
    setLatitude(lat);
    updateLatLng(lat, longitude);
  };

  const handleLngChange = (e) => {
    const lng = e.target.value;
    setLongitude(lng);
    updateLatLng(latitude, lng);
  };

  const updateLatLng = (lat, lng) => {
    if (lat && lng) {
      const parsedLat = parseFloat(lat);
      const parsedLng = parseFloat(lng);
      if (!isNaN(parsedLat) && !isNaN(parsedLng)) {
        const newLatLng = { lat: parsedLat, lng: parsedLng };
        setLatLng(newLatLng);
        const osmUrl = `https://www.openstreetmap.org/?mlat=${parsedLat}&mlon=${parsedLng}#map=18/${parsedLat}/${parsedLng}`;
        setInputValue(osmUrl);
      }
    }
  };

  const setLatLngFromMap = (latLng) => {
    setLatLng(latLng);
    setLatitude(latLng.lat.toString());
    setLongitude(latLng.lng.toString());
    const osmUrl = `https://www.openstreetmap.org/?mlat=${latLng.lat}&mlon=${latLng.lng}#map=18/${latLng.lat}/${latLng.lng}`;
    setInputValue(osmUrl);
  };

  const getPlaceholder = () => {
    switch (tabValue) {
      case 'one':
        return 'Introduce la URL';
      case 'two':
        return 'Introduce la coordenada (latitud,longitud)';
      case 'three':
        return 'Introduce el texto';
      default:
        return 'Introduce el contenido';
    }
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch('http://localhost/gatsby-qr/v1/create-qr.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data : inputValue,
          nombre_ref,
          description,
          created_by: localStorage.getItem('tandem_id')
        })
      });
      const code = await response.json();
      setMessage(code.message);
    } catch (error) {
      console.error('Error creando código QR', error);
      setMessage('Error creando código QR');
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // El popup desaparece después de 2 segundos
  };

  const containerStyle = {
    padding: "5px",
  };
  const colorOptions = ['black', 'blue', 'red'];

  return (
    <Layout>
      <div className="titulo mt-3">
        <h1>GENERADOR DE QR</h1>
        <InstModal />
      </div>
      <div className="pagina" style={containerStyle}>
        <div className="url">
        <h4 className="grupo1">NOMBRE DEL QR</h4>
        <div className="input-field mt-4">
                  <input
                    type="text"
                    placeholder=""
                    value={nombre_ref}
                    onChange={e => setNombre_ref(e.target.value)}
                    id="nombre_ref"
                    name="nombre_ref"
                  />
                  <label htmlFor="nombre_ref">Escribe el nombre de tu QR</label>
          </div>
          <h4 className="grupo1">DESCRIPCION</h4>
        <div className="input-field mt-4">
                  <input
                    type="text"
                    placeholder=""
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    id="description"
                    name="description"
                  />
                  <label htmlFor="nombre_ref">Escribe una descripcion del contenido  tu QR</label>
          </div>
          <h4 className="grupo1">CONTENIDO DEL QR</h4>
          <TabsQr onTabChange={handleTabChange} />
          <div className="input-container">
            {tabValue === 'two' ? (
              <>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder=" "
                    value={latitude}
                    onChange={handleLatChange}
                    id="latitude"
                    name="latitude"
                  />
                  <label htmlFor="latitude">Latitud</label>
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder=" "
                    value={longitude}
                    onChange={handleLngChange}
                    id="longitude"
                    name="longitude"
                  />
                  <label htmlFor="longitude">Longitud</label>
                </div>
              </>
            ) : (
              <div className="input-field">
                <input
                  type="text"
                  placeholder=" "
                  value={inputValue}
                  onChange={handleInputChange}
                  id="inputField"
                  name="inputField"
                />
                <label htmlFor="inputField">{getPlaceholder()}</label>
              </div>
            )}
          </div>

          {tabValue === 'two' && typeof window !== 'undefined' && (
            <div className="map-container">
              <p className="frasemapa">Haz clic en el mapa para obtener las coordenadas</p>
              <Mapa setLatLng={setLatLngFromMap} latLng={latLng} />
            </div>
          )}
        </div>

        <div className="qrcomponent">
          <h4 className="grupo2">PERSONALIZAR QR</h4>
          <div className="colorytamaño">
            <QrComponent
              onColorChange={handleColorChange}
              onSizeChange={handleSizeChange}
              colorOptions={colorOptions}
            />
          </div>
        </div>

        <div className="qrcontenido">
          <h4 className="grupo3">QR CREADO</h4>
          <div className="qrcontenidoint" style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr'
          }}>
            <div className="qrdescarga" ref={qrRef}>
              <QRCode value={inputValue} size={qrSize} fgColor={qrColor} />
            </div>

            <div className="qrcreado">
              <p>Color: {qrColor}</p>
              <p>Tamaño: {qrSize}</p>
              <ModalExport qrRef={qrRef} />
              <div className="row">
                <Button color="warning" className="guardarqrr" onClick={handleSaveClick}>
                  <LuSave size={30} />
                  <p>GUARDAR</p>
                </Button>
                <Button color="light" className="guardarqrr" href='/AppQr'>
                  <FaRedoAlt size={30} />
                  <p>Nuevo QR</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          ¡Se ha guardado con éxito!
        </div>
      )}
    </Layout>
  );
}

export default CrearQr;