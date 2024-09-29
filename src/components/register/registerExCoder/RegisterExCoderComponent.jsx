import React, { useState } from 'react';
import GlobalStyle from '../../../styled/GlobalStyle';
import LargeButton from '../../atom/LargeButton';
import register from '../../../assets/img/register.jpg';
import {RContainer, FormSection1, DropdownContainer, Title1, Subtitle1, Form1, StyledInput1, ButtonContainer1, LinkContainer1, StyledLink1, ImageSection1, StyledImage1} from './styledRegisterExCoderComponent';
import Dropdown from '../../atom/DropdownButton';

const RegisterExCoderComponent = () => {

    const [selectedOptionPromo, setSelectedOptionPromo] = useState('');
    const [selectedOptionSchool, setSelectedOptionSchool] = useState('');

    const promoOptions = ['Lola', 'Ana', 'Carlos'];
    const schoolOptions = ['Factoria F5 Barcelona', 'Factoria F5 Madrid', 'Factoria F5 Asturias'];

    const handlePromoSelect = (option) => {
        setSelectedOptionPromo(option);
    };

    const handleSchoolSelect = (option) => {
        setSelectedOptionSchool(option);
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
                    <Form1>
                        <StyledInput1 
                            type="text" 
                            placeholder="Nombre" 
                            aria-label="Insertar Nombre"
                        />
                        
                        <StyledInput1 
                            type="text" 
                            placeholder="Apellidos" 
                            aria-label="Insertar Apellidos"
                        />
                        
                        <StyledInput1
                            type="email" 
                            placeholder="Correo electrónico" 
                            aria-label=" Insertar Correo electrónico"
                        />
                        
                        <StyledInput1 
                            type="password" 
                            placeholder="Contraseña" 
                            aria-label="Insertar Contraseña"
                        />

                        <DropdownContainer>
                            <Dropdown 
                                options={promoOptions}
                                onSelect={handlePromoSelect}
                                buttonText={selectedOptionPromo || "Representante de promoción"}
                                aria-label="Seleccionar representante de promoción"
                            />
                            <Dropdown 
                                options={schoolOptions}
                                onSelect={handleSchoolSelect}
                                buttonText={selectedOptionSchool || "Escuela"}
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
                        <StyledLink1 to="/login">
                            Inicia sesión aquí
                        </StyledLink1>
                    </LinkContainer1>
                </FormSection1>
                <ImageSection1>
                    <StyledImage1 
                        src={register} 
                        alt="Imagen decorativa de registro" 
                        aria-hidden="true" 
                    />
                </ImageSection1>
            </RContainer>
        </>
    );
};

export default RegisterExCoderComponent;