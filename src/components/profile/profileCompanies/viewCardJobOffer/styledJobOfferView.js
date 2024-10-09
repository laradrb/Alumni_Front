import styled from "styled-components";

export const ApplicationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 74.063rem;
  max-width: 90rem;
  height: auto; 
  margin: 3rem auto; 
`;
 
// Título de la Oferta
export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem; 
  font-weight: bold;
  color: #FF4700; 
  text-align: center;
  margin-bottom: 3.31rem; 
`;

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
