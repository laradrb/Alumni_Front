import React from "react";
import orangeCircle from "../../assets/img/geometric.png";
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
            <Text>Si te dedicas al desarrollo y buscas nuevas oportunidades, o si eres una empresa que necesita talento especializado para sus proyectos, en Alumni te brindamos las herramientas y conexiones necesarias para alcanzar el próximo nivel. <br></br>Personas desarrolladoras talentosas y organizaciones con visión se unen aquí para avanzar juntas hacia un futuro innovador.</Text>
        </Container2>
        </Container>
    );
};

export default HalfCircle;