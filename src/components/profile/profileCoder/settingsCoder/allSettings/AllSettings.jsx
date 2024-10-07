import React from "react";
import CoderForm from "../personalData/CoderForm";
import CompleteSkills from "../completeSkills/CompleteSkillsForm";
import { MainContainer, H1, HorizontalLine } from "./styledAllSettings";


const MainSettingsCoder = () => {
    return (
    <div>
        <H1>Ajustes de Perfil</H1>
            <MainContainer>
                <CoderForm/>
                <HorizontalLine />
                <CompleteSkills/>
            </MainContainer>
    </div>
    );
};

export default MainSettingsCoder;