import React from 'react';
import { CardContainer, CardTitle, Text, Button, CardLink, LinkButton } from './StyledComponents'; // Asegúrate de que estos estilos estén en un archivo 'StyledComponents.jsx'

const Card = () => {
  return (
    <CardContainer>
      <CardTitle>Coder Title</CardTitle>
      <Text>This is a brief description of the coder's profile.</Text>
      <Button>Click Me</Button>
      <CardLink to="/details">
        <LinkButton>More Details</LinkButton>
      </CardLink>
    </CardContainer>
  );
};

export default Card;
