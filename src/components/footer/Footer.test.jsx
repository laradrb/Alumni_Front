import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer component', () => {
    it('renders the legal section with links', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        
        expect(screen.getByText(/Aviso legal/i)).toBeInTheDocument();
        expect(screen.getByText(/Política de Privacidad/i)).toBeInTheDocument();
        expect(screen.getByText(/Política de Cookies/i)).toBeInTheDocument();
        expect(screen.getByText(/Contacta/i)).toBeInTheDocument();
        expect(screen.getByText(/Blog/i)).toBeInTheDocument();
    });

    it('renders the social media icons with correct alt texts', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        expect(screen.getByAltText(/LinkedIn/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Twitter \(X\)/i)).toBeInTheDocument();
        expect(screen.getByAltText(/YouTube/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Facebook/i)).toBeInTheDocument();
    });
});
