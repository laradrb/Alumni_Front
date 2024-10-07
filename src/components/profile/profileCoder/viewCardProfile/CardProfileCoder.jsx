import React from 'react';
import { Link } from 'react-router-dom';
import SmallButton from '../../../atom/SmallButton'; 
import EditButton from '../../../atom/EditButton';
import { CardContainer, CardView, ImageContainer, AboutMe, ButtonContainer, NameCoder, Promotion, NameEditContainer } from './styledCardProfileCoder';

const Card = ({ name, subtitle, description }) => {
return (
    <CardContainer>
        <ImageContainer>
            <img src="https://via.placeholder.com/184x206" alt="Profile" />
        </ImageContainer>
        <CardView>
            <NameEditContainer>
                <NameCoder>{name || 'Your Name'}</NameCoder>
                <Link to="/settingsCoder" style={{ textDecoration: 'none' }}>
                    <EditButton
                        role="button" 
                        aria-pressed="false"
                        aria-label="Editar Perfil">
                        Editar Perfil
                    </EditButton>
                </Link>
            </NameEditContainer>
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
        </CardView>
    </CardContainer>
);
};

export default Card;
