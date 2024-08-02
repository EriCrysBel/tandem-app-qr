import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import "./AreaPersonal.css"
import { StaticImage } from 'gatsby-plugin-image';
import CambiarContra from '../components/CambiarContra';
import CambiarDatos from '../components/CambiarDatos';
import ModalSoporte from '../components/ModalSoporte';
// import { Button } from 'reactstrap';

import { MdSupportAgent } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
// import { BiSolidUserDetail } from "react-icons/bi";

import styled from 'styled-components';
import CardEstilo from '../components/CardEstilo';

const ArTitulo = styled.h1`
  margin-top: 0.1em;
  text-align: center;
  font-family: Georgia, serif;
  color: #8F6F24;
  @media (min-width:728px){
    border-radius: 5px;
    margin: .8em;
    font-size: 30px;
    font-weight: bolder;
  }
`
const Containerun = styled.div`
  @media (min-width:728px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 5px;
    width: 100%;
    min-height: 60vh;
  }
`
const Cardadmin = styled.div`
  padding: 1em;
  @media (min-width: 728px) {
    min-height: 30vh;
    width: 100%;
    margin-bottom: 3.5em;
  }
`
const Adminbutton = styled.div`
  background-color: #5e039780;
  width: 100%;
  border-radius: 5px;
  &:hover{
    background-color: #5e0397;
  }
`
const Aadminbutton = styled.a`
  display: flex;
  align-items: center;
  column-gap: 5px;
  justify-content: center;
  align-content: center;
  color: white;
  margin-top: 1em;
  align-items: center;
  text-decoration: none;
`
const Cardfoto = styled.div`
  padding: 1em;
  @media (min-width: 728px) {
    min-height: 30vh;
    width: 100%;
    margin-bottom: 3.5em;
  }
`
const Cardcontra = styled.div`
  padding: 1em;
  @media (min-width: 728px) {
    min-height: 30vh;
    width: 100%;
    margin-bottom: 3.5em;
  }
`
const Cardsoporte = styled.div`
  padding: 1em;
  @media (min-width: 728px) {
    min-height: 30vh;
    width: 100%;
    margin-bottom: 3.5em;
  }
`
const Soportebutton = styled.button`
  background-color: #5e039780;
  width: 100%;
  display: grid;
  grid-template-columns: 50px 200px;
  border-radius: 5px;
  column-gap: 5px;
  justify-content: center;
  align-content: center;
  color: white;
  margin-top: 1em;
  align-items: center;
  &:hover{
    background-color: #5e0397;
  }
`
const Containeru = styled.div`
  margin: 0 5em;
  @media (min-width:728px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5px;
    width: 100%;
    margin: 0 5em;
  }
`

const AreaPersonal = () => {
  const [modal, setModal] = useState(false);
  const [role, setRole] = useState(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('tandem_role'));
    }
  }, []);
  
  const toggleModal = () => setModal(!modal);
  
  return (
    <>
      {role === 'admin' ? 
      <Layout>
        <ArTitulo>
          ÁREA PERSONAL
        </ArTitulo>
        <Containerun>
          <Cardadmin>
            <CardEstilo 
            descripcion={
              <>
                <StaticImage
                src='../images/listadousuarios.jpg'
                alt="listado de usuarios"
                />
                <Adminbutton >
                  <Aadminbutton href='../ListadoUsuarios'>
                    <FaUsersGear fontSize={50}/> Administrar Usuarios
                  </Aadminbutton>
                </Adminbutton>
              </>
            }
            >
            </CardEstilo>
          </Cardadmin>
          <Cardfoto>
            <CardEstilo 
            descripcion={
              <>
                <StaticImage
                src='../images/datos.jpg'
                alt="listado de usuarios"
                />
                {typeof window !== 'undefined' && <CambiarDatos idUser={localStorage.getItem('tandem_id')} />}
              </>
            }
            >
            </CardEstilo>
          </Cardfoto>
          <Cardcontra>  
            <CardEstilo 
              descripcion={
                <>
                  <StaticImage
                  src='../images/contraseña.jpg'
                  alt="listado de usuarios"
                  />
                  <CambiarContra/>
                </>
              }
            >
            </CardEstilo>
          </Cardcontra>
          <Cardsoporte>
            <CardEstilo 
            descripcion={
              <>
                <StaticImage
                src='../images/soporte.jpg'
                alt="listado de usuarios"
                />
                <Soportebutton onClick={toggleModal}>
                  <MdSupportAgent fontSize={50}/>
                  <p>Soporte técnico</p>
                </Soportebutton>
              </>
            }
            >
            </CardEstilo>
          </Cardsoporte>
        </Containerun>
      </Layout>
      : 
      <Layout>
        <ArTitulo>
          ÁREA PERSONAL
        </ArTitulo>
        <Containeru>
          <Cardfoto>
            <CardEstilo 
            descripcion={
              <>
                <StaticImage
                src='../images/datos.jpg'
                alt="listado de usuarios"
                />
                {typeof window !== 'undefined' && <CambiarDatos idUser={localStorage.getItem('tandem_id')} />}
              </>
            }
            >
            </CardEstilo>
          </Cardfoto>
          <Cardcontra>  
            <CardEstilo 
              descripcion={
                <>
                  <StaticImage
                  src='../images/contraseña.jpg'
                  alt="listado de usuarios"
                  />
                  <CambiarContra/>
                </>
              }
            >
            </CardEstilo>
          </Cardcontra>
          <Cardsoporte>
            <CardEstilo 
            descripcion={
              <>
                <StaticImage
                src='../images/soporte.jpg'
                alt="listado de usuarios"
                />
                <Soportebutton onClick={toggleModal}>
                  <MdSupportAgent fontSize={50}/>
                  <p>Soporte técnico</p>
                </Soportebutton>
              </>
            }
            >
            </CardEstilo>
          </Cardsoporte>
        </Containeru>
      </Layout>
      }
      <ModalSoporte modal={modal} toggleModal={toggleModal} />
    </>
  )
}

export default AreaPersonal