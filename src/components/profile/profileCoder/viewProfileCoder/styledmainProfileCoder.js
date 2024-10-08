import styled from 'styled-components';

// Componente principal
export const MainContainer = styled.div`
  width: 74.2rem;
  min-height: 63.68rem;
  height: auto;
  border-radius: 1.25rem;
  border: 2px solid #FF4700;
  margin: 3rem auto;
  padding: 0.5rem;
  box-sizing: border-box;
`;


export const SubContainer = styled.div`
  height: auto;
  margin-top: 1.5rem; 
  display: flex;
  justify-content: space-around;
  padding: 0rem;
  background-color: #ffffff;
  color: black;
  box-sizing: border-box;
`;

// Sección de habilidades (skills)
export const SkillsSection = styled.div`
  width: 28.4rem;
  padding-right: 1rem;
  box-sizing: border-box;
`;

export const VerticalLine = styled.div`
 width: 0.125rem;
 min-height: 34rem;
 height: auto;
 margin-right: 8rem;
 margin-top: 2rem;
 background: #FF4700;
 position: absolute;
 `;

// Sección de certificaciones
export const CertificationsSection = styled.div`
  width: 36.5rem;
  height: 9.81rem;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  background-color: #ffffff;
`;