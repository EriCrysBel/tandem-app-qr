import React, { useState, useCallback } from 'react';
import ListadosUsers from '../components/ListadosUsers';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import RegisterModal from '../components/RegisterModal';
import {Button} from 'reactstrap';
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const darkTheme = {
  backgroundColor: '#000',
  color: '#fff',
};

const lightTheme = {
  backgroundColor: '#fff',
  color: '#000',
};

function ListadoUsuarios() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }, []);
  const [isGridView, setIsGridView] = useState(true);
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

    return (
        <>
          <Layout>
            <h1 className='creacionqr mt-3'>Listado de Usuarios</h1>
            <div style={{
              display:'grid',
              gridTemplateColumns:'1fr .15fr',
              padding:'2em',
            }}>
              <RegisterModal buttonText="Registrar nuevo ususario" text='Click Aquí'/>
                  <Button 
                  color="info"
                  onClick={toggleView}
                  >
                    {isGridView ? 
                    <>
                    
                    <p><FaList /> Ver lista </p>
                    </>
                    :
                    <>
                    <p><IoGridSharp /> Ver cuadrícula</p>
                    </>
                    }
                  </Button>
            </div>
              
            <div>
              <ListadosUsers url='https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/list-users.php' isGridView={isGridView} darkMode={darkMode} />
            </div>
          </Layout>      
        </>
    );
}

export default ListadoUsuarios