import React from "react";
import { Container, Container2, Text, Container3, Container4, InnerText} from "./styledSkillsForm";

const SkillsCard = () => {
    return (
    <Container>
        <Container2>
            <Text>Front-End</Text>
                <Container3>
                    <Container4>
                        <InnerText>HTML</InnerText>
                    </Container4>
                </Container3>
        </Container2>
    </Container>
    );
};

export default SkillsCard;