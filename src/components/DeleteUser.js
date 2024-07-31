import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { MdDeleteForever } from "react-icons/md";

const DeleteUser = ({ className, onDeleteUser }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggle = () => setModal(!modal);

    const handleDelete = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario

        if (email === '') {
            setMessage('El email no ha sido proporcionado o está vacío');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/delete-user.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                onDeleteUser(); // Llama a onDeleteUser después de una eliminación exitosa
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Error al conectar con el servidor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <a onClick={toggle}><MdDeleteForever fontSize={40} className="social-link"/></a>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={<button className="close" onClick={toggle} type="button">&times;</button>} className='justify-content-end'>
                    <h3 className='m-1'>Eliminar Usuario</h3>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleDelete}>
                        <FormGroup>
                            <Label for="email"><h6>Correo del empleado:</h6></Label>
                            <Input
                                type="email"
                                placeholder="Email del usuario"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <ModalFooter>
                            <Button color="primary" type="submit" disabled={loading}>
                                {loading ? 'Subiendo...' : 'Eliminar Usuario'}
                            </Button>{' '}
                            <Button color="secondary" onClick={toggle}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Form>
                    {message && <p>{message}</p>}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default DeleteUser