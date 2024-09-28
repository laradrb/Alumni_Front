import React from 'react';
import LargeButton from '../../atom/LargeButton';
import registerRP from '../../../assets/img/registerRP.jpg';
import GlobalStyle from '../../../styled/GlobalStyle';
import {RegisterContainer, FormSection, Title, Subtitle, Form, StyledInput, ButtonContainer, LinkContainer, StyledLink, ImageSection, StyledImage} from './styledRegisterRPComponents';

const RegisterRPComponent = () => {
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