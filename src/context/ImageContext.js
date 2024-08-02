import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [userImageUrl, setUserImageUrl] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tandem_image_url');
    }
    return null;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleStorageChange = () => {
        setUserImageUrl(localStorage.getItem('tandem_image_url'));
      };

      // Agregar evento para escuchar cambios en localStorage
      window.addEventListener('storage', handleStorageChange);

      // Limpiar el evento cuando el componente se desmonta
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }
  }, []);

  return (
    <ImageContext.Provider value={{ userImageUrl, setUserImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};