import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [userImageUrl, setUserImageUrl] = useState(localStorage.getItem('tandem_image_url'));

  useEffect(() => {
    const handleStorageChange = () => {
      setUserImageUrl(localStorage.getItem('tandem_image_url'));
    };

    // Agregar evento para escuchar cambios en localStorage
    window.addEventListener('storage', handleStorageChange);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <ImageContext.Provider value={{ userImageUrl, setUserImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};