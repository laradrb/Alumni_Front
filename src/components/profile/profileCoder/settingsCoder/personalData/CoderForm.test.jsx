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
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirmar Password')).toBeInTheDocument();
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
        
        const nameInput = screen.getByPlaceholderText('Nombre');
        const emailInput = screen.getByPlaceholderText('Password');
        const passwordInput = screen.getByPlaceholderText('Password');


        fireEvent.change(nameInput, { target: { value: 'Manu' } });
        fireEvent.change(emailInput, { target: { value: 'manu@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'MyPassword1.' } });

        expect(nameInput).toHaveValue('Manu');
        expect(emailInput).toHaveValue('manu@example.com');
        expect(passwordInput).toHaveValue('MyPassword1.');
    });

    it('renders the profile image', () => {
        render(
            <BrowserRouter>
                <CoderForm />
            </BrowserRouter>

        );
        const profileImage = screen.getByAltText('Imagen de ex-coder');
        expect(profileImage).toBeInTheDocument();
        expect(profileImage).toHaveAttribute('src', expect.stringContaining(''));
    });
});