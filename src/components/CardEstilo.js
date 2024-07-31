import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #0a57ca7f;
    color:white;
  }
  &.destacado {
    background-color: orange;
  }

  /* @media (min-width: 768px) {
    margin: 5em;
  }
  @media (max-width: 500px) {
    margin: 10em;
  } */
`;

const CardTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.5em;
`;

const CardDescription = styled.div`
  margin: 0 0 10px 0;
  font-size: 1em;
  color: #000;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #0056b3;
  }
  &.descargar {
    background-color: red;
  }
`;

const CardImg = styled.img`
  max-width: 100px;
`;

const CardEstilo = ({ titulo, descripcion, url, children }) => {
  return (
    <CardContainer >
      <CardTitle>{titulo}</CardTitle>
      <CardDescription>
        <CardImg src={url} alt={titulo} />
        {descripcion}
      </CardDescription>
    </CardContainer>
  );
};

export default CardEstilo;
