import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand as ReactstrapNavbarBrand,
  Nav as ReactstrapNav,
  NavItem as ReactstrapNavItem,
  NavLink as ReactstrapNavLink,
  Button,
} from 'reactstrap';
import styled from 'styled-components';
import ModalSoporte from './ModalSoporte'; 
import './NavbarInicio.css';

// Estilos personalizados usando styled-components
const Navbar = styled(ReactstrapNavbar)`
  font-family: Century Gothic, serif;
  background-color: ${props => props.darkMode ? '#000' : '#f8f9fa'} !important;
`;

const NavbarBrand = styled(ReactstrapNavbarBrand)`
  display: flex;
`;

const NavLink = styled(ReactstrapNavLink)`
  position: relative;
  color: ${props => props.darkMode ? 'white' : 'black'} !important;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.darkMode ? 'white' : 'black'} !important;
    font-weight: 700;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #BC9FF0;
    top: -10px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Nav = styled(ReactstrapNav)`
  .navlink {
    font-size: 15px;
    color: ${props => props.darkMode ? 'white' : 'black'} !important;
  }
`;

function NavbarInicio(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modal, setModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#d5d5d5';
      document.body.style.color = '#000';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar darkMode={darkMode} expand="md">
        <NavbarBrand href="/" style={{
          backgroundColor: darkMode ? 'transparent' : 'black',
          borderRadius: '20px',
        }}>
          <StaticImage 
            src='../images/logoblanco.svg' 
            alt="Logo" 
            width={150} 
            style={{
              color: 'black',
              height: '50px',
              boxShadow: darkMode ? 'none' : '0px 4px 8px rgba(3,3,3)',
              borderRadius: '20px'
            }}
          />
        </NavbarBrand>
        {isMobile ? (
          <>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar darkMode={darkMode}>
                <ReactstrapNavItem>
                  <NavLink darkMode={darkMode} href="/InfoInstitucional" className='navlink'>Información Institucional</NavLink>
                </ReactstrapNavItem>
                <ReactstrapNavItem>
                  <NavLink darkMode={darkMode} href="/Login" className='navlink'>APP QR</NavLink>
                </ReactstrapNavItem>
                <ReactstrapNavItem>
                  <NavLink darkMode={darkMode} href="#" onClick={toggleModal}>SOPORTE TÉCNICO</NavLink>
                </ReactstrapNavItem>
              </Nav>
              <Button color="secondary" onClick={toggleDarkMode}>
                {darkMode ? <CiLight size={24} /> : <MdDarkMode size={24} />}
              </Button>
            </Collapse>
          </>
        ) : (
          <Nav className="ms-auto" navbar darkMode={darkMode}>
            <ReactstrapNavItem>
              <NavLink darkMode={darkMode} href="/InfoInstitucional" className='navlink'>Información Institucional</NavLink>
            </ReactstrapNavItem>
            <ReactstrapNavItem>
              <NavLink darkMode={darkMode} href="/Login" className='navlink'>APP QR</NavLink>
            </ReactstrapNavItem>
            <ReactstrapNavItem>
              <NavLink darkMode={darkMode} href="#" onClick={toggleModal}>SOPORTE TÉCNICO</NavLink>
            </ReactstrapNavItem>
            <ReactstrapNavItem>
              <Button color="secondary" onClick={toggleDarkMode}>
                {darkMode ? <CiLight size={24} /> : <MdDarkMode size={24} />}
              </Button>
            </ReactstrapNavItem>
          </Nav>
        )}
      </Navbar>
      <ModalSoporte modal={modal} toggleModal={toggleModal} />
    </div>
  );
}

export default NavbarInicio;
