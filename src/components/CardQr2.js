import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardQr.css";
import CodigoQrNuevo from '../components/CodigoQrNuevo';
import ModalTandem from "./ModalTandem";
import EliminarQR from "./EliminarQR";
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

const CardQr2 = ({ url, isGridView, onUserUpdated }) => {
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState('');
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nombre_ref", "data", "created_by","id"]);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const fetchQrCodes = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
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
    setRefresh(!refresh);
    onUserUpdated();
  };

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((param) => {
        return (
          item[param] &&
          item[param].toString().toLowerCase().includes(q.toLowerCase())
        );
      });
    });
  }

  const toggleExpandCard = (id) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSearchChange = useCallback(debounce((e) => {
    setQ(e.target.value);
  }, 300), []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando lista...</div>;
  } else {
    return (
      <>
        <div className="section_our_solution">
          <Helmet>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
          </Helmet>
          <div style={{ minHeight: '70vh', margin: '2em' }}>
            <div className="wrapper">
              <div className="search-wrapper">
                <label htmlFor="search-form">
                  <span className="sr-only">Buscar por nombre, id de usuario o datos del QR... </span>
                  <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Buscar por nombre, id de usuario o datos del QR..."
                    style={{ width: '400px', height: '40px', fontSize: '16px', padding: '10px' }}
                    value={q}
                    onChange={handleSearchChange}
                  />
                </label>
              </div>
              <div className={isGridView ? "card-grid" : "card-list"}>
                {search(qrCodes).map((qrCode) => (
                  <div className="col-lg-12 col-md-12 col-sm-12" key={qrCode.id}>
                    <div className="our_solution_category">
                      <div className="solution_cards_box">
                        <div className={`solution_card ${expandedCards[qrCode.id] ? 'expanded' : ''}`}>
                          <div className="hover_color_bubble"></div>
                          <div className="solu_title">
                            <h3><strong>Nombre del QR: </strong>{qrCode.nombre_ref}</h3>
                            <CodigoQrNuevo datos={qrCode.data} />
                          </div>
                          <div className="solu_description">
                            <button
                              type="button"
                              className="read_more_btn"
                              onClick={() => toggleExpandCard(qrCode.id)}
                            >
                              {expandedCards[qrCode.id] ? 'Ver menos' : 'Ver más'}
                            </button>
                            {expandedCards[qrCode.id] && (
                              <div className="additional_info">
                                <p><strong>Nº ID del QR: </strong> {qrCode.id}</p>
                                <p><strong>Descripción: </strong> {qrCode.description}</p>
                                <p><strong>Datos del QR: </strong> {qrCode.data}</p>
                                <p><strong>Creado por: </strong> {qrCode.created_by}</p>
                                <p><strong>Fecha y hora de creación: </strong> {qrCode.created_at}</p>
                                <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                                  <ModalTandem
                                    className="socialqr"
                                    boton="Borrar"
                                    text={<EliminarQR qr={qrCode.nombre_ref} onUserUpdated={handleUserUpdated} />}
                                  />
                                </li>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

CardQr2.propTypes = {
  url: PropTypes.string.isRequired,
  isGridView: PropTypes.bool,
  onUserUpdated: PropTypes.func.isRequired,
};

export default CardQr2;
