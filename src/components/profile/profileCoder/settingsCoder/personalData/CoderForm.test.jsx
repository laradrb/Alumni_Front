import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import CoderForm from './CoderForm';

vi.mock('../../../../atom/CVButton', () => ({
    default: ({ children, onChange }) => (
    <button onClick={() => onChange({ name: 'test.pdf' })}>{children}</button>
    ),
}));

vi.mock('../../../../atom/DropdownMediumButton', () => ({
    default: ({ options, onSelect, buttonText }) => (
    <select onChange={(e) => onSelect(e.target.value)}>
        <option>{buttonText}</option>
        {options.map((option) => (
        <option key={option} value={option}>
            {option}
        </option>
        ))}
    </select>
    ),
}));

describe('CoderForm', () => {
    it('renders the form with all fields', () => {
        render(
            <BrowserRouter>
                <CoderForm />
            </BrowserRouter>
    
        );
    
        expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Apellidos')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Sobre mí')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('GitHub')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Linkedin')).toBeInTheDocument();
        expect(screen.getByText('Agrega tu CV')).toBeInTheDocument();
        expect(screen.getByText('Escuela')).toBeInTheDocument();
        });

    it('handles school selection', () => {
        render(
            <BrowserRouter>
                <CoderForm />
            </BrowserRouter>
    
        );
    
    const schoolSelect = screen.getByText('Escuela');
    fireEvent.change(schoolSelect, { target: { value: 'Factoria F5 Barcelona' } });
    
        expect(screen.getByText('Factoria F5 Barcelona')).toBeInTheDocument();
        });

    it('allows typing in text fields', () => {
        render(
            <BrowserRouter>
                <CoderForm />
            </BrowserRouter>

        );
        
        const nombreInput = screen.getByPlaceholderText('Nombre');
        const apellidosInput = screen.getByPlaceholderText('Apellidos');
        const emailInput = screen.getByPlaceholderText('Correo electrónico');
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