import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LargeButton from '../../atom/LargeButton';
import registerRP from '../../../assets/img/registerRP.jpg';
import GlobalStyle from '../../../styled/GlobalStyle';
import {RegisterContainer, DropdownContainer, FormSection, Title, Subtitle, Form, StyledInput, ButtonContainer, LinkContainer, StyledLink, ImageSection, StyledImage} from './styledRegisterRPComponents';
import Dropdown from '../../atom/DropdownLargeButton';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const RegisterRPComponent = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        school_id: '',
        school: '',
        role: ''
    });

    console.log("Estado actual del formulario:", formData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Cambiando el campo ${name} a:`, value); 
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
    
        const { first_name, last_name, email, password, school_id, school} = formData;
    
        console.log("Valores enviados:", { first_name, last_name, email, password, school_id });
    
        if (!first_name || !last_name || !email || !password || !school_id) {
            alert("Por favor, completa todos los campos.");
            return;
        }
    
        try {
            const response = await axios.post(`${API_BASE_URL}/api/users/create_user/`, {
                first_name,
                last_name,
                email,
                password,
                school_id,
                school,
                role: 'rp',
            });
    
            if (response.status === 201) {
                const data = response.data;
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userNombre', first_name);
                localStorage.setItem('userApellidos', last_name);
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userSchoolId', school_id);
                localStorage.setItem('userSchool', school);
                alert("¡Registro exitoso!");
                navigate("/login");
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error durante el registro:", error.response?.data || error);
            alert("Ocurrió un error: " + (error.response?.data?.error || "Por favor, intenta de nuevo más tarde."));
        }
    };

    const schoolOptions = [
        { id: 1, name: 'Factoria F5 Barcelona' },
        { id: 2, name:  'Factoria F5 Madrid' },
        { id: 3, name: 'Factoria F5 Asturias' }
    ];

    const handleSchoolSelect = (option) => {
            console.log("Escuela seleccionada:", option); 
            setFormData({ ...formData, school_id: option.id });
        };

    return (
        <>
            <GlobalStyle />
            <RegisterContainer>
                <FormSection>
                    <Title>Registro para RP</Title>
                    <Subtitle>
                        Regístrate para acceder a tu <br />
                        cuenta en Alumni
                    </Subtitle>
                    <Form onSubmit={handleSignUp} >
                        <StyledInput 
                            type="text" 
                            name="first_name" 
                            placeholder="Nombre"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            aria-label="Insertar Nombre"
                        />
                        <StyledInput 
                            type="text" 
                            name="last_name" 
                            placeholder="Apellidos"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            aria-label="Insertar Apellidos"
                        />
                        
                        <StyledInput 
                            type="email" 
                            name="email" 
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleInputChange}
                            aria-label="Insertar Correo electrónico"
                        />
                        
                        <StyledInput 
                            type="password" 
                            name= "password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleInputChange}
                            aria-label="Insertar Contraseña"
                        />
                        <DropdownContainer>
                            <Dropdown 
                                options={schoolOptions}
                                onSelect={handleSchoolSelect}
                                buttonText={formData.school_id || "Escuela"}
                                aria-label="Seleccionar opción de escuela"
                            />
                        </DropdownContainer>
                        <ButtonContainer>
                            <LargeButton 
                                type="submit" 
                                aria-pressed="false" 
                                aria-label="Boton Registrarse"
                            >
                                Registrarse
                            </LargeButton>
                        </ButtonContainer>
                    </Form>
                    <LinkContainer>
                        <span>¿Ya tienes cuenta?</span> 
                        <StyledLink to="/login">
                            Inicia sesión aquí
                        </StyledLink>
                    </LinkContainer>
                </FormSection>
                <ImageSection>
                    <StyledImage 
                        src={registerRP} 
                        alt="Imagen decorativa de registro" 
                        aria-hidden="true" 
                    />
                </ImageSection>
            </RegisterContainer>
        </>
    );
};

export default RegisterRPComponent;
