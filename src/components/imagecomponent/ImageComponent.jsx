import React from 'react';
import alumni from '../../assets/img/alumni.jpg';
import styled from 'styled-components';
import GlobalStyle from '../../styled/GlobalStyle'


const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 73.875rem;
    margin-left: 11.344rem;
    margin-right: 11.344rem;
    width: 67.313rem;
    height: 28.125rem;
    font-size: 2rem;
    color: #020100;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    
`;
const CentralImage = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: center;
    margin-top: -5rem;
`;
const StyledCentralImage = styled.img`
    width: 75rem;
    height: 42.88rem;
    border-radius: 1.875rem;
    object-fit: cover;
    margin-bottom: 13.75rem;
`;


const ImageComponent = () => {
    return (
        <>
        <GlobalStyle/>
            <Paragraph>
                ¡Felicidades por vuestra graduación!
                    Este logro refleja vuestra dedicación, esfuerzo y pasión por el aprendizaje.
                    Habéis superado cada desafío con perseverancia, y ahora comienza una nueva estapa llena de oportunidades. Estamos seguros de que el futuro os deparará nuevos retos y oportunidades en el mundo de la tecnología.
                    ¡Enhorabuena Coders!
            </Paragraph>
            <CentralImage>
                <StyledCentralImage src={alumni} alt="Alumni" />
            </CentralImage> 
        </>      
    );
};

export default ImageComponent;
