import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SettingsCertificate from './SettingsCertificateComponent';

describe('SettingsCertificate', () => {
  it('debería renderizar el formulario correctamente', () => {
    render(<SettingsCertificate />);

    expect(screen.getByPlaceholderText('Título')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Escuela')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Fecha de Inicio (dd/mm/aaaa)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Fecha de Fin (dd/mm/aaaa)')).toBeInTheDocument();
  });

  it('permite escribir en los campos del formulario', () => {
    render(<SettingsCertificate />);

    const tituloInput = screen.getByPlaceholderText('Título');
    const escuelaInput = screen.getByPlaceholderText('Escuela');

    fireEvent.change(tituloInput, { target: { value: 'Nuevo Título' } });
    fireEvent.change(escuelaInput, { target: { value: 'Nueva Escuela' } });

    expect(tituloInput).toHaveValue('Nuevo Título');
    expect(escuelaInput).toHaveValue('Nueva Escuela');
  });
});
