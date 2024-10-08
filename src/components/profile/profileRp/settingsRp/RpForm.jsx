import React, { useState } from 'react';
import SaveButton from '../../../atom/SaveButton'
import axios from 'axios';
import DropdownMediumButton from '../../../atom/DropdownMediumButton'
import GlobalStyle from '../../../../styled/GlobalStyle';
import { ProfileRpTitle, ProfileRpContainer, SectionWrapper, ImageSectionRpProfile, StyledImageRpProfile, FormSectionRpProfile, StyledRpProfile, StyledRpSectionDrowdowButton, SectionButtonRp, FormSectionRpProfile1, StyledRpProfile1, SectionButtonRp2, PopoverWrapper } from './styledRpForm'
import CardPopover from '../../../cardPopover/CardPopover';

const RpForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [selectedOptionSchool, setSelectedOptionSchool] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showDeletePopover, setShowDeletePopover] = useState(false);

    const schoolOptions = ['Factoria F5 Barcelona', 'Factoria F5 Madrid', 'Factoria F5 Asturias'];
    
    const handleSchoolSelect = (option) => {
        setSelectedOptionSchool(option);
    };

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

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
            formDataToSend.append('school', selectedOptionSchool);
            if (profileImage) {
                formDataToSend.append('profileImage', profileImage);
            }

            const response = await axios.post('/api/saveProfile', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Datos guardados:', response.data);
            // Aquí puedes añadir lógica adicional después de guardar exitosamente, como mostrar un mensaje de éxito
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            // Aquí puedes manejar los errores, por ejemplo, mostrando un mensaje al usuario
        }
    };

    const handleDeleteAccount = () => {
        setShowDeletePopover(true);
    };

    const confirmDeleteAccount = async () => {
        try {
            const response = await axios.delete('/api/deleteAccount');
            console.log('Cuenta borrada:', response.data);
            // Aquí puedes añadir lógica adicional después de borrar la cuenta, como redireccionar al usuario
        } catch (error) {
            console.error('Error al borrar la cuenta:', error);
            // Aquí puedes manejar los errores, por ejemplo, mostrando un mensaje al usuario
        }
        setShowDeletePopover(false);
    };

    const cancelDeleteAccount = () => {
        setShowDeletePopover(false);
    };

    return (
        <>
        <GlobalStyle/>
            <ProfileRpTitle>
                Ajustes de Perfil
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
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nombre" 
                        aria-label="Insertar Nombre de Responsable de Formación" />
                    <StyledRpProfile
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
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
                        <SaveButton 
                            text="Borrar cuenta"
                            onClick={handleDeleteAccount}
                            aria-pressed="false" 
                            aria-label="Borrar cuenta"
                        />
                    </SectionButtonRp>           
                </FormSectionRpProfile>                 
                <FormSectionRpProfile1> 
                    <StyledRpProfile1
                        type="email"  
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Correo" 
                        aria-label="Insertar Correo electrónico" />  
                    <StyledRpProfile1
                        type="password"  
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Contraseña" 
                        aria-label="Insertar contraseña" />      
                    <StyledRpProfile1
                        type="password"  
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirmar Contraseña" 
                        aria-label="Insertar confirmación de contraseña" /> 
                    <SectionButtonRp2>
                    <SaveButton
                        text="Guardar cambios"
                        onClick={handleSave}
                        aria-pressed="false" 
                        aria-label="Guardar cambios"
                        />
                    </SectionButtonRp2>        
                </FormSectionRpProfile1>
            </ProfileRpContainer> 
            <PopoverWrapper>
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
            </PopoverWrapper>
        </>      
    );
};

export default RpForm;