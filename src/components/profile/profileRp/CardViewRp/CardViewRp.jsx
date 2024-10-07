import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileContainer, InfoContainer, ImageContainer, Name, School, Email, HeaderText, EditButton} from './styledCardViewRp';

const CardViewRp = ({ name, subtitle, description }) => {
return (
    <>
    <HeaderText>Mi Perfil</HeaderText>
    <ProfileContainer>
        <ImageContainer>
        <img src="https://via.placeholder.com/192x200" alt="Profile" />
        </ImageContainer>
        <InfoContainer>
        <Name>{name || 'Your Name'}</Name>
        <School>{subtitle || 'Subtitle'}</School>
        <Email> {description || 'correo'}</Email>
        <Link to="/settingsRp">
            <EditButton role="button" aria-pressed="false" aria-label="Editar Perfil">
            Editar Perfil
            </EditButton>
        </Link>
        </InfoContainer>
    </ProfileContainer>
    </>
);
};

export default CardViewRp;
