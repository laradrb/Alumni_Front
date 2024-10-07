import React from 'react';
import {
  Container,
  Title,
  DivisionLine,
  ColumnsContainer,
  Column,
  ColumnTitle,
  SkillList,
  SkillItem
} from './styledJobOfferSkills';

const JobOfferSkills = ({
  skillsFrontEnd = [],
  skillsBackEnd = [],
  skillsExperience = [],
  skillsAvailability = [],
  skillslanguage = []
}) => {
  return (
    <Container>
        <DivisionLine />
            <Title>Requisitos</Title>
                <ColumnsContainer>
        <Column >
          <ColumnTitle>Front-end</ColumnTitle>
          <SkillList>
            {skillsFrontEnd.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </Column>
        <Column >
          <ColumnTitle>Back-end</ColumnTitle>
          <SkillList>
            {skillsBackEnd.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillList>
        </Column>
        <Column >
          <ColumnTitle>Experiencia</ColumnTitle>
          <SkillList>
            {skillsExperience.map((item, index) => (
              <SkillItem key={index}>{item}</SkillItem>
            ))}
          </SkillList>
        </Column>
        <Column >
          <ColumnTitle>Disponibilidad</ColumnTitle>
          <SkillList>
            {skillsAvailability.map((item, index) => (
              <SkillItem key={index}>{item}</SkillItem>
            ))}
          </SkillList>
        </Column>
        <Column >
          <ColumnTitle>Idiomas</ColumnTitle>
          <SkillList>
            {skillslanguage.map((language, index) => (
              <SkillItem key={index}>{language}</SkillItem>
            ))}
          </SkillList>
        </Column>
      </ColumnsContainer>
    </Container>
  );
};

export default JobOfferSkills;

