import React, { useState } from 'react';
import axios from 'axios';
import SaveButton from '../../../atom/SaveButton';
import TextareaAbout from '../../../atom/TextareaAbout';
import GlobalStyle from '../../../../styled/GlobalStyle';
import {
    ProfileCompaniesTitle,
    ProfileCompaniesContainer,
    SectionButton1,
    SectionButton,
    SectionWrapper,
    ImageSectionLogoProfile,
    StyledImageCompaniesProfile,
    FormSectionCompaniesprofile,
    StyledCompaniesProfile,
    StyledCompaniesProfile1,
    FormSectionProfile1,
    PopoverWrapperCompany  
} from './styledCompaniesForm';
import CardPopover from '../../../cardPopover/CardPopover';

const CompaniesForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [formData, setFormData] = useState({
        company_name: '',
        nif: '',
        email: '',
        password: '',
        website: '',
        phone: '',
        description: ''
    });
    
    const [showDeletePopover, setShowDeletePopover] = useState(false);

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

            const pk = 4; 
            const role = 'empresa'; 

            const response = await axios.put(`api/update/${pk}/${role}/`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            console.log('Formulario enviado correctamente:', response.data);
            alert("Los cambios han sido guardados exitosamente.");

            setFormData({
                company_name: '',
                nif: '',
                email: '',
                password: '',
                website: '',
                phone: '',
                description: ''
            });
            setProfileImage(null);
            setImagePreview('');

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un problema al enviar el formulario. Inténtalo nuevamente.');
        }
    };

    const handleDeleteAccount = () => {
        setShowDeletePopover(true);
    };

    const confirmDeleteAccount = async () => {
        try {
            const response = await axios.delete('/api/deleteAccount', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }
            });
            console.log('Cuenta borrada:', response.data);
            alert("Tu cuenta ha sido eliminada.");
            window.location.href = '/home'; 
        } catch (error) {
            console.error('Error al borrar la cuenta:', error);
            alert('Hubo un problema al borrar la cuenta. Inténtalo nuevamente.');
        }
        setShowDeletePopover(false);
    };

    const cancelDeleteAccount = () => {
        setShowDeletePopover(false);
    };

    return (
        <>
            <GlobalStyle />
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
                        name="company_name"
                        placeholder="Nombre Empresa/Razón social" 
                        aria-label="Insertar Nombre de la Empresa o Razón social" 
                        onChange={handleInputChange}
                        value={formData.company_name}
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
                    <SectionButton1>
                        <SaveButton
                            type="button"
                            aria-label="Borrar cuenta"
                            text="Borrar cuenta"
                            onClick={handleDeleteAccount}
                        />
                    </SectionButton1>     
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
                        name="description"
                        placeholder="Sobre nosotros" 
                        aria-label="Insertar sobre nosotros"
                        onChange={handleInputChange}
                        value={formData.description}
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
            <PopoverWrapperCompany>
                {showDeletePopover && (
                    <CardPopover
                        title="¿Estás seguro de eliminar tu cuenta?"
                        text="No podrás revertir esta opción"
                        confirmText="Sí"
                        cancelText="No"
                        onConfirm={confirmDeleteAccount}
                        onCancel={cancelDeleteAccount}
                    />
                )}
            </PopoverWrapperCompany>
        </>
    );
};

export default CompaniesForm;
