import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer"
import NavbarTandem from "./NavbarTandem"


const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const stylemain={
  minHeight:'80vh',
  }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  };

  return (
    <>
      <NavbarTandem darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main style={stylemain}>
      {children}
      </main>
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </>
  )
}

export default Layout