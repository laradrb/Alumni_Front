import React, { useState } from 'react';
import SkillCard from './SkillCard'; 
import { TitleSkill, GeneraContainerSkill } from './styleCardSkill';

const ProfileView = () => {
  // Estado para almacenar las habilidades seleccionadas
  const [frontendSkills, setFrontendSkills] = useState(['HTML', 'CSS']);
  const [backendSkills, setBackendSkills] = useState([]);
  const [languageSkills, setLanguageSkills] = useState(['English']);

  const addFrontendSkill = () => {
    setFrontendSkills([...frontendSkills, 'JavaScript']);
  };

  const addBackendSkill = () => {
    setBackendSkills([...backendSkills, 'Node.js']);
  };

  const addLanguageSkill = () => {
    setLanguageSkills([...languageSkills, 'Spanish']);
  };

  return (
    <GeneraContainerSkill>
    
      <TitleSkill>Habilidades y Tecnologías</TitleSkill>
    

      <SkillCard 
        title="Frontend"
        skills={frontendSkills}
        onAddSkill={addFrontendSkill}
      />
      
      {/* Card for Backend Skills */}
      <SkillCard 
        title="Backend"
        skills={backendSkills}
        onAddSkill={addBackendSkill}
      />

      {/* Card for Languages */}
      <SkillCard 
        title="Idiomas"
        skills={languageSkills}
        onAddSkill={addLanguageSkill}
      />
      </GeneraContainerSkill>
   
  );
};

export default ProfileView;



