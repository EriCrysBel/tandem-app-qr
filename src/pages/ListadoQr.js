import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import CardQr from '../components/CardQr';
import CardQrUser from '../components/CardQrUser';

import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { Button } from 'reactstrap';

const ListadoQr = ({ darkMode }) => {
    const [isGridView, setIsGridView] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [role, setRole] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRole(localStorage.getItem('tandem_role'));
            setUserId(localStorage.getItem('tandem_id')); // Obtener el ID del usuario
        }
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const hoverStyle = {
        backgroundColor: isHovered ? '#85ABE5' : '#bad5fc',
        color: isHovered ? 'white' : 'black',
        padding: '8px',
        border: isHovered ? '2px solid #85ABE5' : '1px solid black',
        cursor: 'pointer',
        boxShadow: isHovered ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s, color 0.3s'
    };

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    return (
        <Layout>
            {(role === 'admin' || role === 'employee') && (
                <div className='titulo mt-3'>
                    <h1>Lista de Códigos QR</h1>
                    <Button 
                        style={hoverStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={toggleView}
                    >
                        {isGridView ? (
                            <>
                                <p><FaList /> Ver en columna </p>
                            </>
                        ) : (
                            <>
                                <p><IoGridSharp /> Ver en filas</p>
                            </>
                        )}
                    </Button>
                </div>
            )}

            <div style={{ minHeight: '70vh', margin: '2em'}}>
            {role === 'admin' ? (
                <CardQr url="https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/list-qr.php" darkMode={false} isGridView={isGridView} />
                ) : (role === 'employee' && userId) ? (
                    <div>
                        {/* Vista para empleados con códigos QR asociados a su usuario */}
                        <CardQrUser userId={parseInt(userId)} isGridView={isGridView} onUserUpdated={() => { /* Opcional: realizar alguna acción después de actualizar los QR */ }} darkMode={false} />
                    </div>
                ) : (
                    <div className='titulo mt-3'>
                        <h1>Acceso Denegado</h1>
                        <p>No tienes permiso para acceder a esta página.</p>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default ListadoQr;
