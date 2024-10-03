import React from "react";
import SkillsCard from "../skills/SkillsForm";
import { AppContainer, Container, Container6 } from "../skills/styledSkillsForm";

const skillsFrontEnd = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", 
  "Vue.js", "Angular", "Svelte", "Sass", "Less", 
  "Bootstrap", "Tailwind CSS", "Styled Components", "Alpine.js", "Mithril.js", "Next.js", "Gatsby.js", "Pug", "Jest", "Vite", "Parcel"
];

const skillsBackEnd = [
  "Java", "PostgreSQL", "Spring Boot", "Postman", "APIRest", 
  "Python", "Flask", "Ruby", "Ruby on Rails", "PHP", "Laravel", "Codelgniter", "Symfony", "Jakarta EE", "C#", "ASP.NET Core", "Go", "Rust", "Kotlin", "Ktor", "Swift"
];

const skillsLanguage = [
    "Español", "Inglés", "Francés", "Alemán", "Italiano", 
    "Portugués", "Ruso", "Chino", "Japonés", "Árabe", "Coreano", "Turco", "Hindi", "Polaco", "Sueco", "Noruego", "Griego", "Holandés", "Hebreo", "Tailandés", "Finlandés"
];

const skillsAvailability = [
  "Inmediata", "A Tiempo Completo", "A Tiempo Parcial", "Por Proyecto", "Temporal"
];

const skillsModality = [
    "Presencial", "Híbrido", "Teletrabajo"
];

const skillsExperience = [
    "Junior (1-2 años)", "Semi-Senior (2-5 años)", "Senior (+5 años)"
];

const skillsGender = [
    "Mujer", "Hombre", "Prefiero no decirlo"
];

const CompleteSkills = () => {
  return (
    <AppContainer>
      <Container>
        <SkillsCard title="Front-End" skills={skillsFrontEnd} />
        <SkillsCard title="Back-End" skills={skillsBackEnd} />
        <SkillsCard title="Idiomas" skills={skillsLanguage} />
        <Container6>
        <SkillsCard title="Disponibilidad" skills={skillsAvailability} />
        <SkillsCard title="Modalidad" skills={skillsModality} />
        <SkillsCard title="Experiencia" skills={skillsExperience} />
        <SkillsCard title="Género" skills={skillsGender} />
        </Container6>
      </Container>
    </AppContainer>
  );
};

export default CompleteSkills;