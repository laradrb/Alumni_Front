import React, { useState } from "react";
import SkillsCard from "../skills/SkillsForm";
import SaveButton from "../../../../atom/SaveButton";
import { AppContainer, Container, Container6 } from "../skills/styledSkillsForm";
import { ContainerButtons } from "./styledCompleteSkills";

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
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prevSelected) =>
      prevSelected.includes(skill)
        ? prevSelected.filter((s) => s !== skill)
        : [...prevSelected, skill]
    );
  };

  const handleSaveChanges = () => {
    const data = { selectedSkills };
    
    fetch("/api/coder/save-skills/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos guardados con éxito:", data);
      })
      .catch((error) => {
        console.error("Error al guardar los datos:", error);
      });
  };

  const handleDeleteAccount = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.")) {
      fetch("/api/coder/delete-account/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Tu cuenta ha sido eliminada.");
            window.location.href = "/home";
          } else {
            alert("Hubo un error al intentar eliminar la cuenta.");
          }
        })
        .catch((error) => {
          console.error("Error al eliminar la cuenta:", error);
          alert("Hubo un error al intentar eliminar la cuenta.");
        });
    }
  };

  return (
    <AppContainer>
      <Container>
        <SkillsCard
          title="Front-End"
          skills={skillsFrontEnd}
          selectedSkills={selectedSkills}
          onSkillToggle={handleSkillToggle}
        />
        <SkillsCard
          title="Back-End"
          skills={skillsBackEnd}
          selectedSkills={selectedSkills}
          onSkillToggle={handleSkillToggle}
        />
        <SkillsCard
          title="Idiomas"
          skills={skillsLanguage}
          selectedSkills={selectedSkills}
          onSkillToggle={handleSkillToggle}
        />
        <Container6>
          <SkillsCard
            title="Disponibilidad"
            skills={skillsAvailability}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
          />
          <SkillsCard
            title="Modalidad"
            skills={skillsModality}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
          />
          <SkillsCard
            title="Experiencia"
            skills={skillsExperience}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
          />
          <SkillsCard
            title="Género"
            skills={skillsGender}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
          />
          </Container6>
          <ContainerButtons>
          <SaveButton text="Borrar Cuenta" onClick={handleDeleteAccount} />
          <SaveButton text="Guardar Cambios" onClick={handleSaveChanges} />
          </ContainerButtons>
      </Container>
    </AppContainer>
  );
};

export default CompleteSkills;