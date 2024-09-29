import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import RegisterExCoderComponent from './RegisterExCoderComponent';

describe('RegisterExCoderComponent', () => {
    it('se renderiza correctamente y permite la interacción de los inputs', () => {
        render(
            <BrowserRouter>
                <RegisterExCoderComponent />
            </BrowserRouter>
        );

        expect(screen.getByText('Registro para Ex-Coder')).toBeInTheDocument();
        expect(screen.getByText('Regístrate para acceder a tu cuenta en Alumni')).toBeInTheDocument();
        expect(screen.getByText('¿Ya tienes cuenta?')).toBeInTheDocument();
        expect(screen.getByText('Inicia sesión aquí')).toBeInTheDocument();

        const nombreInput = screen.getByPlaceholderText('Nombre');
        const apellidosInput = screen.getByPlaceholderText('Apellidos');
        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        const passwordInput = screen.getByPlaceholderText('Contraseña');
        const registerButton = screen.getByRole('button', { name: 'Boton Registrarse' });

        expect(nombreInput).toBeInTheDocument();
        expect(apellidosInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();

        fireEvent.change(nombreInput, { target: { value: 'Maria' } });
        fireEvent.change(apellidosInput, { target: { value: 'Montilla' } });
        fireEvent.change(emailInput, { target: { value: 'mariam2@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'MyPassword1.' } });

        expect(nombreInput).toHaveValue('Maria');
        expect(apellidosInput).toHaveValue('Montilla');
        expect(emailInput).toHaveValue('mariam2@example.com');
        expect(passwordInput).toHaveValue('MyPassword1.');
    });
});
