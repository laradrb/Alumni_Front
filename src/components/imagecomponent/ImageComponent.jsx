import React from 'react';
import alumni from '../../assets/img/alumni.jpg';
import { ParagraphContainer, Paragraph, CentralImage, StyledCentralImage} from './styledImageComponent';
import GlobalStyle from '../../styled/GlobalStyle'

const ImageComponent = () => {
    return (
        <>
        <GlobalStyle/>
            <ParagraphContainer>
            <Paragraph>
                ¡Felicidades por vuestra graduación!
                    Este logro refleja vuestra <br/>dedicación, esfuerzo y pasión por el aprendizaje.
                    Habéis superado cada desafío con perseverancia, y ahora comienza una nueva estapa llena de oportunidades. Estamos seguros de que el futuro
                    os deparará nuevos retos y oportunidades en el mundo de la tecnología.
                    ¡Enhorabuena Coders!
            </Paragraph>
            </ParagraphContainer>
            <CentralImage>
                <StyledCentralImage src={alumni} alt="Alumni" />
            </CentralImage> 
        </>      
    );
};

export default ImageComponent;
