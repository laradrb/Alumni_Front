import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import RpForm from './RpForm';

describe('RpForm', () => {
    it('renders the form with all fields', () => {
        render(
            <BrowserRouter>
                <RpForm />
            </BrowserRouter>
    
        );
        expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Apellidos')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Correo')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirmar Contraseña')).toBeInTheDocument();
        });

    it('handles school selection', () => {
        render(
            <BrowserRouter>
                <RpForm />
            </BrowserRouter>
    
        );
        
    const schoolSelect = screen.getByText('Escuela');
    fireEvent.change(schoolSelect, { target: { value: 'Factoria F5 Barcelona' } });
    
        expect(screen.getByText('Factoria F5 Barcelona')).toBeInTheDocument();
        });

    it('allows typing in text fields', () => {
            render(
                <BrowserRouter>
                    <RpForm />
                </BrowserRouter>

        );

        const nombreInput = screen.getByPlaceholderText('Nombre');
        const apellidosInput = screen.getByPlaceholderText('Apellidos');
        const emailInput = screen.getByPlaceholderText('Correo');
        const passwordInput = screen.getByPlaceholderText('Contraseña');
    
        expect(nombreInput).toBeInTheDocument();
        expect(apellidosInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    ;
    
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
