import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';
import './BannerUser.css';

const BannerUser = ({ darkMode }) => {
  const { userImageUrl } = useContext(ImageContext);
  const userName = localStorage.getItem('tandem_nombre');

  const rutaimg = `https://erika.tandempatrimonionacional.eu/gatsbyqr/images/users/${userImageUrl}`;

  return (
    <div className='banneruser' style={{ color: darkMode ? 'white' : 'black' }}>
      <p style={{ color: darkMode ? 'white' : 'black' }}>
        <img width={80} src={rutaimg} alt="User" />
        ¡Hola
        <strong> {userName} </strong>!
      </p>
    </div>
  );
};

export default BannerUser;