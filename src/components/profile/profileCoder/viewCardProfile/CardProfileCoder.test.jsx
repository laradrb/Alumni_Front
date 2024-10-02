import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardProfileCoder from './CardProfileCoder';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SettingsCoder from "../../../../../src/pages/SettingsCoder";


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


it('navigates to settings profile when CertificateButton is clicked', async () => {
    const user = userEvent.setup();

    render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<CardProfileCoder />} />
                <Route path="/settingsCoder" element={<SettingsCoder />} />
            </Routes>
        </MemoryRouter>
    );

    const certificadButton = screen.getByRole('button', { name: /editar perfil/i });
    expect(certificadButton).toBeInTheDocument();

    await user.click(certificadButton);

    expect(screen.getByText('Settings Coder')).toBeInTheDocument();
});

});
