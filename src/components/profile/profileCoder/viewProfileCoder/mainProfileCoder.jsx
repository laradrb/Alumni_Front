import React from 'react';
import ProfileView from '../viewCardSkills/ProfileView';
import CertificateCard from '../viewCardCertificates/CertificateCard';
import CardProfileCoder from '../viewCardProfile/CardProfileCoder';
import { MainContainer, SubContainer, SkillsSection, CertificationsSection, VerticalLine } from './styledmainProfileCoder';
import HorizontalLine from '../../../../assets/img/horizontalLine.png';

const MainProfileCoder = () => {
  return (
    <MainContainer>
        <CardProfileCoder />
      <img src={HorizontalLine} alt='Linea horizontal naranja'
      style={{marginLeft: '2rem', marginTop: '3.5rem'}}/>
      <SubContainer>
        <SkillsSection>
          <ProfileView />
        </SkillsSection>
        <VerticalLine />
        <CertificationsSection>
          <CertificateCard
            titulo="Certificado de Desarrollo Web"
            escuela="FreeCodeCamp"
            fechaInicio="Enero 2021"
            fechaFin="Diciembre 2021"
            imageUrl="https://via.placeholder.com/150"
          />
        </CertificationsSection>
      </SubContainer>
    </MainContainer>
    
  );
};

export default MainProfileCoder;