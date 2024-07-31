import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import CardApp from "../components/CardApp"; 
import Informacion from "../components/Informacion";

const AppQr = ({ darkMode }) => {
  const role = localStorage.getItem('tandem_role'); 
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <Layout>
        {role === 'admin' || role === 'employee' ? 
          <CardApp darkMode={darkMode} style={{backgroundColor:'transparent'}}/>
        : 
          <div style={{minHeight:'68vh'}}>
            <Informacion />
          </div>
        }
      </Layout>
    </>
  );
}

export default AppQr;
