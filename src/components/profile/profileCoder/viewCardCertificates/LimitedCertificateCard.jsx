import React from 'react';
import {
  MainContainer,
  HeaderContainer,
  HeaderTitle,
  CardContainer,
  ContentContainer,
  Image,
  TextContainer,
  Title,
  School,
  Dates,
  ButtonContainer
} from './styledCertificateCard'; 

const LimitedCertificateCard = ({ titulo, escuela, fechaInicio, fechaFin, imageUrl }) => {
  return (
    <MainContainer>
      {/* Title Section */}
      <HeaderContainer>
        <HeaderTitle>Certificaciones</HeaderTitle>
      </HeaderContainer>

      {/* Card Section */}
      <CardContainer>
        <ContentContainer>
          <Image src={imageUrl} alt="Certificado" />
          <TextContainer>
            <Title>{titulo}</Title>
            <School>{escuela}</School>
            <Dates>{`${fechaInicio} - ${fechaFin}`}</Dates>
          </TextContainer>
        </ContentContainer>
        <ButtonContainer>
        </ButtonContainer>
      </CardContainer>
    </MainContainer>
  );
};

export default LimitedCertificateCard;