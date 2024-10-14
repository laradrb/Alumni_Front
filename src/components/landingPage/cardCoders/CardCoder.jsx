import React from 'react';
import { CardContainer, CardTitle, Text } from './styleCard';

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
