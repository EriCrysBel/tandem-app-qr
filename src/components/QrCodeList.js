import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import Layout from '../components/layout';
import ModalTandem from '../components/ModalTandem';
import EliminarQR from '../components/EliminarQR';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const QrCodeList = (url) => {
  const [qrCodes, setQrCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["qr_nombre_ref", "qr_data", "qr_created_at"]);

  useEffect(() => {
    const fetchQrCodes = async () => {
      try {
        const response = await fetch('http://localhost/api-qr-tandem/v1/list-qr.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQrCodes(data.qr_codes);
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
  };

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((param) => {
        return (
          item[param] && // Verifica que el campo existe
          item[param]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  // if (loading) {
  //   return <p>Cargando...</p>;
  // }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <Layout>
      <div>
        <h2>Listado de Códigos QR</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} className="wrapper">
        <div className="search-wrapper">
                <label htmlFor="search-form">
                  <span className="sr-only">Buscar por nombre:</span>
                  <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Buscar por nombre"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    style={{ width: '400px', height: '40px', fontSize: '16px', padding: '10px' }}
                  />
                </label>
              </div>
          {search(qrCodes).map((qrCode) => (
            <Card key={qrCode.qr_id} 
            sx={{
              width: '300px',
              transition: 'transform 0.3s, background-color 0.3s',
              '&:hover': {
                backgroundColor: '#C2EBF5',
                transform: 'scale(1.05)',
              },
            }}>
              <CardContent>
                <QRCode value={qrCode.qr_data} />
                <Typography variant="h6">{qrCode.qr_nombre_ref}</Typography>
                <Typography variant="body2">Data: {qrCode.qr_data}</Typography>
                <Typography variant="body2">Descripción: {qrCode.qr_description}</Typography>
                <Typography variant="body2">Fecha Creación: {qrCode.qr_created_at}</Typography>
                <Typography variant="body2">ID Usuario: {qrCode.user_id}</Typography>
              </CardContent>
              <CardActions>
                <ModalTandem
                  boton="Borrar"
                  text={<EliminarQR qr={qrCode.qr_nombre_ref} onUserUpdated={handleUserUpdated} />}
                />
              </CardActions>
            </Card>
          ))}
          </div>
        </div>
    </Layout>
  );
};

export default QrCodeList;
