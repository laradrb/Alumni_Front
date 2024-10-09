import React from 'react'
import DataFormOffer from '../dataFormOffer/settingsFormOffer/DataFormOffer';
import CompleteSkills from '../skillsCardsOffer/SkillsCardsOffer';
import { H1, HorizontalLine } from './styledCompleteForm';

const CompleteFormOffer = () => {

  return (
    <div>
      <H1>Formulario de Ofertas</H1>
      <DataFormOffer />
      <HorizontalLine />
      <CompleteSkills/>
    </div>
  );
};

export default CompleteFormOffer;
