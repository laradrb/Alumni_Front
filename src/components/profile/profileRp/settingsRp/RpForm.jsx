import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SaveButton from '../../../atom/SaveButton'
import axios from 'axios';
import DropdownMediumButton from '../../../atom/DropdownMediumButton'
import GlobalStyle from '../../../../styled/GlobalStyle';
import { ProfileRpTitle, ProfileRpContainer, SectionWrapper, ImageSectionRpProfile, StyledImageRpProfile, FormSectionRpProfile, StyledRpProfile, StyledRpSectionDrowdowButton, SectionButtonRp, FormSectionRpProfile1, StyledRpProfile1, SectionButtonRp2, PopoverWrapper } from './styledRpForm'
import CardPopover from '../../../cardPopover/CardPopover';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const RpForm = () => {
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [selectedOptionSchool, setSelectedOptionSchool] = useState('');
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        school_id: '',
        school_name: '',
        role: 'rp',
    });
    const [showDeletePopover, setShowDeletePopover] = useState(false);

    console.log("Estado actual del formulario:", formData);

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
        console.log(`Cambiando el campo ${name} a:`, value); 
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId'); 
    
        try {
            const formDataToSend = new FormData();
    
            const { first_name, last_name, email, password, school_id, school_name } = formData;
    
            formDataToSend.append('first_name', first_name);
            formDataToSend.append('last_name', last_name);
            formDataToSend.append('email', email);
            formDataToSend.append('password', password);
            formDataToSend.append('school_id', school_id || ''); 
            formDataToSend.append('school_name', selectedOptionSchool); 
    
            if (profileImage) {
                formDataToSend.append('profileImage', profileImage);
            }
    
            const token = localStorage.getItem('authToken');
    
            const response = await axios.put(
                `${API_BASE_URL}/api/users/update/${userId}/${formData.role}/`,
                formDataToSend,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
    
            if (response.status === 200) {
                const data = response.data;
                localStorage.setItem('accessToken', data.token);
                localStorage.setItem('userNombre', data.first_name);
                localStorage.setItem('userApellido', data.last_name);
                localStorage.setItem('userEmail', data.email);
                localStorage.setItem('userPassword', data.password);
                alert("¡Datos modificados con éxito!");
                navigate("/rp/perfil-rp");
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            alert("Ocurrió un error: " + (error.response?.data?.error || error.message || "Por favor, intenta de nuevo más tarde."));
        }
    
        setProfileImage(null);
        setImagePreview('');
    };

    const handleDeleteAccount = () => {
        setShowDeletePopover(true);
    };

    const confirmDeleteAccount = async () => {
        const userId = localStorage.getItem('userId');
        const school_id = localStorage.getItem('school_id'); // Might be missing
    
        console.log("userId en confirmDeleteAccount:", userId);
        console.log("school_id en confirmDeleteAccount:", school_id); // Debug line
    
        if (!userId) {
            alert("No se pudo encontrar el ID de usuario. Asegúrate de haber iniciado sesión.");
            return;
        }
    
        if (!school_id) {
            console.warn("No se pudo encontrar el ID de escuela. Continuando sin él.");
        }
    
        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.delete(`${API_BASE_URL}/api/users/delete/${userId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Cuenta borrada:', response.data);
            alert("Tu cuenta ha sido eliminada.");
            window.location.href = '/preregister'; 
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
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        placeholder="Nombre" 
                        aria-label="Insertar Nombre de Responsable de Formación" />
                    <StyledRpProfile
                        type="text"
                        id="last_name" 
                        name="last_name"
                        value={formData.last_name}
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
                            type="button"
                            onClick={handleDeleteAccount}
                            aria-pressed="false" 
                            aria-label="Borrar cuenta"
                        />
                    </SectionButtonRp>           
                </FormSectionRpProfile>                 
                <FormSectionRpProfile1> 
                    <StyledRpProfile1
                        type="email"
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Correo" 
                        aria-label="Insertar Correo electrónico" />  
                    <StyledRpProfile1
                        type="password"  
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Contraseña" 
                        aria-label="Insertar contraseña" />      
                    <StyledRpProfile1
                        type="password" 
                        id="confirm_password" 
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleInputChange}
                        placeholder="Confirmar Contraseña" 
                        aria-label="Insertar confirmación de contraseña" /> 
                    <SectionButtonRp2>
                    <SaveButton
                        text="Guardar cambios"
                        type="submit"
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