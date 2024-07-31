import React from 'react';
import './BannerUser.css';

const BannerUser = ({ darkMode }) => {
  const rutaimg = 'https://erika.tandempatrimonionacional.eu/gatsbyqr/images/users/'+ localStorage.getItem('tandem_image_url');

  return (
    <div className='banneruser' style={{ color: darkMode ? 'white' : 'black' }}>
      <p style={{ color: darkMode ? 'white' : 'black' }}>
        <img width={80} src={rutaimg} alt="User" />
        ¡Hola
        <strong> {localStorage.getItem('tandem_nombre')} </strong>!
      </p>
    </div>
  );
};

export default BannerUser;
