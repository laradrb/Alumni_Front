import React from 'react';
import JobOfferCard from './JobOfferCard';
import { ApplicationFormContainer,Title } from './styledJobApplicationForm';

const JobApplicationForm = () => {
  return (
    <ApplicationFormContainer>
            <Title>OFERTA</Title>
      <JobOfferCard />
    </ApplicationFormContainer>
  );
};

export default JobApplicationForm;