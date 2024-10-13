import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../assets/img/login.jpg';
import { 
  LoginContainer, 
  FormSection, 
  ImageSection, 
  StyledImage,
  Title, 
  Subtitle, 
  Input, 
  SubmitButton, 
  SignUpLink
} from './styledLoginComponent';
import GlobalStyle from '../../styled/GlobalStyle';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
  
      const userData = await response.json();
      console.log('Login successful. User data:', userData);
  
      if (!userData.role) {
        console.error('User role is missing in the response');
        setError('Error en la respuesta del servidor. Rol de usuario no especificado.');
        return;
      }
  
      localStorage.setItem('accessToken', userData.access);
      localStorage.setItem('userId', userData.user_id); 
      localStorage.setItem('authToken', userData.access);
  
      console.log(`User role: ${userData.role}`);
  
      let redirectPath;
      switch (userData.role) {
        case 'rp':
          redirectPath = '/rp/alumni';
          break;
        case 'coder':
          redirectPath = '/coder/alumni';
          break;
        case 'empresa':
          redirectPath = '/empresa/perfil-empresa';
          break;
        default:
          redirectPath = '/preregister';
      }
  
      console.log(`Redirecting to: ${redirectPath}`);
      navigate(redirectPath);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      setError(error.message || 'Ocurrió un error. Por favor, intente de nuevo más tarde.');
    }
  };

  return (
    <>
      <GlobalStyle />
      <LoginContainer role="main">
        <FormSection>
          <Title id="login-title">Iniciar sesión</Title>
          <Subtitle>Ingresa para acceder a tu cuenta en Alumni.</Subtitle>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <form onSubmit={handleSubmit} aria-labelledby="login-title">
            <Input 
              type="email" 
              placeholder="Correo electrónico" 
              aria-label="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input 
              type="password" 
              placeholder="Contraseña" 
              aria-label="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
