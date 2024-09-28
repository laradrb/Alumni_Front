import React from "react";
import { Container, Title, Title2, Container2, Container3, Text, Container4, VerticalLine, Container5} from "./styledOrangeCard";

const OrangeCard = () => {
    return (
    <Container>
        <Container2>
            <Container3>
            <Title>1378</Title>
            <Title2>Personas graduadas</Title2>
            </Container3>
            <VerticalLine />
            <Container5>
            <Title>35</Title>
            <Title2>Empresas conectadas</Title2>
            </Container5>
        </Container2>
        <Container4>
        <Text>Nadie Comprende Mejor Los Retos De Un Desarrollador Que Otro Experto En El Campo. Únete A Nuestra Comunidad Y Encuentra El Soporte Que Necesitas Para Crecer.</Text>
        </Container4>
    </Container>
    );
};

export default OrangeCard;