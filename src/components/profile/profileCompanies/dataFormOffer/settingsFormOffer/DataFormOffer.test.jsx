import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import DataFormOffer from './DataFormOffer';

describe('DatFormOffer', () => {
    it('renders the form with all fields', () => {
        render(
            <BrowserRouter>
                <DataFormOffer/>
            </BrowserRouter>
    
        );
    
        expect(screen.getByPlaceholderText('Título de la Oferta')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Descripción:')).toBeInTheDocument();
        });
    });
        