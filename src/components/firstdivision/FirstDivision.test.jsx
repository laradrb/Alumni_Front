import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FirstDivision from './FirstDivision';

test('renders FirstDivision component, and checks for the title', () => {   
    render(<FirstDivision />);
    const titleElement = screen.getByRole('heading', { name: /ALUMNI/i });
    expect(titleElement).toBeInTheDocument();
});

test('renders FirstDivision component, and checks for the subtitle', () => {
    render(<FirstDivision />);
    const subtitleElement = screen.getByText(/Conectando Coders con Oportunidades Reales/i);
    expect(subtitleElement).toBeInTheDocument();
});

test('renders FirstDivision component, and checks for the text content', () => {
    render(<FirstDivision />);
    const textElement = screen.getByText(/Alumni es una comunidad diseñada para conectar a empresas con los coders más talentosos y capacitados/i);
    expect(textElement).toBeInTheDocument();
});

test('renders FirstDivision component, and checks for the image', () => {
    render(<FirstDivision />);
    const imgElement = screen.getByAltText(/3 developers working together/i);
    expect(imgElement).toBeInTheDocument();
});
