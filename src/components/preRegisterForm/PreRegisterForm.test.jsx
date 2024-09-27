import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PreRegisterForm from './PreRegisterForm';

test('Should display three buttons with correct text and navigation paths', () => {
  render(
    <Router>
      <PreRegisterForm />
    </Router>
  );

  const buttons = screen.getAllByRole('link');

  expect(buttons).toHaveLength(3);

  expect(buttons[0]).toHaveTextContent('Responsable de Promoción');
  expect(buttons[0]).toHaveAttribute('href', '/responsable-promocion');

  expect(buttons[1]).toHaveTextContent('Coder/Ex-coder');
  expect(buttons[1]).toHaveAttribute('href', '/coder-ex-coder');

  expect(buttons[2]).toHaveTextContent('Empresa');
  expect(buttons[2]).toHaveAttribute('href', '/empresa');
});