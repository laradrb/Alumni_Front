import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ImageComponent from './ImageComponent';

describe('ImageComponent', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <ImageComponent />
            </BrowserRouter>
        );
        
        expect(screen.getByText(/¡Felicidades por vuestra graduación!/i)).toBeInTheDocument()
        expect(screen.getByText(/¡Enhorabuena Coders!/i)).toBeInTheDocument();
    });
        
    it('renders the image with the correct alt text', () => {
        render(
            <BrowserRouter>
                <ImageComponent />
            </BrowserRouter>
        );
        
        const image = screen.getByAltText('Grupo de mujeres entregando diplomas de graduación');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', expect.stringContaining('alumni.jpg'));
        });    
    });

