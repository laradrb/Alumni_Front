import React from 'react';
import { JobOfferCardContainer} from './styledJobOfferCard';
import JobOfferInfo from '../viewCardJobOffer/JobOfferInfo';
import JobOfferSkills from '../viewCardJobOffer/JobOfferSkills';
import { ApplicationFormContainer,Title } from './styledJobOfferView';

const JobOfferView = () => {
  return (
    <ApplicationFormContainer>
            <Title>OFERTA</Title>
      <JobOfferCardContainer>
      {/* Información del trabajo */}
      <JobOfferInfo />
      {/* Habilidades requeridas */}
      <JobOfferSkills />
    </JobOfferCardContainer>
    </ApplicationFormContainer>
  );
};

export default JobOfferView;