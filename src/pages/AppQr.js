// AppQr.js
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
      <Layout>
        {role === 'admin' || role === 'employee' ? 
          <>
            <CardApp />
          </>
          : 
          <div style={{minHeight:'68vh'}}>
            <Informacion />
          </div>
        }
      </Layout>
    </>
  )
}

export default AppQr