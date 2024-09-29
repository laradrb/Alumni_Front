import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import RegisterRPComponent from './RegisterRPComponent';

describe('RegisterRPComponent', () => {
    it('se renderiza correctamente y permite la interacción de los inputs', () => {
        render(
            <BrowserRouter>
                <RegisterRPComponent />
            </BrowserRouter>
        );

        expect(screen.getByText('Registro para RP')).toBeInTheDocument();
        expect(screen.getByText('Regístrate para acceder a tu cuenta en Alumni')).toBeInTheDocument();
        expect(screen.getByText('¿Ya tienes cuenta?')).toBeInTheDocument();
        expect(screen.getByText('Inicia sesión aquí')).toBeInTheDocument();

        const nameInput = screen.getByPlaceholderText('Nombre');
        const lastnameInput = screen.getByPlaceholderText('Apellidos');
        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        const passwordInput = screen.getByPlaceholderText('Contraseña');
        const registerButton = screen.getByRole('button', { name: 'Boton Registrarse' });

        expect(nameInput).toBeInTheDocument();
        expect(lastnameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();

        fireEvent.change(nameInput, { target: { value: 'Ana' } });
        fireEvent.change(lastnameInput, { target: { value: 'Mendez' } });
        fireEvent.change(emailInput, { target: { value: 'AnaM@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'MyPassword1.' } });

        expect(nameInput).toHaveValue('Ana');
        expect(lastnameInput).toHaveValue('Mendez');
        expect(emailInput).toHaveValue('AnaM@example.com');
        expect(passwordInput).toHaveValue('MyPassword1.');
    });
});