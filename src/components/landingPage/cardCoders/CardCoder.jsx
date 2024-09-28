import React from 'react';
import { CardContainer, CardTitle, Text } from './styleCard'; // Asegúrate de que estos estilos estén en un archivo 'StyledComponents.jsx'

const CardCoder = ({title, text, buttonText}) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <Text>{text}</Text>
      {buttonText}
    </CardContainer>
  );
};

export default CardCoder;
