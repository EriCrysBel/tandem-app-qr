import React, { useState} from 'react';
import NavbarTandem from '../components/NavbarTandem';
import Footer from '../components/Footer';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ChangePassword.css'

const ChangePassword =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handlePassword=(e) => setPassword(e.target.value);
    const handleChangePassword = async () => {
        try {
            const response = await fetch('http://localhost/gatsby-qr/v1/change-password.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            setMessage(data.message);
            } catch (error) {
                console.error('Error registrando usuario', error);
                setMessage('Error en el registro');
            }
        }
    return(
        <>
            <NavbarTandem/>
            <h1 className='changepasstitulo mt-3'>RESTABLECE TU CONTRASEÑA</h1>
            <div className="row cambiarpassword">
                <div className="col-12 col-md-5">

                </div>
                <div className="col-12 col-md-7">
                    <h1 className='titulochange'>CAMBIAR CONTRASEÑA</h1>
            <FormGroup row className='formuchangepassword mt-5 mb-5'>
                <Label for="email" sm={4}>Correo electrónico</Label>
                <Col sm={8}>
                <Input
                    id="email"
                    name="email"
                    placeholder="Escribe tu correo electrónico"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Col>
                <FormText>Este campo es obligatorio</FormText>
            </FormGroup>

            <FormGroup row className='formuchangepassword mt-5 mb-5'>
                <Label for="examplePassword" sm={4}>Escribe tu nueva contraseña</Label>
                <Col sm={8}>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Escribe tu contraseña"
                    type="password"
                    value={password}
                    onChange={handlePassword}
                />
                </Col>
            </FormGroup>
            <Button onClick={handleChangePassword}>Cambiar Constraseña</Button>
            <p>{message}</p>
                </div>
                <div className=''>
                
            </div>
            </div>
            
            <Footer/>
        </>
    )
}

export default ChangePassword