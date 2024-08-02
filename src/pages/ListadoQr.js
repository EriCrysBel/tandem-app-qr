import React, { useState } from 'react';
import Layout from '../components/layout';
import CardQr from '../components/CardQr';
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import {Button} from 'reactstrap';

const ListadoQr = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};
const hoverStyle = {
    backgroundColor: isHovered ? '#85ABE5' : '#bad5fc',
    color: isHovered ? 'white' : 'black',
    padding:'8px',
    border: isHovered ? '2px solid #85ABE5':'1px solid black' ,
    cursor: 'pointer',
    boxShadow: isHovered ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, color 0.3s'
  };


    const toggleView = () => {
        setIsGridView(!isGridView);
    };
    
    return (
        <>
        <Layout>
            <div className='titulo mt-3'>
                <h1>Lista de Códigos QR</h1>
                <Button 
                    style={hoverStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                onClick={toggleView} 
                >
                {isGridView ? 
                    <>
                    
                    <p><FaList /> Ver en columna </p>
                    </>
                    :
                    <>
                    <p><IoGridSharp /> Ver en filas</p>
                    </>
                    }
                </Button>
            </div>
            
            <div style={{
                minHeight: '70vh',
                margin: '2em'
            }}>
                <CardQr url="https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/list-qr.php" isGridView={isGridView} />
                
            
            </div>

        </Layout>
        </>
    );
};

export default ListadoQr;
