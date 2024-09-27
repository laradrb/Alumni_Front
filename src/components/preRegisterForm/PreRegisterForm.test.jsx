import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PreRegisterForm from './PreRegisterForm';

describe('PreRegisterForm component', () => {
  
  it('should render the form title', () => {
    // Renderizamos el componente con un MemoryRouter ya que el componente usa enlaces de React Router
    render(
      <MemoryRouter>
        <PreRegisterForm />
      </MemoryRouter>
    );

    // Verificamos que el título se renderiza correctamente
    expect(screen.getByText('Formulario de registro')).toBeInTheDocument();
  });

  it('should render all the profile options', () => {
    render(
      <MemoryRouter>
        <PreRegisterForm />
      </MemoryRouter>
    );

    // Verificamos que los tres botones se renderizan con el texto correcto
    expect(screen.getByText('Responsable de Promoción')).toBeInTheDocument();
    expect(screen.getByText('Coder/Ex-coder')).toBeInTheDocument();
    expect(screen.getByText('Empresa')).toBeInTheDocument();
  });

  it('should have correct links for each button', () => {
    render(
      <MemoryRouter>
        <PreRegisterForm />
      </MemoryRouter>
    );

    // Verificamos que cada botón tiene el enlace correcto
    expect(screen.getByText('Responsable de Promoción').closest('a')).toHaveAttribute('href', '/registerRP');
    expect(screen.getByText('Coder/Ex-coder').closest('a')).toHaveAttribute('href', '/registerCoder');
    expect(screen.getByText('Empresa').closest('a')).toHaveAttribute('href', '/registerCompany');
  });

  it('should apply the correct styles to the title', () => {
    render(
      <MemoryRouter>
        <PreRegisterForm />
      </MemoryRouter>
    );

    const title = screen.getByText('Formulario de registro');
    // Verifica si el título tiene los estilos esperados
    expect(title).toHaveStyle('font-size: 2.5rem');
    expect(title).toHaveStyle('color: #373737');
  });
});
