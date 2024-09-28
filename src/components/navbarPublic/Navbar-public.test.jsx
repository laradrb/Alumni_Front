import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavbarPublic from './Navbar-public.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('NavbarPublic Component', () => {
it('renders correctly', () => {
    render(
    <BrowserRouter>
        <NavbarPublic />
    </BrowserRouter>
    );
    

    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('INICIAR SESIÓN')).toBeInTheDocument();
    expect(screen.getByText('REGISTRARSE')).toBeInTheDocument();
});

it('renders correctly LogoF5', () => {
    render(
    <BrowserRouter>
        <NavbarPublic />
    </BrowserRouter>
    );


    const logo = screen.getByRole('img'); 
    expect(logo).toBeInTheDocument();
});
});
