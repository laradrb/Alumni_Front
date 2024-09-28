import React from 'react';
import alumni from '../../assets/img/alumni.jpg';
import styled from 'styled-components';
import GlobalStyle from '../../styled/GlobalStyle'


const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 67.313rem;
    height: 28.125rem;
    margin: 12.5rem auto;
`;
const Paragraph = styled.p`
    font-size: 2rem;
    text-align: center;
    color: #020100;
    font-style: normal;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    text-align: center;
    margin-right: 11.344rem;
    margin-left: 11.344rem; 
`;
const CentralImage = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: center;
    margin-top: 5rem;
`;
const StyledCentralImage = styled.img`
    width: 75rem;
    height: 42.188rem;
    border-radius: 1.875rem;
    object-fit: cover;
    margin-bottom: 6.875rem;
`;


const ImageComponent = () => {
    return (
        <>
        <GlobalStyle/>
            <Paragraph>
                ¡Felicidades por vuestra graduación!
                    Este logro refleja vuestra <br/>dedicación, esfuerzo y pasión por el aprendizaje.
                    Habéis superado<br/> cada desafío con perseverancia, y ahora comienza una nueva<br/> estapa llena de oportunidades. Estamos seguros de que el futuro<br/> os deparará nuevos retos y oportunidades en el mundo de la <br/> tecnología.
                    ¡Enhorabuena Coders!
            </Paragraph>
            <CentralImage>
                <StyledCentralImage src={alumni} alt="Alumni" />
            </CentralImage> 
        </>      
    );
};

export default ImageComponent;
