import React from "react";
import home from "../../assets/img/home.jpg";
import { Container, Title, Text, Subtitle, Container2, ImageWrapper } from "./styledFirstDivision";

const About = () => {
    return (
        <Container>
            <ImageWrapper>
                <img
                    src={home}
                    alt="3 developers working together"
                />
            </ImageWrapper>
        <Container2>
            <Title>ALUMNI</Title>
            <Subtitle>Conectando Coders con Oportunidades Reales</Subtitle>
            <Text>Alumni es una comunidad diseñada para conectar a empresas con los coders más talentosos y capacitados. Sabemos que el mundo de la tecnología avanza rápidamente, y encontrar profesionales con las habilidades adecuadas es un reto. Por eso, en Alumni, creamos un espacio donde las empresas pueden descubrir coders que se ajusten exactamente a lo que necesitan. </Text>
        </Container2>
        </Container>
    );
};

export default About;