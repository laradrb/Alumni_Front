import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HalfCircle from './HalfCircle';

describe('HalfCircle Component', () => {
    test('renders the image with correct src and alt text', () => {
        render(<HalfCircle />);
        const image = screen.getByAltText('orange half circle with black oval in the middle');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', expect.stringContaining('orangeCircle.jpg'));
    });

    test('renders the text content correctly', () => {
        render(<HalfCircle />);
        const textElement = screen.getByText(/Si eres un desarrollador en busca de nuevas oportunidades/i);
        expect(textElement).toBeInTheDocument();
    });
});