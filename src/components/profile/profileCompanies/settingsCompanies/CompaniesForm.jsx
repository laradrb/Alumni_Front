import React, { useState } from 'react';
import SmallButton from '../../../atom/SmallButton'
import TextareaAbout from '../../../atom/TextareaAbout';
import GlobalStyle from '../../../../styled/GlobalStyle';
import { ProfileCompaniesTitle, ProfileCompaniesContainer, SectionWrapper,ImageSectionLogoProfile, StyledImageCompaniesProfile, FormSectionCompaniesprofile, StyledCompaniesProfile,StyledCompaniesProfile1, FormSectionProfile1}  from './styledCompaniesForm';
import { SectionButton } from './styledCompaniesForm';


const CompaniesForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
        setImagePreview(URL.createObjectURL(file));
    };
    return (
        <>
        <GlobalStyle/>
        <ProfileCompaniesTitle>
            Ajustes de Perfíl
        </ProfileCompaniesTitle>
        <ProfileCompaniesContainer>
                <SectionWrapper>
                    <ImageSectionLogoProfile>
                        <label htmlFor="profile-logo-upload" className="cursor-pointer">
                            <StyledImageCompaniesProfile 
                                src={imagePreview || 'default-profile.png'} 
                                alt="Imagen de logo empresarial" 
                                aria-hidden="true"
                            />
                            <input
                                id="profile-logo-upload"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageUpload}
                            />
                        </label>
                    </ImageSectionLogoProfile>   
                </SectionWrapper>    
                    <FormSectionCompaniesprofile>
                        <StyledCompaniesProfile
                            type="text" 
                            placeholder="Nombre Empresa/Razón social" 
                            aria-label="Insertar Nombre de la Empresa o Razón social" />
                        <StyledCompaniesProfile
                            type="text" 
                            placeholder="N.I.F" 
                            aria-label="Insertar NIF" /> 
                        <StyledCompaniesProfile
                            type="email" 
                            placeholder="Correo electrónico" 
                            aria-label="Insertar Correo electrónico" />
                        <StyledCompaniesProfile
                            type="password" 
                            placeholder="Contraseña" 
                            aria-label="Insertar Contraseña" />
                        <SectionButton>
                            <SmallButton type="submit" 
                                aria-pressed="false" 
                                aria-label="Borrar cuenta"
                            >
                            Borrar cuenta
                            </SmallButton>
                    </SectionButton>     
                    </FormSectionCompaniesprofile>                 
                    <FormSectionProfile1> 
                        <StyledCompaniesProfile1
                            type="url"  
                            placeholder="Sitio Web" 
                            aria-label="Insertar url Web" />  
                        <StyledCompaniesProfile1
                            type="text"  
                            placeholder="Teléfono" 
                            aria-label="Insertar número de teléfono" />      
                        <TextareaAbout
                            type="textarea"
                            placeholder="Sobre nosotros" 
                            aria-label="Insertar sobre nosotros" /> 
                    <SectionButton>
                        <SmallButton
                            type="submit" 
                            aria-pressed="false" 
                            aria-label="Guardar cambios"
                            >
                            Guardar cambios
                        </SmallButton>
                    </SectionButton>             
                    </FormSectionProfile1>
            </ProfileCompaniesContainer> 
        </>      
    );
};

export default CompaniesForm;
