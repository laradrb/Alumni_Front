import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const CompaniesForm = () => {
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [formData, setFormData] = useState({
        company_name: '',
        nif: '',
        email: '',
        password: '',
        website: '',
        phone: '',
        description: '',
        role: 'empresa'
    });

    const [showDeletePopover, setShowDeletePopover] = useState(false);

    console.log("Estado actual del formulario:", formData);

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

    const handleSignUp = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId'); 
        console.log("userId en handleSignUp:", userId);
        console.log("Rol de usuario:", formData.role);
        console.log("Datos enviados al backend:", formData);

        if (!userId) {
            alert("No se pudo encontrar el ID de usuario. Asegúrate de haber iniciado sesión.");
            return;
        }
        if (isNaN(userId)) {
            alert("El ID de usuario no es válido.");
            return;
        }

    const validRoles = ['rp', 'coder', 'empresa'];
        if (!formData.role || !validRoles.includes(formData.role)) {
            alert("Rol de usuario no válido. Por favor, selecciona un rol correcto.");
            return;
        }

        const { company_name, nif, email, password, website, phone, description } = formData;
        
        if (!password) {
            alert("Por favor, ingresa una contraseña.");
            return;
        }
        console.log("Valores enviados:", { company_name, nif, email, password, website, phone, description });


        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                alert("El token de autenticación no está disponible. Por favor, inicia sesión de nuevo.");
                return;
            }
            console.log("Token de autenticación:", token);
            const response = await axios.put(
                `${API_BASE_URL}/api/users/update/${userId}/${formData.role}/`,
                {
                    company_name,
                    nif,
                    email,
                    password,
                    website,
                    phone,
                    description,
                    role: "empresa", 
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log("Respuesta de la API:", response);

            if (response.status === 200) {
                console.log("Respuesta exitosa del servidor:", response.data);
                const data = response.data;
                console.log('token recibido:', data.token);
                localStorage.setItem('accessToken', data.token);
                localStorage.setItem('userNombre', data.company_name);
                localStorage.setItem('userNif', data.nif);
                localStorage.setItem('userEmail', data.email);
                localStorage.setItem('userPassword', data.password);
                localStorage.setItem('userPhone', data.phone);
                localStorage.setItem('userWebsite', data.website);
                localStorage.setItem('userDescription', data.description);
                alert("¡Datos modificados con exito!");
                navigate("/empresa/perfil-empresa");
            } else {
                console.log("Respuesta inesperada del servidor:", response);
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error completo:", error);
            console.error("Respuesta del servidor:", error.response);
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
        console.log("userId en confirmDeleteAccount:", userId);
        if (!userId) {
            alert("No se pudo encontrar el ID de usuario. Asegúrate de haber iniciado sesión.");
            return;
        }

        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.delete(`${API_BASE_URL}/api/users/delete/${userId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
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
            <GlobalStyle />
            <ProfileCompaniesTitle>
                Ajustes de Perfil
            </ProfileCompaniesTitle>
            <ProfileCompaniesContainer onSubmit={handleSignUp} >
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
                        id="company_name"
                        name="company_name"
                        placeholder="Nombre Empresa/Razón social" 
                        aria-label="Insertar Nombre de la Empresa o Razón social" 
                        onChange={handleInputChange}
                        value={formData.company_name}
                        autoComplete="organization"
                    />
                    <StyledCompaniesProfile
                        id="nif"
                        type="text"
                        name="nif"
                        placeholder="N.I.F" 
                        aria-label="Insertar NIF"
                        onChange={handleInputChange}
                        value={formData.nif} 
                        autoComplete="nif"
                    /> 
                    <StyledCompaniesProfile
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Correo electrónico" 
                        aria-label="Insertar Correo electrónico" 
                        onChange={handleInputChange}
                        value={formData.email}
                        autoComplete="email"
                    />
                    <StyledCompaniesProfile
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Contraseña" 
                        aria-label="Insertar Contraseña"
                        onChange={handleInputChange}
                        value={formData.password}
                        autoComplete="new-password"
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
                        id="website"
                        type="url"
                        name="website"
                        placeholder="Sitio Web" 
                        aria-label="Insertar url Web" 
                        onChange={handleInputChange}
                        value={formData.website}
                        autoComplete="url" 
                    />  
                    <StyledCompaniesProfile1
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="Teléfono" 
                        aria-label="Insertar número de teléfono"
                        onChange={handleInputChange}
                        value={formData.phone}
                        autoComplete="tel"
                    />      
                    <TextareaAbout
                        id="description"
                        name="description"
                        placeholder="Sobre nosotros" 
                        aria-label="Insertar sobre nosotros"
                        onChange={(e) => handleInputChange(e)}
                        value={formData.description}
                        autoComplete="description" 
                    />
                    <SectionButton>
                        <SaveButton
                            type="submit"
                            aria-label="Guardar cambios"
                            text="Guardar cambios"
                            onClick={handleSignUp}
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
