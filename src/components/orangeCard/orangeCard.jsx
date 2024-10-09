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
        <Text>Nadie comprende mejor los retos de quienes se dedican al desarrollo que otras personas expertas en el campo. Únete a nuestra comunidad y encuentra el apoyo que necesitas para crecer.</Text>
        </Container4>
    </Container>
    );
};

export default OrangeCard;