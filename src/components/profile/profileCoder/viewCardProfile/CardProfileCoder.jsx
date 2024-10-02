import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SmallButton from '../../../atom/SmallButton'; 
import CertificateButton from '../../../atom/CertificateButton';

const Card = ({ name, subtitle, description }) => {
return (
    <CardContainer>
    <CardView>
        <ImageContainer>
        <img src="https://via.placeholder.com/184x206" alt="Profile" />
        </ImageContainer>
        <CardContent>
        <h2>{name || 'Your Name'}</h2>
        <h4>{subtitle || 'Subtitle'}</h4>
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
        <Link to="/settingsCoder">
        <CertificateButton
        type="button" 
            aria-pressed="false" 
            aria-label="Editar Perfil">
            Editar Perfil
        </CertificateButton>
        </Link>
    </CardView>
    </CardContainer>
);
};


const CardContainer = styled.div`
    display: flex;
    widht:76.118rem;
    height: 26.188rem;
    margin-top: 4.813rem;
    margin-left: 6.969rem;
    margin-right: 6.969rem;
    border-radius: 1.24rem;
`;


const CardView = styled.div`
position: relative;
display: flex;
align-items: flex-start;
width: 74.0625rem;
`;

const ImageContainer = styled.div`
margin-right: 1.25rem;

img {
    width: 11.5rem;
    height: 12.875rem;
    border-radius: 0.5rem;
    object-fit: cover;
    margin-top: 4.188rem;
    margin-right: 1.75rem;
    margin-left: 1.75rem;
}
`;


const CertificadButton = styled(SmallButton)`
position: absolute;
top: 0.625rem;   
left: 0.625rem;  
width: 6.9375rem;  
height: 1.75rem;   
margin-top: 13.4375rem; 
margin-left: 71.6875rem;
`;



const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 46.6875rem;
margin-top: 3.188rem;
`;

const AboutMe = styled.p`
width: 46.6875rem;
height: 5.9375rem;
font-size: 1rem;
color: #333;
margin: 0.625rem 0;
overflow: hidden;
text-overflow: ellipsis;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 0.625rem;
margin-top: 0.9375rem;


`;

const H2 = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 1.25rem;
margin: 0; 
margin-top: 14.8125rem; 
margin-left: 24.6875rem;
`;

const H4 = styled.h4`
font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 1.125rem;
color: #666;
margin-top: 17.25rem; 
margin-left: 24.6875rem;
`;

export default Card;