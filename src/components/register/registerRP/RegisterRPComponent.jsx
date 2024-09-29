import React, { useState } from 'react';
import LargeButton from '../../atom/LargeButton';
import registerRP from '../../../assets/img/registerRP.jpg';
import GlobalStyle from '../../../styled/GlobalStyle';
import {RegisterContainer, DropdownContainer, FormSection, Title, Subtitle, Form, StyledInput, ButtonContainer, LinkContainer, StyledLink, ImageSection, StyledImage} from './styledRegisterRPComponents';
import Dropdown from '../../atom/DropdownLargeButton';

const RegisterRPComponent = () => {

    const [selectedOptionSchool, setSelectedOptionSchool] = useState('');

    const schoolOptions = ['Factoria F5 Barcelona', 'Factoria F5 Madrid', 'Factoria F5 Asturias'];

    const handleSchoolSelect = (option) => {
        setSelectedOptionSchool(option);
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
                    <Form>
                        <StyledInput 
                            type="text" 
                            placeholder="Nombre" 
                            aria-label="Insertar Nombre"
                        />
                        
                        <StyledInput 
                            type="text" 
                            placeholder="Apellidos" 
                            aria-label="Insertar Apellidos"
                        />
                        
                        <StyledInput 
                            type="email" 
                            placeholder="Correo electrónico" 
                            aria-label=" Insertar Correo electrónico"
                        />
                        
                        <StyledInput 
                            type="password" 
                            placeholder="Contraseña" 
                            aria-label="Insertar Contraseña"
                        />
                        <DropdownContainer>
                            <Dropdown 
                                options={schoolOptions}
                                onSelect={handleSchoolSelect}
                                buttonText={selectedOptionSchool || "Escuela"}
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
