import React, { useState } from 'react';
import QRCode from 'qrcode';
import CodigoQrNuevo from './CodigoQrNuevo';

const ContenidoQr = () => {
  const [data, setData] = useState('');
  const [qrCode, setQRCode] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const generateQRCode = () => {
    QRCode.toDataURL(data, { errorCorrectionLevel: 'H', size: 400 }, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      setQRCode(url);
    });
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleChange} />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
};

export default ContenidoQr;
