// styledJobOfferCard.js
import styled from 'styled-components';

// Componente de Estilo para la Card
export const JobOfferCardContainer = styled.div`
  border: 0.125rem solid #FF4700; // Borde naranja (2px a rem)
  width: 74.0625rem; // 1185px a rem
  max-width: 100%;
  padding: 3.625rem 3.625rem 2.375rem 2.625rem; // 58px, 58px, 38px, 42px a rem
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 1.25rem; // 20px a rem
  box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

// Contenedor del Botón Aplicar
export const ApplyButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  margin-top: 0.3125rem; // 5px a rem
  margin-bottom: 6.25rem; // 100px a rem
  margin-left: 13.875rem; // 222px a rem, ajustado según el diseño
`;
