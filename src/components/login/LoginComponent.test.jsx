import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginComponent from './LoginComponent';
import { BrowserRouter } from 'react-router-dom';



describe('LoginComponent', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>
        
    );
        
    expect(screen.getByText('Ingresa para acceder a tu cuenta en Alumni.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Iniciar sesión' })).toBeInTheDocument();
    expect(screen.getByText('¿No tienes cuenta?')).toBeInTheDocument();
    expect(screen.getByText('Regístrate aquí')).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Correo electrónico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
    });
});