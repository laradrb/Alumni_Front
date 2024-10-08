import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HalfCircle from './HalfCircle';

describe('HalfCircle Component', () => {
    test('renders the image with correct src and alt text', () => {
        render(<HalfCircle />);
        const image = screen.getByAltText('orange half circle with black oval in the middle');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', expect.stringContaining('geometric.png'));
    });

    test('renders the text content correctly', () => {
        render(<HalfCircle />);
        const textElement = screen.getByText(/Si te dedicas al desarrollo y buscas nuevas oportunidades/i);
        expect(textElement).toBeInTheDocument();
    });
});