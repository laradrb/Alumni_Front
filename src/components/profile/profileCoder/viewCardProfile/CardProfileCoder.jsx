import React from 'react';
import styled from 'styled-components';
import SmallButton from '../../../atom/SmallButton'; 

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
    </CardView>
    </CardContainer>
);
};

const StyledSmallButton = styled(SmallButton)`
width: 5.188rem;  
height: 1.75rem;  
font-size: 0.8125rem;  
font-family: 'Poppins', sans-serif;
font-weight: 500; 

`;
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
display: flex;
align-items: flex-start;
padding: 1.25rem;
background-color: #fff;
border: 0.0625rem solid #ccc;
border-radius: 0.5rem;
box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
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


/*button {
    flex: none;
    padding: 0.625rem 1.25rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
}*/
`;

const h2 = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 1.25rem;
margin: 0; 

`;

const h4 = styled.h4`
font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 1.125rem;
color: #666;
margin: 0.3125rem 0 0 0; 
`;
export default Card;