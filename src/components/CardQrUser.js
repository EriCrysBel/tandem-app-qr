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
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #0a57ca7f;
    color: white;
  }
  &.destacado {
    background-color: orange;
  }
`;


const CardDescription = styled.div`
  margin: 0 0 10px 0;
  font-size: 1em;
  color: #000;
`;

const CardQrUser = ({ userId, isGridView, onUserUpdated }) => {
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false); // Estado para rastrear actualizaciones
  const [message, setMessage] = useState('');
  const [q, setQ] = useState("");
  const [searchParam] = useState(["qr_nombre_ref", "qr_data", "user_nombre", "qr_id"]);

  useEffect(() => {
    const fetchQrCodes = async () => {
      try {
        const response = await fetch("https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/list-qr-user.php", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId }),
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
  }, [userId, refresh]);

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
              <CardContainer key={qrCode.qr_id}>
                <CardDescription>
                  <div className="descripcion">
                    <CodigoQrNuevo datos={qrCode.qr_data} className="qrimage" />
                    <p className="qrid">
                      <strong>Id QR:</strong> {qrCode.qr_id}
                    </p>
                    <p className="qrnombre">
                      <strong>Nombre:</strong> {qrCode.qr_nombre_ref}
                    </p>
                    <p className="qrdes">
                      <strong>Descripción:</strong> {qrCode.qr_description}
                    </p>
                    <p className="qrdata">
                      <strong>Datos del QR: </strong> {qrCode.qr_data}
                    </p>
                    <p className="qrcreat">
                      <strong>Creado por: </strong> {qrCode.user_nombre}
                    </p>
                    <p className="qrdate">
                      <strong>Fecha y hora de creación: </strong> {qrCode.qr_created_at}
                    </p>
                    <div>
                      <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                        <ModalTandem
                          className="socialqr"
                          boton="Borrar"
                          text={<EliminarQR qr={qrCode.qr_nombre_ref} onUserUpdated={handleUserUpdated} />}
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

CardQrUser.propTypes = {
  userId: PropTypes.number.isRequired,
  isGridView: PropTypes.bool,
  onUserUpdated: PropTypes.func.isRequired,
};

export default CardQrUser;
