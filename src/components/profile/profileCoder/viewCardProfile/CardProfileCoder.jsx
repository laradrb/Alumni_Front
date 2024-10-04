import React from 'react';
import { Link } from 'react-router-dom';
import SmallButton from '../../../atom/SmallButton'; 
import CertificateButton from '../../../atom/CertificateButton';
import { CardContainer, CardView, ImageContainer, EditButton, CardContent, AboutMe, ButtonContainer, NameCoder, Promotion } from './styledCardProfileCoder';

const Card = ({ name, subtitle, description }) => {
return (
    <CardContainer>
    <CardView>
        <ImageContainer>
        <img src="https://via.placeholder.com/184x206" alt="Profile" />
        </ImageContainer>
        <CardContent>
        <NameCoder>{name || 'Your Name'}</NameCoder>
        <Promotion>{subtitle || 'Subtitle'}</Promotion>
        <AboutMe>
            {description || 'Write something about yourself...'}
        </AboutMe>
        <ButtonContainer>
            <SmallButton 
            type="button" 
            aria-pressed="false" 
            aria-label="Linkedin"
            >
            Linkedin
            </SmallButton>
            <SmallButton 
            type="button" 
            aria-pressed="false" 
            aria-label="GitHub"
            >
            GitHub
            </SmallButton>
            <SmallButton 
            type="button" 
            aria-pressed="false" 
            aria-label="Correo"
            >
            Correo
            </SmallButton>
        </ButtonContainer>
        </CardContent>
        <EditButton>
        <Link to="/settingsCoder">
        <CertificateButton
        role="button" 
            aria-pressed="false"
            aria-label="Editar Perfil">
            Editar Perfil
        </CertificateButton>
        </Link>
        </EditButton>
    </CardView>
    </CardContainer>
);
};

export default Card;