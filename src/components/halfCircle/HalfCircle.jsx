import React from "react";
import orangeCircle from "../../assets/img/orangeCircle.jpg";
import { Container, Text, Container2, ImageWrapper } from "./styledHalfCircle";

const HalfCircle = () => {
    return (
        <Container>
            <ImageWrapper>
                <img
                    src={orangeCircle}
                    alt="orange half circle with black oval in the middle"
                />
            </ImageWrapper>
        <Container2>
            <Text>Si eres un desarrollador en busca de nuevas oportunidades como si eres una empresa que necesita talento especializado para sus proyectos, en Alumni te brindamos las herramientas y conexiones necesarias para alcanzar el próximo nivel. <br></br>Desarrolladores talentosos y empresas con visión se unen aquí para avanzar juntos hacia un futuro innovador.</Text>
        </Container2>
        </Container>
    );
};

export default HalfCircle;