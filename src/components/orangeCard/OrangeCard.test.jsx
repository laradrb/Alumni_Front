import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import OrangeCard from './orangeCard';

describe('OrangeCard Component', () => {
    it('should render the correct number of graduates', () => {
        render(<OrangeCard />);
        const graduatesTitle = screen.getByText('1378');
        expect(graduatesTitle).toBeInTheDocument();
    });

    it('should render the correct number of companies', () => {
        render(<OrangeCard />);
        const companiesTitle = screen.getByText('35');
        expect(companiesTitle).toBeInTheDocument();
    });

    it('should render the correct text for graduates', () => {
        render(<OrangeCard />);
        const graduatesText = screen.getByText('Personas graduadas');
        expect(graduatesText).toBeInTheDocument();
    });

    it('should render the correct text for companies', () => {
        render(<OrangeCard />);
        const companiesText = screen.getByText('Empresas conectadas');
        expect(companiesText).toBeInTheDocument();
    });

    it('should render the correct text', () => {
        render(<OrangeCard />);
        const supportText = screen.getByText(/Nadie comprende mejor los retos de quienes se dedican al desarrollo que otras personas expertas en el campo. Únete a nuestra comunidad y encuentra el apoyo que necesitas para crecer./i);
        expect(supportText).toBeInTheDocument();
    });
});