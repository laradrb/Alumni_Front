import React from 'react';
import { render, screen } from '@testing-library/react';
import JobOffersList from './JobOffersList';

describe('JobOffersList', () => {
    test('renders the header text', () => {
        render(<JobOffersList />);
        const headerElement = screen.getByText(/Ofertas/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('renders all job offers', () => {
        render(<JobOffersList />);
        const jobOffers = screen.getAllByText(/Descripción del puesto de trabajo.../i);
        expect(jobOffers).toHaveLength(3);
    });

    test('renders job offer titles', () => {
        render(<JobOffersList />);
        const jobTitle1 = screen.getByText(/Oferta 1/i);
        const jobTitle2 = screen.getByText(/Oferta 2/i);
        const jobTitle3 = screen.getByText(/Oferta 3/i);
        expect(jobTitle1).toBeInTheDocument();
        expect(jobTitle2).toBeInTheDocument();
        expect(jobTitle3).toBeInTheDocument();
    });

    test('renders job offer logos', () => {
        render(<JobOffersList />);
        const logos = screen.getAllByRole('img');
        expect(logos).toHaveLength(3);
    });
});