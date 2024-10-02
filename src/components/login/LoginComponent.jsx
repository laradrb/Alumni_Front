import React from 'react';
import login from '../../assets/img/login.jpg';
import { LoginContainer, FormSection, ImageSection, StyledImage,Title, Subtitle, Input, SubmitButton, SignUpLink} from './styledLoginComponent';
import GlobalStyle from '../../styled/GlobalStyle'

const LoginComponent = () => {
    /* logica login */

    // si la authenticación es correcta, se redirige a la página correspondiente según el role del usuario
    // get user 
    // if (getUserRole() === 'admin') {
    //     return <Redirect to="/admin" />;
    // } else if (getUserRole() === 'teacher') {
    //     return <Redirect to="/teacher" />;
    // } else if (getUserRole() === 'student') {
    //     return <Redirect to="/student" />;
    // }

    const handleSubmit = () => {
        // aqui se recogen datos formulario y se hace peticion a backend
        // si peticion exitosa, redireccionar a paginas diferentes según roles
        
    }
    return (
    <>
        <GlobalStyle />
        <LoginContainer role="main">
            <FormSection>
                <Title>Iniciar sesión</Title>
                <Subtitle>Ingresa para acceder a tu cuenta en Alumni.</Subtitle>
                <form aria-labelledby="login-title">
                    <Input type="email" placeholder="Correo electrónico" aria-label="Correo electrónico"
                        required/>
                    <Input type="password" placeholder="Contraseña" aria-label="Contraseña"
                        required/>
                    <SubmitButton type="submit">Iniciar sesión</SubmitButton>
                </form>
                <SignUpLink>
                    ¿No tienes cuenta? <a href="/preregister" aria-label="Registrarse">Regístrate aquí</a>
                </SignUpLink>
            </FormSection>
            <ImageSection aria-hidden="true">
                <StyledImage src={login} alt="Login" />
            </ImageSection>
        </LoginContainer>
        </>
    );
};
export default LoginComponent;
