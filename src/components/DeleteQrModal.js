// src/components/DeleteQRModal.js
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Alert } from 'reactstrap';
import axios from 'axios';
import { MdOutlineDeleteForever } from "react-icons/md";

const DeleteQRModal = ({ isOpen, toggle }) => {
    const [nombreRef, setNombreRef] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.post('https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/delete-qr.php', {
                nombre_ref: nombreRef,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                setMessage('Código QR eliminado exitosamente');
                setError('');
            } else {
                setError('Error al eliminar código QR');
                setMessage('');
            }
        } catch (err) {
            console.error('Error de la API:', err);
            setError(`Error al eliminar código QR: ${err.response ? err.response.data.message : err.message}`);
            setMessage('');
        }
    };

    return (
        <>
        <Button onClick={toggle}><MdOutlineDeleteForever fontSize={32} /></Button>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Eliminar Código QR</ModalHeader>
            <ModalBody>
                <Input
                    type="text"
                    placeholder="Nombre de referencia"
                    value={nombreRef}
                    onChange={(e) => setNombreRef(e.target.value)}
                />
                {message && <Alert color="success">{message}</Alert>}
                {error && <Alert color="danger">{error}</Alert>}
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={handleDelete}>
                    Eliminar
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
        </>

    );
};

export default DeleteQRModal;
