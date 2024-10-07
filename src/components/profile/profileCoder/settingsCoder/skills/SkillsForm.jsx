import React from "react";
import { Container2, Text, Container3, SkillContainer, SkillCheckbox, InnerText } from "./styledSkillsForm";

const SkillsCard = ({ title, skills, selectedSkills, onSkillToggle }) => {
  return (
    <Container2>
      <Text>{title}</Text>
      <Container3>
        {skills.map((skill) => (
          <SkillContainer key={skill}>
            <SkillCheckbox
              isSelected={selectedSkills.includes(skill)}
              onClick={() => onSkillToggle(skill)}
              aria-label={skill}
              checked={selectedSkills.includes(skill)}
            />
            <InnerText>{skill}</InnerText>
          </SkillContainer>
        ))}
      </Container3>
    </Container2>
  );
};

export default SkillsCard;