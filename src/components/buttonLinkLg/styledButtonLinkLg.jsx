import styled from 'styled-components';

// Estilos para el botón de enlace
export const StyledButtonLinkLg = styled.a`
  background-color: #FF4700; 
  border:0.125rem solid #FF4700;
  color: white; 
  display: inline-block;
  width: 32.8125rem; 
  height: 4rem; 
  line-height: 4rem; 
  text-align: center; 
  border-radius: 1.875rem; 
  font-family: Poppins, Helvetica, Arial, sans-serif;
  font-size: 1rem; 
  font-weight: bold; 
  text-decoration: none; 
  cursor: pointer; 
  
  &:hover {
    background-color: #ffffff; /* Color de fondo al hacer hover */
    color: #FF4700; /* Color de texto al hacer hover */
  }

  /* Media Queries */
  
  /* Para pantallas medianas como tablets */
  @media (max-width: 768px) {
    width: 24rem; /* Reducimos el ancho del botón */
    font-size: 0.875rem; /* Tamaño de texto ligeramente más pequeño */
    line-height: 3.5rem; /* Ajuste para mantener centrado el texto */
  }

  /* Para pantallas pequeñas como móviles */
  @media (max-width: 480px) {
    width: 90%; /* El botón ocupa el 100% del ancho de la pantalla */
    font-size: 0.70rem; /* Texto más pequeño en pantallas pequeñas */
    line-height: 3rem; /* Ajustamos el tamaño vertical */
    height: 3rem; /* Botón más bajo */
    border-radius: 20px; /* Bordes ligeramente menos redondeados */
  }
`;