import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CardViewRp from './CardViewRp'; 

describe('CardViewRp Component', () => {
it('renders correctly with provided props', () => {
    render(
    <BrowserRouter>
        <CardViewRp 
        name="Cristina Fernandez" 
        subtitle="Escuela Asturias" 
        description="cristina.fernandez@factoria.com" 
        />
    </BrowserRouter>
    );


    expect(screen.getByText('Mi Perfil')).toBeInTheDocument();
    expect(screen.getByText('Cristina Fernandez')).toBeInTheDocument();
    expect(screen.getByText('Escuela Asturias')).toBeInTheDocument();
    expect(screen.getByText('cristina.fernandez@factoria.com')).toBeInTheDocument();

    const editButton = screen.getByRole('button', { name: /editar perfil/i });
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveAttribute('aria-label', 'Editar Perfil');
});

it('renders default values when no props are provided', () => {
    render(
    <BrowserRouter>
        <CardViewRp />
    </BrowserRouter>
    );

    
    expect(screen.getByText('Mi Perfil')).toBeInTheDocument();
    expect(screen.getByText('Your Name')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
    expect(screen.getByText('correo')).toBeInTheDocument();
});
});

