import React, { useState } from 'react';
import axios from 'axios';
import SaveButton from '../../../atom/SaveButton';
import TextareaAbout from '../../../atom/TextareaAbout';
import GlobalStyle from '../../../../styled/GlobalStyle';
import { ProfileCompaniesTitle, ProfileCompaniesContainer, SectionButton, SectionWrapper, ImageSectionLogoProfile, StyledImageCompaniesProfile, FormSectionCompaniesprofile, StyledCompaniesProfile, StyledCompaniesProfile1, FormSectionProfile1 } from './styledCompaniesForm';

const CompaniesForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [formData, setFormData] = useState({
        companyName: '',
        nif: '',
        email: '',
        password: '',
        website: '',
        phone: '',
        aboutUs: ''
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            if (profileImage) {
                formDataToSend.append('profileImage', profileImage);
            }

            const response = await axios.post('YOUR_BACKEND_API_URL', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Form submitted successfully:', response.data);
            // Handle success (e.g., show a success message, redirect, etc.)
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (e.g., show an error message)
        }
    };

    const handleDeleteAccount = () => {
        // Implement delete account logic here
        console.log('Delete account functionality to be implemented');
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
                        name="companyName"
                        placeholder="Nombre Empresa/Razón social" 
                        aria-label="Insertar Nombre de la Empresa o Razón social" 
                        onChange={handleInputChange}
                        value={formData.companyName}
                    />
                    <StyledCompaniesProfile
                        type="text"
                        name="nif"
                        placeholder="N.I.F" 
                        aria-label="Insertar NIF"
                        onChange={handleInputChange}
                        value={formData.nif} 
                    /> 
                    <StyledCompaniesProfile
                        type="email"
                        name="email"
                        placeholder="Correo electrónico" 
                        aria-label="Insertar Correo electrónico" 
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                    <StyledCompaniesProfile
                        type="password"
                        name="password"
                        placeholder="Contraseña" 
                        aria-label="Insertar Contraseña"
                        onChange={handleInputChange}
                        value={formData.password}
                    />
                    <SectionButton>
                        <SaveButton
                            type="button"
                            aria-label="Borrar cuenta"
                            text="Borrar cuenta"
                            onClick={handleDeleteAccount}
                        />
                    </SectionButton>     
                </FormSectionCompaniesprofile>                 
                <FormSectionProfile1> 
                    <StyledCompaniesProfile1
                        type="url"
                        name="website"
                        placeholder="Sitio Web" 
                        aria-label="Insertar url Web" 
                        onChange={handleInputChange}
                        value={formData.website}
                    />  
                    <StyledCompaniesProfile1
                        type="text"
                        name="phone"
                        placeholder="Teléfono" 
                        aria-label="Insertar número de teléfono"
                        onChange={handleInputChange}
                        value={formData.phone}
                    />      
                    <TextareaAbout
                        name="aboutUs"
                        placeholder="Sobre nosotros" 
                        aria-label="Insertar sobre nosotros"
                        onChange={handleInputChange}
                        value={formData.aboutUs}
                    /> 
                    <SectionButton>
                        <SaveButton
                            type="button"
                            aria-label="Guardar cambios"
                            text="Guardar cambios"
                            onClick={handleSubmit}
                        />
                    </SectionButton>             
                </FormSectionProfile1>
            </ProfileCompaniesContainer> 
        </>      
    );
};

export default CompaniesForm;
