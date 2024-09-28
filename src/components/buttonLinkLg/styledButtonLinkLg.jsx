import styled from 'styled-components';


export const StyledButtonLinkLg = styled.a`
  background-color: #FF4700; 
  border:0.125rem solid #FF4700;
  box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06); 
  color: white; 
  display: inline-block;
  width: 32.8125rem; 
  height: 4rem; 
  line-height: 4rem; 
  text-align: center; 
  border-radius: 1.875rem; 
  font-family: Poppins, sans-serif;
  font-size: 1.5rem; 
  font-weight: bold; 
  text-decoration: none; 
  cursor: pointer; 
  
  &:hover {
    background-color: #ffffff; 
    color: #FF4700; 
  }

  /* Media Queries */
  
  /* Para pantallas medianas como tablets */
  @media (max-width: 768px) {
    width: 24rem; 
    font-size: 0.875rem; 
    line-height: 3.5rem; /* Ajuste para mantener centrado el texto */
  }

  /* Para pantallas pequeñas como móviles */
  @media (max-width: 480px) {
    width: 90%; 
    font-size: 0.70rem; 
    line-height: 3rem; 
    height: 3rem; 
    border-radius: 20px; 
  }
`;