import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SettingsButtons from './SettingsButtons';

describe('SettingsButtons Component', () => {
    it('should render SaveButton with text "Borrar Cuenta"', () => {
        render(<SettingsButtons />);
        const deleteButton = screen.getByText('Borrar Cuenta');
        expect(deleteButton).toBeInTheDocument();
    });

    it('should render SaveButton with text "Guardar Cambios"', () => {
        render(<SettingsButtons />);
        const saveButton = screen.getByText('Guardar Cambios');
        expect(saveButton).toBeInTheDocument();
    });
});