import React, { useState } from 'react';
import styled from 'styled-components';

// Definir los styled components
const StyledDiv = styled.div`
  padding: 20px;
  border: 1px solid grey;
  color: white;
`;

const StyledH2 = styled.h2`
  color: #8e5aef;
  border: 1px solid white;
  padding: 10px;
  margin: 10px 0;
  background-color: #f9f9f983;
`;

const StyledLabel = styled.label`
  color: white;
  display: block;
  margin: 10px 0;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #85ABE5;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: 1px solid grey;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  border-radius:10px;
  font-weight:bolder;
  &:hover {
    background-color: #BC9FF0;
    color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-weight:bolder;
  }
`;

const StyledMessage = styled.p`
  color: white;
  margin: 10px 0;
`;

const EliminarQR = ({ qr, onUserUpdated }) => {
  const [nombreRef, setNombreRef] = useState(qr);
  const [message, setMessage] = useState('');

  const handleEliminarQR = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://erika.tandempatrimonionacional.eu/gatsbyqr/v1/delete-qr.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre_ref: nombreRef }),
      });

      const data = await response.json();
      setMessage(data.message);
      onUserUpdated();
    } catch (error) {
      console.error('Error eliminando el código QR', error);
    }
  };

  return (
    <StyledDiv>
      <StyledH2>Eliminar Código QR</StyledH2>
      <form onSubmit={handleEliminarQR}>
        <div>
          <StyledLabel>
            Nombre de Referencia:
            <StyledInput
              type="text"
              value={nombreRef}
              onChange={(e) => setNombreRef(e.target.value)}
              required
            />
          </StyledLabel>
        </div>
        <StyledButton type="submit">Eliminar</StyledButton>
      </form>
      {message && <StyledMessage>{message}</StyledMessage>}
    </StyledDiv>
  );
};

export default EliminarQR;
