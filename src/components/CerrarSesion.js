import React from 'react';
import { RiShutDownLine } from "react-icons/ri";

const CerrarSesion = ({ darkMode }) => {
  const handleCerrarSesion = () => {
    window.location.href = '/';
    localStorage.removeItem('tandem_id');
    localStorage.removeItem('tandem_email');
    localStorage.removeItem('tandem_nombre');
    localStorage.removeItem('tandem_image_url');
    localStorage.removeItem('tandem_role');
    localStorage.removeItem('tandem_token');
  };

  return (
    <button onClick={handleCerrarSesion} style={{ background: 'none', border: 'none', marginLeft:'20px', marginRight:'20px', color: darkMode ? 'white' : 'black' }}>
      <RiShutDownLine size={24} />
    </button>
  );
};

export default CerrarSesion;
