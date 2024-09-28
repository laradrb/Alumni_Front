import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardCoder from './CardCoder'; 

describe('CardCoder component', () => {
  it('should render the title and text correctly', () => {
   
    const title = 'Coder Title';
    const text = 'This is a description of the coder';
    const buttonText = <button>Click me</button>;

   
    render(<CardCoder title={title} text={text} buttonText={buttonText} />);

  
    const titleElement = screen.getByText(/Coder Title/i);
    expect(titleElement).toBeInTheDocument();

 
    const textElement = screen.getByText(/This is a description of the coder/i);
    expect(textElement).toBeInTheDocument();

  
    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});