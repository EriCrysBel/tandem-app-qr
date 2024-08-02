import React from 'react';
import { RiShutDownLine } from "react-icons/ri";

const CerrarSesion = () => {
  const handleCerrarSesion = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
      localStorage.removeItem('tandem_id');
      localStorage.removeItem('tandem_nombre');
      localStorage.removeItem('tandem_email');
      // localStorage.removeItem('tandem_token');
    }
  };

  return (
    <button onClick={handleCerrarSesion} style={{ background: 'none', border: 'none', color: 'white' }}>
      <RiShutDownLine size={24} />
    </button>
  );
};

export default CerrarSesion