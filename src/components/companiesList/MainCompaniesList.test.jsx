import React from 'react';
import { render, screen } from '@testing-library/react';
import MainCompaniesList from './MainCompaniesList';
import '@testing-library/jest-dom';

describe('MainCompaniesList Component', () => {
    test('renders header text', () => {
        render(<MainCompaniesList />);
        const headerElement = screen.getByText(/Empresas/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('renders all company cards', () => {
        render(<MainCompaniesList />);
        const companyNames = [
            "Nombre de la empresa 1",
            "Nombre de la empresa 2",
            "Nombre de la empresa 3"
        ];

        companyNames.forEach(name => {
            const companyElement = screen.getByText(name);
            expect(companyElement).toBeInTheDocument();
        });
    });

    test('renders company descriptions', () => {
        render(<MainCompaniesList />);
        const companyDescriptions = [
            "Descripción de la empresa...",
            "Descripción de la empresa...",
            "Descripción de la empresa..."
        ];

        companyDescriptions.forEach(description => {
            const descriptionElement = screen.getAllByText(description);
            expect(descriptionElement.length).toBeGreaterThan(0);
        });
    });

    test('renders company logos', () => {
        render(<MainCompaniesList />);
        const logoUrls = [
            "https://via.placeholder.com/167x184",
            "https://via.placeholder.com/167x184",
            "https://via.placeholder.com/167x184"
        ];

        logoUrls.forEach(url => {
            const logoElement = screen.getAllByRole('img', { src: url });
            expect(logoElement.length).toBeGreaterThan(0);
        });
    });
});