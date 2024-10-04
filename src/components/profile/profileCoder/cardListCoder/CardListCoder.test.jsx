import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CardListCoder from './CardListCoder';

describe('CardListCoder component', () => {
it('should render the coder details correctly', () => {
    const name = 'Camila Castro';
    const location = 'Factoria Asturias';
    const gender = 'Mujer';
    const image = 'https://example.com/image.jpg';

    render(<CardListCoder name={name} location={location} gender={gender} image={image} />);

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();

    const locationElement = screen.getByText(location);
    expect(locationElement).toBeInTheDocument();

    const genderElement = screen.getByText(gender);
    expect(genderElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', image);
});
});
