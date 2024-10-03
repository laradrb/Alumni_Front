import React, { useState } from "react";
import { Container2, Text, Container3, SkillContainer, SkillCheckbox, InnerText } from "./styledSkillsForm";

const SkillsCard = ({ title, skills }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prevSelected) =>
      prevSelected.includes(skill)
        ? prevSelected.filter((s) => s !== skill)
        : [...prevSelected, skill]
    );
  };

  return (
      <Container2>
        <Text>{title}</Text>
        <Container3>
          {skills.map((skill) => (
            <SkillContainer key={skill}>
              <SkillCheckbox
                isSelected={selectedSkills.includes(skill)}
                onClick={() => handleSkillToggle(skill)}
              />
              <InnerText>{skill}</InnerText>
            </SkillContainer>
          ))}
        </Container3>
      </Container2>
  );
};

export default SkillsCard;