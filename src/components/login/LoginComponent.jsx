import React from 'react';
import login from '../../assets/img/login.jpg';
import styled from 'styled-components';
import GlobalStyle from '../../styled/GlobalStyle'

const LoginContainer = styled.div`
    display: flex;
    max-width: 80rem;
    max-height: 65rem;
    margin: 12.5rem auto;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    overflow: hidden;
`;

const FormSection = styled.div`
    flex: 1;
    padding: 2rem;
    padding-left: 5.313rem; 
`;

const ImageSection = styled.div`
    flex: 1;
    overflow: hidden;
`;
const StyledImage = styled.img`
    width: 90%;
    height: 90%;
    margin-top: 1.875rem;
    border-radius: 1.25rem;
    object-fit: cover;
`;

const Title = styled.h2`
    margin-top: 3.75rem;
    margin-right: 2.5rem;
    font-size: 2rem;
    font-color: #020100;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    margin-right: 3rem;
    color: #020100;
    margin-top: 2.5rem;
    margin-bottom: 3.75rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
    width: 32.813rem;
    padding: 1.2rem;
    margin_top: 2.5rem;
    margin-bottom: 2.5rem;
    border: 0.063rem solid #e9e9e6;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    background-color: #e9e9e6;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    &:focus {
        outline: none;
        box-shadow: 0 -0.375rem 0.625rem -0.063remrgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
    }
`;

const SubmitButton = styled.button`
    width: 32.813rem;
    padding: 1.2rem;
    background-color: #f74702;
    color: white;
    border: 0.063rem solid #f74702;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    font-size: 1.125rem;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: white;
        color: #f74702;
        border:0.125rem solid #f74702;
    }
`;

const SignUpLink = styled.p`
    font-size: 1rem;
    margin-top: 2.5rem;
    margin-right: 3rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    text-align: center;
    a {
        color: #f7402e;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const LoginComponent = () => {
    return (
    <>
        <GlobalStyle />
        <LoginContainer>
            <FormSection>
                <Title>Iniciar sesión</Title>
                <Subtitle>Ingresa para acceder a tu cuenta en Alumni.</Subtitle>
                <form>
                    <Input type="email" placeholder="Correo electrónico" />
                    <Input type="password" placeholder="Contraseña" />
                    <SubmitButton type="submit">Iniciar sesión</SubmitButton>
                </form>
                <SignUpLink>
                    ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
                </SignUpLink>
            </FormSection>
            <ImageSection>
                <StyledImage src={login} alt="Login" />
            </ImageSection>
        </LoginContainer>
        </>
    );
};
export default LoginComponent;
