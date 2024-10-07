import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CompleteFormOffer from './CompleteForm';

describe('CompleteFormOffer Component', () => {
  it('renders the form title correctly', () => {
    render(<CompleteFormOffer />);
    
    expect(screen.getByText(/Formulario de Ofertas/i)).toBeInTheDocument();
  });

  it('renders the DataFormOffer and CompleteSkills components', () => {
    render(<CompleteFormOffer />);
    
    expect(screen.getByPlaceholderText(/Título de la Oferta/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Descripción:/i)).toBeInTheDocument();
    
    const cssElements = screen.getAllByText(/CSS/i);
    expect(cssElements.length).toBeGreaterThan(0);
    
    expect(screen.getByLabelText(/HTML/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/JavaScript/i)).toBeInTheDocument();
  });
});