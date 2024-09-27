import ButtonLinkLg from '../buttonLinkLg/ButtonLinkLg';
import styled from 'styled-components';

const PreRegisterForm = () => {
  return (
    <Wrapper>
      <Title>Formulario de registro</Title>
      <Container>
        <SubTitleWrapper>
          <SubTitle>Selecciona tu perfil</SubTitle>
        </SubTitleWrapper>
        <ButtonWrapper>
          <ButtonLinkLg to="/registerRP">Responsable de Promoción</ButtonLinkLg>
          <ButtonLinkLg to="/registerCoder">Coder/Ex-coder</ButtonLinkLg>
          <ButtonLinkLg to="/registerCompany">Empresa</ButtonLinkLg>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default PreRegisterForm;

// Wrapper para alinear vertical y horizontalmente el formulario completo
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  align-items: center;
  justify-content: center;
  height: 100%; /* Espero que tome la altura completa de la ventana */
  position: relative;
`;

const Title = styled.h1`
  font-family: Poppins, Helvetica, Arial, sans-serif;
  font-size: 2.5rem; /* 40px */
  color: #373737;
  
  padding-bottom: 1.5rem; /*
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* 24px */
  }

  @media (max-width: 480px) {
    font-size: 0.875rem; /* 20px */
  }
`;

// Container para el cuadrado con subtítulo y botones
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 39.25rem; /* 628px convertido a rem */
  height: 35.875rem; /* 574px convertido a rem */
  padding: 2rem;
  background-color: white;
  border-radius: 1rem; /* 16px convertido a rem */
  border: 0.0625rem solid #ff4700; /* 1px convertido a rem */
  box-shadow: 0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1); /* 0px 4px 6px convertido a rem */

  @media (max-width: 768px) {
    padding: 1rem;
    width: 90%;
    height: auto;
  }
`;

// SubTitleWrapper para centrar el subtítulo verticalmente entre el borde superior y el primer botón
const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Ocupa todo el espacio disponible hasta el primer botón */
  width: 100%;
`;

const SubTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 1.5rem; /* 24px */
  color: #373737;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.25rem; /* 20px */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* 16px */
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.875rem; /* 40px de espacio entre los botones */
  margin-top: 1.5rem;/* Para bajar un poco el conjunto de botones */
  padding-bottom: 5rem; 

  @media (max-width: 480px) {
    gap: 1.5rem; /* 24px de espacio entre los botones en pantallas pequeñas */
  }
`;
