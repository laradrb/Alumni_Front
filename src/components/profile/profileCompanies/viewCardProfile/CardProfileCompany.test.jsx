import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardProfileCompany from './CardProfileCompany';

describe('CardProfileCompany Component', () => {
    const props = {
        name: 'Test Company',
        description: 'This is a job offer description.'
    };

    test('renders company name and description', () => {
        render(
            <Router>
                <CardProfileCompany {...props} />
            </Router>
        );

        const nameElement = screen.getByText(/Test Company/i);
        const descriptionElement = screen.getByText(/This is a job offer description./i);

        expect(nameElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
    });

    test('renders default values when no props are passed', () => {
        render(
            <Router>
                <CardProfileCompany />
            </Router>
        );

        const defaultName = screen.getByText(/Your Name/i);
        const defaultDescription = screen.getByText(/Describe your offerJob.../i);

        expect(defaultName).toBeInTheDocument();
        expect(defaultDescription).toBeInTheDocument();
    });

    test('renders edit button and navigates to settingsCompany', () => {
        render(
            <Router>
                <CardProfileCompany {...props} />
            </Router>
        );

        const editButton = screen.getByRole('button', { name: /Editar Perfil/i });
        expect(editButton).toBeInTheDocument();
    });

    test('renders contact, email, and website buttons', () => {
        render(
            <Router>
                <CardProfileCompany {...props} />
            </Router>
        );

        const contactButton = screen.getByRole('button', { name: /Contacto/i });
        const emailButton = screen.getByRole('button', { name: /Correo/i });
        const websiteButton = screen.getByRole('button', { name: /Sitio Web/i });

        expect(contactButton).toBeInTheDocument();
        expect(emailButton).toBeInTheDocument();
        expect(websiteButton).toBeInTheDocument();
    });

    test('renders add offers button and navigates to home', () => {
        render(
            <Router>
                <CardProfileCompany {...props} />
            </Router>
        );

        const addOffersButton = screen.getByRole('button', { name: /Añadir Ofertas/i });
        expect(addOffersButton).toBeInTheDocument();
    });
});
