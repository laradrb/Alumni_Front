import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../atom/Input';
import LargeButton from '../../atom/LargeButton';
import registerRP from '../../../assets/img/registerRP.jpg';
import GlobalStyle from '../../styled/GlobalStyle';

const RegisterContainer = styled.div`
    display: flex;
    max-width: 80rem;
    max-height: 65rem;
    margin: 12.5rem auto;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    overflow: hidden;
`;

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center; 
    flex: 1;
    padding: 1rem;
`;

const Title = styled.p`
    text-align: center;
    font-size: 2rem; 
    color: #020100; 
    font-family: 'Poppins', sans-serif; 
    font-weight: bold; 
`;

const Subtitle = styled.p`
    font-size: 1.5rem;    
    margin-right: 3rem;    
    color: #020100;
    margin-top: 0.75rem;
    text-align: center;      
    font-family: 'Poppins', sans-serif; 
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
`;

const StyledInput = styled(Input)`
    margin-bottom: 1.5rem; 
    width: 100%; 
`;

const ButtonContainer = styled.div`
    text-align: center;
    width: 100%;
`;

const LinkContainer = styled.p`
    font-size: 1rem;
    margin-top: 2.5rem;
    margin-right: 3rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #f74702;
    margin-left: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

const ImageSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const StyledImage = styled.img`
    width: 31.875rem; 
    height: 35.4827rem;
    border-radius: 1.25rem;
    object-fit: cover;
`;

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

