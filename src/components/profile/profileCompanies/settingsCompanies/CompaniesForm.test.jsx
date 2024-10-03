import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import CompaniesForm from './CompaniesForm';

describe('CompaniesForm', () => {
    it('renders the form with all fields', () => {
        render(
            <BrowserRouter>
                <CompaniesForm />
            </BrowserRouter>
    
        );
        expect(screen.getByPlaceholderText('Nombre Empresa/Razón social')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('N.I.F')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Sitio Web')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Teléfono')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Sobre nosotros')).toBeInTheDocument();
    ;
        const razonsocialInput = screen.getByPlaceholderText('Nombre Empresa/Razón social');
        const nifInput = screen.getByPlaceholderText('N.I.F');
        const emailInput = screen.getByPlaceholderText('Correo electrónico');
        const passwordInput = screen.getByPlaceholderText('Contraseña');

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