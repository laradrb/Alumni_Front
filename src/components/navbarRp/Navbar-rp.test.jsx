import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import NavbarRp from './Navbar-rp.jsx'; 

describe('NavbarRp Component', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <NavbarRp />
      </BrowserRouter>
    );
    
  
    expect(screen.getByText('ALUMNI')).toBeInTheDocument();
    expect(screen.getByText('CODERS')).toBeInTheDocument();
    expect(screen.getByText('EMPRESAS')).toBeInTheDocument();
    expect(screen.getByText('OFERTAS')).toBeInTheDocument();
    expect(screen.getByText('PERFIL')).toBeInTheDocument();
    expect(screen.getByText('CERRAR SESIÓN')).toBeInTheDocument();
  });

  it('renders correctly LogoF5', () => {
    render(
      <BrowserRouter>
        <NavbarRp />
      </BrowserRouter>
    );

  
    const logo = screen.getByRole('img'); 
    expect(logo).toBeInTheDocument();
  });
});
