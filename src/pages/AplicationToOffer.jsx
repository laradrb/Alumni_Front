import React from 'react';
import styled from 'styled-components';
import JobOfferCard from '../components/profile/profileCompanies/viewCardJobOffer/JobOfferCard';


// Contenedor Principal para Centrar el Contenido
const ApplicationPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 74.063rem;
  height: auto; 
  max-width: 90rem;
  margin: 0 auto; 
`;
 
// Título de la Oferta
const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem; // 32px a rem
  font-weight: bold;
  color: #FF4700; // Naranja Factoria
  text-align: center;
  margin-bottom: 3.31rem; // Espaciado inferior para separar del JobOfferCard
`;


// Componente Principal
const ApplicationToOffer = () => {
  return (
    <ApplicationPageContainer>
            <Title>OFERTA</Title>

      <JobOfferCard />
    </ApplicationPageContainer>
  );
};

export default ApplicationToOffer;

