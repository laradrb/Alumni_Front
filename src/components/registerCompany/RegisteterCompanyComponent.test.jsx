import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import RegisterCompanyComponent from './RegisterCompanyComponent';

describe('RegisterCompanyComponent', () => {
    it('se renderiza correctamente y permite la interacción de los inputs', () => {
        render(
            <BrowserRouter>
                <RegisterCompanyComponent />
            </BrowserRouter>
        );

        expect(screen.getByText('Registro para Empresas')).toBeInTheDocument();
        expect(screen.getByText('Regístrate para acceder a tu cuenta en Alumni.')).toBeInTheDocument();
        expect(screen.getByText('¿Ya tienes cuenta?')).toBeInTheDocument();
        expect(screen.getByText('Inicia sesión aquí')).toBeInTheDocument();

        const razonsocialInput = screen.getByPlaceholderText('Nombre de la empresa/razón social');
        const nifInput = screen.getByPlaceholderText('N.I.F');
        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        const passwordInput = screen.getByPlaceholderText('Contraseña');
        const registerButton = screen.getByRole('button', { name: 'Boton Registrarse' });

        expect(razonsocialInput).toBeInTheDocument();
        expect(nifInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();

        fireEvent.change(razonsocialInput, { target: { value: 'Factory' } });
        fireEvent.change(nifInput, { target: { value: 'b23333333' } });
        fireEvent.change(emailInput, { target: { value: 'factory@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'MyPassword1.' } });

        expect(razonsocialInput).toHaveValue('Factory');
        expect(nifInput).toHaveValue('b23333333');
        expect(emailInput).toHaveValue('factory@example.com');
        expect(passwordInput).toHaveValue('MyPassword1.');
    });
});