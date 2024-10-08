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
          <ButtonLinkLg to="/registerExCoder">Coder/Ex-coder</ButtonLinkLg>
          <ButtonLinkLg to="/registerCompany">Empresa</ButtonLinkLg>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default PreRegisterForm;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 5rem;
  align-items: center;
  justify-content: center;
  height: 100%; 
  position: relative;
`;

const Title = styled.h1`
  font-family: Poppins, Helvetica, Arial, sans-serif;
  font-size: 2.5rem;
  color: #373737; 
  padding-bottom: 1.5rem; 
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 39.25rem; 
  height: 35.875rem; 
  padding: 2rem;
  background-color: white;
  border-radius: 1rem; 
  border: 0.125rem solid #ff4700; 
  box-shadow: 0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1); 
`;

const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const SubTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 1.5rem; 
  color: #373737;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.875rem; 
  margin-top: 1.5rem;
  padding-bottom: 5rem; 
`;
