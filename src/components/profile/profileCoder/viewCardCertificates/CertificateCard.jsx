import React from 'react';
import SmallButton from '../../../atom/SmallButton';
import CertificateButton from '../../../atom/CertificateButton';
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

const CertificateCard = ({ titulo, escuela, fechaInicio, fechaFin, imageUrl }) => {
  return (
    <MainContainer>
      {/* Title Section */}
      <HeaderContainer>
        <HeaderTitle>Certificaciones</HeaderTitle>
        <CertificateButton onClick={() => window.location.href = '/coder/formulario-certificado'}>
          Añadir Certificado
        </CertificateButton>
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
          <SmallButton onClick={() => window.location.href = '/coder/formulario-certificado'}>
            Editar
          </SmallButton>
        </ButtonContainer>
      </CardContainer>
    </MainContainer>
  );
};

export default CertificateCard;





