import { SkillList, SkillItem, CardContainerSkill, CardTitleSkill, GeneraContainerSkill, ContainerSkills } from "./styleCardSkill";
import styled from "styled-components";

const SkillCard = ({ title, skills, }) => {
    return (
      <>
          <ContainerSkills>
        <CardTitleSkill>{title}</CardTitleSkill>
      <CardContainerSkill>
        <SkillList>
        {skills.length > 0 && 
          skills.map((skill, index) => <SkillItem key={index}>{skill}</SkillItem>)
        }
        </SkillList>
      </CardContainerSkill>
      </ContainerSkills>
      </>
    );
  };
  
  export default SkillCard;
