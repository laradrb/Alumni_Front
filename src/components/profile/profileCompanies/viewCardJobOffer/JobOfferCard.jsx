import React from 'react';
import { JobOfferCardContainer, ApplyButtonContainer } from './styledJobOfferCard';
import JobOfferInfo from '../viewCardJobOffer/JobOfferInfo';
import JobOfferSkills from '../viewCardJobOffer/JobOfferSkills';
import Button110 from '../../../atom/Button110';

// Componente Principal
const JobOfferCard = () => {
  return (
    <JobOfferCardContainer>
      {/* Información del trabajo */}
      <JobOfferInfo />
      
      {/* Botón para aplicar debajo del JobDescription */}
      <ApplyButtonContainer>
        <Button110>Aplicar</Button110>
      </ApplyButtonContainer>
      
      {/* Habilidades requeridas */}
      <JobOfferSkills />
    </JobOfferCardContainer>
  );
};

export default JobOfferCard;


