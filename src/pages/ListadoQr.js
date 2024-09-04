import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import CardQr from '../components/CardQr';
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import styled from 'styled-components';
import debounce from 'lodash.debounce';

const ListadoContainer = styled.div`
  min-height: 70vh;
  margin: 2em;
`;

const TitleContainer = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const ToggleButton = styled.button`
  background-color: ${({ isHovered }) => (isHovered ? '#85ABE5' : '#bad5fc')};
  color: ${({ isHovered }) => (isHovered ? 'white' : 'black')};
  padding: 8px;
  border: ${({ isHovered }) => (isHovered ? '2px solid #85ABE5' : '1px solid black')};
  cursor: pointer;
  box-shadow: ${({ isHovered }) => (isHovered ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.2)')};
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QRList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const QRItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #0a57ca7f;
    color: white;
  }
`;

const QRInfo = styled.p`
  margin: 0 0 8px 0;
  font-size: 1.2em;
`;

const ListadoQr = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [qrCodes, setQrCodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["qr_nombre_ref", "qr_data", "qr_id", "qr_description"]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const fetchQrCodes = async () => {
        const userId = localStorage.getItem('tandem_id');
        const role = localStorage.getItem('tandem_role');

        try {
            if (role === 'admin') {
                const response = await axios.get('http://erika.tandempatrimonionacional.eu/gatsbyqr/v1/list-qr.php');
                setQrCodes(response.data.qr_codes);
            } else if (role === 'employee' && userId) {
                const response = await axios.post('http://erika.tandempatrimonionacional.eu/gatsbyqr/v1/list-qr-user.php', { id: userId });
                setQrCodes(response.data.qr_codes);
            } else {
                setError('No se encontró el ID de usuario o rol en localStorage.');
            }
        } catch (error) {
            setError('Error al obtener los códigos QR.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQrCodes();
    }, []);

    const search = useCallback(
        debounce((items) => {
            return items.filter((item) => {
                return searchParam.some((param) => {
                    return (
                        item[param] &&
                        item[param].toString().toLowerCase().includes(q.toLowerCase())
                    );
                });
            });
        }, 300),
        [q, searchParam]
    );

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Layout>
            <TitleContainer>
                <Title>Lista de Códigos QR</Title>
                <ToggleButton 
                    isHovered={isHovered}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={toggleView}
                >
                    {isGridView ? <><FaList /> Ver en columna</> : <><IoGridSharp /> Ver en filas</>}
                </ToggleButton>
            </TitleContainer>

            <ListadoContainer>
                <QRList>
                {(qrCodes || []).map(qrCode => (
                        <QRItem key={qrCode.qr_id}>
                            <QRInfo><strong>Nombre de Referencia:</strong> {qrCode.qr_nombre_ref}</QRInfo>
                            <QRInfo><strong>Descripción:</strong> {qrCode.qr_description}</QRInfo>
                            <QRInfo><strong>Fecha de Creación:</strong> {new Date(qrCode.qr_created_at).toLocaleDateString()}</QRInfo>
                            <QRInfo><strong>Datos del QR:</strong> {qrCode.qr_data}</QRInfo>
                        </QRItem>
                    ))}
                </QRList>
            </ListadoContainer>
        </Layout>
    );
};

export default ListadoQr;