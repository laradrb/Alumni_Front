import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavbarCoders from './Navbar-coders.jsx';
import { BrowserRouter } from 'react-router-dom';


describe('NavbarCoders Component', () => {
it('renders correctly', () => {
    render(
    <BrowserRouter>
        <NavbarCoders />
    </BrowserRouter>
    );
    

    expect(screen.getByText('ALUMNI')).toBeInTheDocument();
    expect(screen.getByText('CODERS')).toBeInTheDocument();
    expect(screen.getByText('OFERTAS')).toBeInTheDocument();
    expect(screen.getByText('PERFIL')).toBeInTheDocument();
    expect(screen.getByText('CERRAR SESION')).toBeInTheDocument();
});

it('renders correctly ', () => {
    render(
    <BrowserRouter>
        <NavbarCoders />
    </BrowserRouter>
    );
    const logo = screen.getByRole('img'); 
    expect(logo).toBeInTheDocument();
});
});