import React, { useState } from "react";
import { SidebarFilter, FilterTitle, FilterList,ShowMoreButton,DropdownContainer } from './StyledFilters';
import SkillsCard from '../settingsCoder/skills/SkillsForm';


const skillsFrontEnd = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Vue.js","Angular", "Svelte", "Sass", "Less", "Bootstrap", "Tailwind CSS", 
"Styled Components", "Alpine.js", "Mithril.js", "Next.js", "Gatsby.js", 
"Pug", "Jest", "Vite", "Parcel", "Webpack", "Grunt", "Gulp", 
"Electron", "Storybook", "Figma", "Sketch", "Adobe XD", "Framer Motion"];

const skillsBackEnd = ["Java", "PostgreSQL", "Spring Boot", "Postman", "APIRest","Python", "Flask", "Django", "Node.js", "Express.js", "Ruby", 
"Ruby on Rails", "PHP", "Laravel", "Codelgniter", "Symfony", 
"C#", "ASP.NET Core", "GraphQL", "MongoDB", "MySQL", 
"Oracle", "Redis", "Elasticsearch", "Docker", "Kubernetes", 
"RabbitMQ", "Kafka", "Nginx", "AWS", "Azure", "Google Cloud"];

const skillsExperience = ["Junior (1-2 años)", "Semi-Senior (2-5 años)", "Senior (+5 años)"];

const skillsAvailability = ["Inmediata", "A Tiempo Completo", "A Tiempo Parcial","Por Proyecto", "Temporal"];

const skillsLanguage = ["Español", "Inglés", "Francés", "Alemán", "Italiano","Portugues","Ruso","Chino","Japones","Arabe","Coreano","Polaco","Sueco","Noruego","Griego","Holandés","Hebreo","Tailandés","Finlandés"];

const skillsGender = ["Mujer", "Hombre", "Prefiero no decirlo"];



const Filters = ({ onFilterChange }) => {
const [selectedSkills, setSelectedSkills] = useState([]);
const [expandedCategories, setExpandedCategories] = useState({});

const handleSkillToggle = (skill) => {
    const updatedSkills = selectedSkills.includes(skill)
    ? selectedSkills.filter((s) => s !== skill)
    : [...selectedSkills, skill];

    setSelectedSkills(updatedSkills);
    onFilterChange(updatedSkills); 
};
const handleShowMore = (category) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category], 
        }));
    };

return (
    <SidebarFilter>
    <FilterTitle>Filtros</FilterTitle>
    <FilterList>
    <SkillsCard
            title="Front-End"
            skills={expandedCategories.frontEnd ? skillsFrontEnd : skillsFrontEnd.slice(0, 5)} 
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
            customsStyles={{ border: 'none' }}
        />
        <DropdownContainer>
        {skillsFrontEnd.length > 5 && (
            <ShowMoreButton onClick={() => handleShowMore("frontEnd")}>
            {expandedCategories.frontEnd ? "Ver menos" : "Ver más"} 
            </ShowMoreButton>
        )}
        </DropdownContainer>
        
        <SkillsCard
            title="Back-End"
            skills={expandedCategories.backEnd ? skillsBackEnd : skillsBackEnd.slice(0, 5)}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
            customsStyles={{ border: 'none' }}
        />
        <DropdownContainer>
        {skillsBackEnd.length > 3 && (
            <ShowMoreButton onClick={() => handleShowMore("backEnd")}>
            {expandedCategories.backEnd ? "Ver menos" : "Ver más"}
            </ShowMoreButton>
        )}
        </DropdownContainer>
        
        <SkillsCard
            title="Experiencia"
            skills={expandedCategories.experience ? skillsExperience : skillsExperience.slice(0, 3)}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
            customsStyles={{ border: 'none' }}
        />
        <DropdownContainer>
        {skillsExperience.length > 3 && (
            <ShowMoreButton onClick={() => handleShowMore("experience")}>
            {expandedCategories.experience ? "Ver menos" : "Ver más"}
            </ShowMoreButton>
        )}
        </DropdownContainer>

        <SkillsCard
            title="Disponibilidad"
            skills={expandedCategories.availability ? skillsAvailability : skillsAvailability.slice(0, 3)}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
            customsStyles={{ border: 'none' }}
        />
        <DropdownContainer>
        {skillsAvailability.length > 3 && (
            <ShowMoreButton onClick={() => handleShowMore("availability")}>
            {expandedCategories.availability ? "Ver menos" : "Ver más"}
            </ShowMoreButton>
        )}
        </DropdownContainer>

        <SkillsCard
            title="Idiomas"
            skills={expandedCategories.language ? skillsLanguage : skillsLanguage.slice(0, 3)}
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
            customsStyles={{ border: 'none' }}
        />
        <DropdownContainer>
        {skillsLanguage.length > 3 && (
            <ShowMoreButton onClick={() => handleShowMore("language")}>
            {expandedCategories.language ? "Ver menos" : "Ver más"}
            </ShowMoreButton>
        )}
        </DropdownContainer>
    </FilterList>
    </SidebarFilter>
);
};

export default Filters;
