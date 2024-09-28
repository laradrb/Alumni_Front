import React from 'react';
import login from '../../assets/img/login.jpg';
import { LoginContainer, FormSection, ImageSection, StyledImage,Title, Subtitle, Input, SubmitButton, SignUpLink} from './styledLoginComponent';
import GlobalStyle from '../../styled/GlobalStyle'

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
                    ¿No tienes cuenta? <a href="/preregister">Regístrate aquí</a>
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
