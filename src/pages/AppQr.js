import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import CardApp from "../components/CardApp"; 
import Informacion from "../components/Informacion";

const AppQr = () => {
  const [role, setRole] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('tandem_role'));
    }
  }, []);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      {role === 'admin' || role === 'employee' ? (
        <Layout>
          <h1 className="creacionqr">CREACIÓN DE QR</h1>
          <CardApp />
        </Layout>
      ) : role === 'guest' ? (
        <Layout> 
          <div style={{minHeight:'78vh'}}>
            <h1 className="creacionqr">INFORMACIÓN INSTITUCIONAL</h1>
            <Informacion />
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className='titulo mt-3'>
            <h1>Acceso Denegado</h1>
            <p>No tienes permiso para acceder a esta página.</p>
          </div>
        </Layout>
      )}
    </>
  );
};

export default AppQr;
