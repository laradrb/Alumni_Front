import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PreRegisterForm from './PreRegisterForm';

describe('PreRegisterForm component', () => {
  
  it('should render the form title', () => {
    
    render(
      <MemoryRouter>
        <PreRegisterForm />
      </MemoryRouter>
    );


    expect(screen.getByText('Formulario de registro')).toBeInTheDocument();
  });

  it('should render all the profile options', () => {
    render(
      <MemoryRouter>
        <PreRegisterForm />
      </MemoryRouter>
    );


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


    expect(screen.getByText('Responsable de Promoción').closest('a')).toHaveAttribute('href', '/registerRP');
    expect(screen.getByText('Coder/Ex-coder').closest('a')).toHaveAttribute('href', '/registerExCoder');
    expect(screen.getByText('Empresa').closest('a')).toHaveAttribute('href', '/registerCompany');
  });

  it('should apply the correct styles to the title', () => {
    render(
      <MemoryRouter>
        <PreRegisterForm />
      </MemoryRouter>
    );

    const title = screen.getByText('Formulario de registro');

    expect(title).toHaveStyle('font-size: 2.5rem');
    expect(title).toHaveStyle('color: #373737');
  });
});
