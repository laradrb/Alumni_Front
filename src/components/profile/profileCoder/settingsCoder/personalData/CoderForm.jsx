import React, { useState } from 'react';
import CVButton from '../../../../atom/CVButton';
import DropdownMediumButton from '../../../../atom/DropdownMediumButton';
import TextareaAbout from '../../../../atom/TextareaAbout';
import GlobalStyle from '../../../../../styled/GlobalStyle';
import { ProfileCoderContainer, FormSectionCoderprofile, FormSectionProfile2, SectionWrapper, ImageSectionCoderProfile, StyledImageCoderProfile, StyledCoderProfile, StyledCoderProfile1, SectionButton,StyledCoderSectionDrowdowButton} from './styledCoderForm';
import Pilar from '../../../../../assets/img/Pilar.jpg';

const CoderForm = () => {
    const [cvFile, setCvFile] = useState(null);

    const [selectedOptionSchool, setSelectedOptionSchool] = useState('');

    const schoolOptions = ['Factoria F5 Barcelona', 'Factoria F5 Madrid', 'Factoria F5 Asturias'];
    const handleSchoolSelect = (option) => {
        setSelectedOptionSchool(option);
    };

    const handleCVUpload = (file) => {
        setCvFile(file);
        console.log('CV seleccionado:', file.name);
        // Aquí puedes añadir lógica adicional para manejar el archivo
        // Por ejemplo, subirlo a un servidor o procesarlo
    };

    return (
        <>
        <GlobalStyle/>
            <ProfileCoderContainer>
                <SectionWrapper>
                    <ImageSectionCoderProfile>
                        <StyledImageCoderProfile 
                        src={Pilar}
                        alt="Imagen de ex-coder" 
                        aria-hidden="true" 
                    />
                    </ImageSectionCoderProfile>
                    <SectionButton>
                    <CVButton onChange={handleCVUpload}>
                        {cvFile ? 'CV Subido' : 'Agrega tu CV'}
                    </CVButton>
                    </SectionButton>
                </SectionWrapper>    
                    <FormSectionCoderprofile>
                        <StyledCoderProfile
                            type="text" 
                            placeholder="Nombre" 
                            aria-label="Insertar Nombre" />
                        <StyledCoderProfile
                            type="text" 
                            placeholder="Apellidos" 
                            aria-label="Insertar Apellidos" /> 
                        <StyledCoderProfile
                            type="text" 
                            placeholder="Email" 
                            aria-label="Insertar Email" />
                        <StyledCoderProfile
                            type="password" 
                            placeholder="Password" 
                            aria-label="Insertar Contraseña" />
                        <StyledCoderProfile
                            type="password" 
                            placeholder="Confirmar Password" 
                            aria-label="Insertar Confirmar contraseña" />
                        <StyledCoderSectionDrowdowButton> 
                        <DropdownMediumButton 
                            options={schoolOptions}
                            onSelect={handleSchoolSelect}
                            buttonText={selectedOptionSchool || "Escuela"}
                            aria-label="Seleccionar opción de escuela"
                        />  
                        </StyledCoderSectionDrowdowButton> 
                        </FormSectionCoderprofile>     
                        <FormSectionProfile2> 
                        <TextareaAbout
                            type="textarea"
                            placeholder="Sobre mí" 
                            aria-label="Insertar Sobre mí" />      
                        <StyledCoderProfile1
                            type="url" 
                            placeholder="GitHub" 
                            aria-label="Insertar github" /> 
                        <StyledCoderProfile1
                            type="url"  
                            placeholder="Linkedin" 
                            aria-label="Insertar linkedin" />       
                </FormSectionProfile2>
            </ProfileCoderContainer> 
        </>      
    );
};

export default CoderForm;


