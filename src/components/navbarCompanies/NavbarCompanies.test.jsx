import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import NavbarCompanies from './NavbarCompanies';

describe('NavbarPublic Component', () => {
it('renders correctly', () => {
    render(
    <BrowserRouter>
        <NavbarCompanies />
    </BrowserRouter>
    );
    

    expect(screen.getByText('APLICACIONES')).toBeInTheDocument();
    expect(screen.getByText('PERFIL')).toBeInTheDocument();
    expect(screen.getByText('CERRAR SESIÓN')).toBeInTheDocument();
});

it('renders correctly LogoF5', () => {
    render(
    <BrowserRouter>
        <NavbarCompanies />
    </BrowserRouter>
    );


    const logo = screen.getByRole('img'); 
    expect(logo).toBeInTheDocument();
});
});
