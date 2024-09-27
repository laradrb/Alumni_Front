import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';

describe('Carousel Component', () => {
    test('displays the first image initially', () => {
        render(<Carousel />);
        const firstImage = screen.getByAltText('Slide 0');
        expect(firstImage).toBeInTheDocument();
    });

    test('navigates to the next image when the right arrow is clicked', () => {
        render(<Carousel />);
        const rightArrow = screen.getByAltText('Right Arrow');
        fireEvent.click(rightArrow);
        const secondImage = screen.getByAltText('Slide 1');
        expect(secondImage).toBeInTheDocument();
    });

    test('loops back to the first image after the last image', () => {
        render(<Carousel />);
        const rightArrow = screen.getByAltText('Right Arrow');
        for (let i = 0; i < 5; i++) {
            fireEvent.click(rightArrow);
        }
        const firstImage = screen.getByAltText('Slide 0');
        expect(firstImage).toBeInTheDocument();
    });
});
