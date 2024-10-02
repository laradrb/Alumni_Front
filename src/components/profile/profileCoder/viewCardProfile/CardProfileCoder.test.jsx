import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardProfileCoder from './CardProfileCoder';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


describe('CardProfileCoder Component', () => {
it('renders correctly', () => {
    render(
    <BrowserRouter>
        <CardProfileCoder />
    </BrowserRouter>
    );

    expect(screen.getByText('Linkedin')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Correo')).toBeInTheDocument();
});

it('navigates to settings profile when CertificadButton is clicked', async () => {
    render(
    <BrowserRouter>
        <CardProfileCoder />
    </BrowserRouter>
    );

    const certificadButton = screen.getByRole('button', { name: /certificadbutton/i });
    expect(certificadButton).toBeInTheDocument();

    userEvent.click(certificadButton);

    expect(window.location.pathname).toBe('/SettingsCoder');
});
});
