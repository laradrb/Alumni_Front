import React from 'react';
import ProfileView from '../components/profile/profileCoder/viewCardSkills/ProfileView';
import CertificateCard from '../components/profile/profileCoder/viewCardCertificates/CertificateCard';

const ProfileCoder = () => {
  return (
    <MainContainer>
      <SubContainer>
        {/* Sección de Habilidades y Tecnologías */}
        <SkillsSection>
          <ProfileView />
        </SkillsSection>

        {/* Sección de Certificaciones */}
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

export default ProfileCoder;