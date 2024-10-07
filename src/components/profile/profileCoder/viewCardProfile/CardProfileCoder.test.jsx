import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest'; 
import { render, screen } from '@testing-library/react'; 
import CardProfileCoder from './CardProfileCoder'; 

describe('Card Component', () => {
it('renders correctly with name, subtitle, and description', () => {
    render(
    <BrowserRouter>
        <CardProfileCoder
        name="Camila Castro"
        subtitle="Factoria Asturias"
        description="Passionate about coding"
        />
    </BrowserRouter>
    );


    expect(screen.getByText('Camila Castro')).toBeInTheDocument();
    expect(screen.getByText('Factoria Asturias')).toBeInTheDocument();
    expect(screen.getByText('Passionate about coding')).toBeInTheDocument();


    expect(screen.getByRole('button', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /correo/i })).toBeInTheDocument();
});

});