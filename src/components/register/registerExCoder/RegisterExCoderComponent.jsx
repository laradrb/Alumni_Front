import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GlobalStyle from '../../../styled/GlobalStyle';
import LargeButton from '../../atom/LargeButton';
import register from '../../../assets/img/register.jpg';
import { RContainer, FormSection1, DropdownContainer, Title1, Subtitle1, Form1, StyledInput1, ButtonContainer1, LinkContainer1, StyledLink1, ImageSection1, StyledImage1 } from './styledRegisterExCoderComponent';
import Dropdown from '../../atom/DropdownButton';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const RegisterExCoderComponent = () => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        rp: '',
        school: ''
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

        const { first_name, last_name, email, password, rp, school } = formData;

        console.log("Valores enviados:", { first_name, last_name, email, password, rp, school });

        if (!first_name || !last_name || !email || !password || !rp || !school) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/api/users/create_user/`, {
                first_name,
                last_name,
                email,
                password,
                rp,
                school,
                role: 'coder', 
            });

            if (response.status === 201) {
                const data = response.data;
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userNombre', first_name);
                localStorage.setItem('userApellidos', last_name);
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userPromo', rp);
                localStorage.setItem('userSchool', school);
                alert("¡Registro exitoso!");
                navigate("/login");
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error durante el registro:", error.response.data);
            alert("Ocurrió un error: " + error.response.data.error || "Por favor, intenta de nuevo más tarde.");
        }
        
    };

    const promoOptions = [
        { id: 2, name: 'Lola' },
        { id: 11, name: 'Ana' },
        { id: 12, name: 'Cristina' }
    ];
    const schoolOptions = [
        { id: 1, name: 'Factoria F5 Barcelona' },
        { id: 2, name:  'Factoria F5 Madrid' },
        { id: 3, name: 'Factoria F5 Asturias' }
    ];

    const handlePromoSelect = (option) => {
        console.log("Promoción seleccionada:", option); 
        setFormData({ ...formData, rp: option.id }); 
    };

    const handleSchoolSelect = (option) => {
        console.log("Escuela seleccionada:", option); 
        setFormData({ ...formData, school: option.id });
    };

    return (
        <>
            <GlobalStyle />
            <RContainer>
                <FormSection1>
                    <Title1>Registro para Ex-Coder</Title1>
                    <Subtitle1>
                        Regístrate para acceder a tu <br />
                        cuenta en Alumni
                    </Subtitle1>
                    <Form1 onSubmit={handleSignUp}>
                        <StyledInput1
                            type="text"
                            name="first_name" 
                            placeholder="Nombre"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            aria-label="Insertar Nombre"
                        />
                        <StyledInput1
                            type="text"
                            name="last_name" 
                            placeholder="Apellidos"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            aria-label="Insertar Apellidos"
                        />
                        <StyledInput1
                            type="email"
                            name="email" 
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleInputChange}
                            aria-label="Insertar Correo electrónico"
                        />
                        <StyledInput1
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleInputChange}
                            aria-label="Insertar Contraseña"
                        />
                        <DropdownContainer>
                        <Dropdown
                            options={promoOptions}
                            onSelect={handlePromoSelect}
                            buttonText={formData.rp || "Representante de promoción"}
                            aria-label="Seleccionar representante de promoción"/>

                            <Dropdown
                                options={schoolOptions}
                                onSelect={handleSchoolSelect}
                                buttonText={formData.school || "Escuela"}
                                aria-label="Seleccionar opción de escuela"
                            />
                        </DropdownContainer>
                        <ButtonContainer1>
                            <LargeButton
                                type="submit"
                                aria-pressed="false"
                                aria-label="Boton Registrarse"
                            >
                                Registrarse
                            </LargeButton>
                        </ButtonContainer1>
                    </Form1>
                    <LinkContainer1>
                        <span>¿Ya tienes cuenta?</span>
                        <StyledLink1 to="/login">Inicia sesión aquí</StyledLink1>
                    </LinkContainer1>
                </FormSection1>
                <ImageSection1>
                    <StyledImage1 src={register} alt="Imagen decorativa de registro" aria-hidden="true" />
                </ImageSection1>
            </RContainer>
        </>
    );
};

export default RegisterExCoderComponent;
