import styled from 'styled-components';

// Componente principal
export const MainContainer = styled.div`
  width: 74.2rem;
  height: auto;
  border-radius: 1.25rem;
  border: 2px solid #FF4700;
  margin: 0 auto;
  padding: 0.5rem;
  box-sizing: border-box;
`;

// Subcontenedor que engloba las secciones de skills y certificaciones
export const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0rem;
  background-color: #ffffff;
  color: black;
  min-height: auto;
  box-sizing: border-box;
`;

// Sección de habilidades (skills)
export const SkillsSection = styled.div`
  width: 28.4rem;
  padding-right: 1rem;
  box-sizing: border-box;
`;

// Sección de certificaciones
export const CertificationsSection = styled.div`
  width: 36.5rem;
  height: 9.81rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2.5rem;
  padding: 2rem;
  background-color: #ffffff;
`;