import React, { useState } from 'react';
import SmallButton from '../../../atom/SmallButton'
import DropdownMediumButton from '../../../atom/DropdownMediumButton'
import GlobalStyle from '../../../../styled/GlobalStyle';
import { ProfileRpTitle, ProfileRpContainer, SectionWrapper, ImageSectionRpProfile, StyledImageRpProfile, FormSectionRpProfile, StyledRpProfile, StyledRpSectionDrowdowButton, SectionButtonRp, FormSectionRpProfile1, StyledRpProfile1,SectionButtonRp2  } from './styledRpForm'



const RpForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [selectedOptionSchool, setSelectedOptionSchool] = useState('');

    const schoolOptions = ['Factoria F5 Barcelona', 'Factoria F5 Madrid', 'Factoria F5 Asturias'];
    const handleSchoolSelect = (option) => {
            setSelectedOptionSchool(option);
};

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
            setImagePreview(URL.createObjectURL(file));
    };

    return (
        <>
        <GlobalStyle/>
            <ProfileRpTitle>
                Ajustes de Perfíl
            </ProfileRpTitle>
            <ProfileRpContainer>
                <SectionWrapper>
                    <ImageSectionRpProfile>
                        <label htmlFor="profile-image-upload" className="cursor-pointer">
                            <StyledImageRpProfile 
                                src={imagePreview || 'default-profile.png'} 
                                alt="Imagen de Responsable de Formación" 
                                aria-hidden="true"
                            />
                            <input
                                id="profile-image-upload"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageUpload}
                            />
                        </label>
                    </ImageSectionRpProfile>   
                </SectionWrapper>    
                    <FormSectionRpProfile>
                        <StyledRpProfile
                            type="text" 
                            placeholder="Nombre" 
                            aria-label="Insertar Nombre de Responsable de Formación" />
                        <StyledRpProfile
                            type="text" 
                            placeholder="Apellidos" 
                            aria-label="Insertar Apellidos" /> 
                        <StyledRpSectionDrowdowButton> 
                            <DropdownMediumButton 
                                options={schoolOptions}
                                onSelect={handleSchoolSelect}
                                buttonText={selectedOptionSchool || "Escuela"}
                                aria-label="Seleccionar opción de escuela"
                            />    
                        </StyledRpSectionDrowdowButton>
                        <SectionButtonRp>
                            <SmallButton type="submit" 
                                aria-pressed="false" 
                                aria-label="Borrar cuenta"
                            >
                            Borrar cuenta
                            </SmallButton>
                        </SectionButtonRp>           
                    </FormSectionRpProfile>                 
                    <FormSectionRpProfile1> 
                        <StyledRpProfile1
                            type="email"  
                            placeholder="Correo" 
                            aria-label="Insertar Correo electrónico" />  
                        <StyledRpProfile1
                            type="password"  
                            placeholder="Contraseña" 
                            aria-label="Insertar contraseña" />      
                        <StyledRpProfile1
                            type="password"  
                            placeholder="Confirmar Contraseña" 
                            aria-label="Insertar confirmación de contraseña" /> 
                        <SectionButtonRp2>
                        <SmallButton
                            type="submit" 
                            aria-pressed="false" 
                            aria-label="Guardar cambios"
                            >
                            Guardar cambios
                        </SmallButton>
                    </SectionButtonRp2>        
                    </FormSectionRpProfile1>
            </ProfileRpContainer> 
        </>      
    );
};

export default RpForm;