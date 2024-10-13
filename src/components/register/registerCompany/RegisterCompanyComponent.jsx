import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LargeButton from '../../atom/LargeButton';
import registerEmpresa from '../../../assets/img/registerEmpresa.jpg';
import GlobalStyle from '../../../styled/GlobalStyle';
import { 
    RegisterContainerCompany,
    FormSectionCompany,
    TitleCompany,
    SubtitleCompany,
    FormCompany,
    StyledInputCompany,
    ButtonContainerCompany,
    LinkContainerCompany,
    StyledLinkCompany,
    ImageSectionCompany,
    StyledImageCompany
} from './styledRegisterCompanyComponent';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/users/create_user/';

const RegisterCompanyComponent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        company_name: '',
        nif: '',
        role: 'empresa'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Final formData:", formData);
        const { company_name, nif, email, password } = formData;

        if (!company_name || !nif || !email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}`, {
                email,
                password,
                company_name,
                nif,
                role: "empresa" 
            });

            if (response.status === 201) {
                const data = response.data;
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userNombre', company_name);
                localStorage.setItem('userNif', nif);
                localStorage.setItem('userEmail', email);
                alert("¡Registro exitoso!");
                navigate("/login");
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error durante el registro:", error);
            alert("Ocurrió un error. Por favor, intenta de nuevo más tarde.");
        }
    };

    return (
        <>
            <GlobalStyle />
            <RegisterContainerCompany>
                <FormSectionCompany>
                    <TitleCompany>Registro para Empresas</TitleCompany>
                    <SubtitleCompany>
                        Regístrate para acceder a tu <br/> cuenta en Alumni
                    </SubtitleCompany>
                    <FormCompany onSubmit={handleSignUp}> 
                        <StyledInputCompany 
                            type="text" 
                            placeholder="Nombre de la empresa/razón social" 
                            aria-label="Insertar Nombre de la empresa/razón social"
                            name="company_name" 
                            value={formData.company_name} 
                            onChange={handleInputChange} 
                            required
                        />
                        
                        <StyledInputCompany 
                            type="text" 
                            placeholder="N.I.F" 
                            aria-label="Insertar NIF"
                            name="nif"
                            value={formData.nif} 
                            onChange={handleInputChange}
                            required
                        />
                        
                        <StyledInputCompany 
                            type="email" 
                            placeholder="Correo electrónico" 
                            aria-label="Insertar Correo electrónico"
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required
                        />
                        
                        <StyledInputCompany 
                            type="password" 
                            placeholder="Contraseña" 
                            aria-label="Insertar Contraseña"
                            name="password" 
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />

                        <ButtonContainerCompany>
                            <LargeButton 
                                type="submit" 
                                aria-pressed="false" 
                                aria-label="Boton Registrarse"
                            >
                                Registrarse
                            </LargeButton>
                        </ButtonContainerCompany>
                    </FormCompany>
                    <LinkContainerCompany>
                        <span>¿Ya tienes cuenta?</span> 
                        <StyledLinkCompany to="/login">
                            Inicia sesión aquí
                        </StyledLinkCompany>
                    </LinkContainerCompany>
                </FormSectionCompany>
                <ImageSectionCompany>
                    <StyledImageCompany 
                        src={registerEmpresa} 
                        alt="Imagen decorativa de registro" 
                        aria-hidden="true" 
                    />
                </ImageSectionCompany>
            </RegisterContainerCompany>
        </>
    );
};

export default RegisterCompanyComponent;