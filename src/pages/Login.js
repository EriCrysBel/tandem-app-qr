import React, { useState } from 'react';
import "./Login.css";
import RegisterModal from '../components/RegisterModal';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NavbarInicio from "../components/NavbarInicio";
import FooterInicio from "../components/FooterInicio";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/login-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const respuesta = await response.json();
      if (respuesta.message === 'Login exitoso') {
        console.log(respuesta.user);
        localStorage.setItem('tandem_id', respuesta.user.id);
        localStorage.setItem('tandem_email', respuesta.user.email);
        localStorage.setItem('tandem_image_url', respuesta.user.image_url);
        localStorage.setItem('tandem_nombre', respuesta.user.nombre);
        localStorage.setItem('tandem_role', respuesta.user.role);
        setMessage('Login exitoso para:' + respuesta.user.nombre);
        window.location.href = '/AppQr';
      } else {
        setMessage('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en el login', error);
      setMessage('Error en el login');
    }
  };

  return (
    <>
      <NavbarInicio/>
      <div className='row mb-5'>
        <div className='loginform col-12 col-md-11 mt-2 p-5 mr-2'>
          <div className='h1login'>
            <h1>Accede a tu área personal</h1>
          </div>
          <Form className='formu'>
            <FormGroup row>
              <Label for="email" sm={2}>Correo electrónico</Label>
              <Col sm={10}>
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

            <FormGroup row>
              <Label for="examplePassword" sm={2}>Contraseña</Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <FormText>Este campo es obligatorio</FormText>
            </FormGroup>

            <Button className='btnlogin' color='warning' onClick={handleLogin}>
              <p>Acceder</p>
            </Button>
            <br />
            <p>{message}</p>
            <div>
              <a href='../ChangePassword'>¿Has olvidado tu contraseña?</a>
            </div>
            <div className='registro mt-5'>
              <h4>En caso de que no estés registrado</h4>
              <RegisterModal buttonText="Click aquí"/>
            </div>
          </Form>
        </div>
      </div>
      <FooterInicio/>
    </>
  );
};

export default Login;