// CardQr.js
import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardQr.css";
import CodigoQrNuevo from '../components/CodigoQrNuevo';

import ModalTandem from "./ModalTandem";
import EliminarQR from "./EliminarQR";
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce'; // para la función debounce
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid ${props => props.darkMode ? '#444' : '#ccc'};
  border-radius: 12px;
  padding: 12px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  background-color: ${props => props.darkMode ? '#333' : 'white'};
  color: ${props => props.darkMode ? 'white' : 'black'};

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.darkMode ? '#444' : '#0a57ca7f'};
    color: white;
  }

  &.destacado {
    background-color: orange;
  }
`;

const CardDescription = styled.div`
  margin: 0 0 10px 0;
  font-size: 1em;
  color: ${props => props.darkMode ? 'white' : '#000'};
`;


const CardQr = ({ url, isGridView, onUserUpdated,darkMode }) => {
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false); // Estado para rastrear actualizaciones
  const [message, setMessage] = useState('');
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nombre_ref", "data", "created_by", "id"]);

  useEffect(() => {
    const fetchQrCodes = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQrCodes(data.qr_codes);
        setIsLoaded(true);
        setMessage(data.message);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQrCodes();
  }, [url, refresh]);

  const handleUserUpdated = () => {
    setRefresh(!refresh); // Cambia el estado de refresh para desencadenar useEffect
    onUserUpdated();
  };

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((param) => {
        return (
          item[param] && // Verifica que el campo existe
          item[param].toString().toLowerCase().includes(q.toLowerCase())
        );
      });
    });
  }

  const handleSearchChange = useCallback(
    debounce((e) => {
      setQ(e.target.value);
    }, 300),
    []
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando lista...</div>;
  } else {
    return (
      <div
        className="containerlist"
        style={{
          minHeight: '70vh',
          margin: '2em',
        }}
      >
        <div className="wrapper">
          <div className="search-wrapper">
            <label htmlFor="search-form" style={{ marginBottom: '1em' }}>
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Buscar por nombre, id o datos..."
                onChange={handleSearchChange}
                style={{ width: '400px', height: '40px', fontSize: '16px', padding: '10px' }}
              />
            </label>
          </div>

          <div className={isGridView ? "card-grid" : "card-list"}>
            {search(qrCodes).map((qrCode) => (
              <CardContainer key={qrCode.id} darkMode={darkMode}>
                <CardDescription darkMode={darkMode}>
                  <div className="descripcion">
                    <CodigoQrNuevo datos={qrCode.data} className="qrimage" />
                    <p className="qrid">
                      <strong>Id QR:</strong> {qrCode.id}
                    </p>
                    <p className="qrnombre">
                      <strong>Nombre:</strong> {qrCode.nombre_ref}
                    </p>
                    <p className="qrdes">
                      <strong>Descripción:</strong> {qrCode.description}
                    </p>
                    <p className="qrdata">
                      <strong>Datos del QR: </strong> {qrCode.data}
                    </p>
                    <p className="qrcreat">
                      <strong>Creado por: </strong> {qrCode.created_by}
                    </p>
                    <p className="qrdate">
                      <strong>Fecha y hora de creación: </strong> {qrCode.created_at}
                    </p>
                    <div>
                      <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                        <ModalTandem
                          className="socialqr"
                          boton="Borrar"
                          text={<EliminarQR qr={qrCode.nombre_ref} onUserUpdated={handleUserUpdated} />}
                        />
                      </li>
                    </div>
                  </div>
                </CardDescription>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

CardQr.propTypes = {
  url: PropTypes.string.isRequired,
  isGridView: PropTypes.bool,
  onUserUpdated: PropTypes.func.isRequired,
};

export default CardQr;
