import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SkillsCard from './SkillsForm';

describe('SkillsCard', () => {
    const mockSkills = ['JavaScript', 'React', 'Node.js'];
    const mockSelectedSkills = ['React'];
    const mockOnSkillToggle = vi.fn();

    it('renders the title', () => {
        render(
            <SkillsCard
                title="My Skills"
                skills={mockSkills}
                selectedSkills={mockSelectedSkills}
                onSkillToggle={mockOnSkillToggle}
            />
        );

        expect(screen.getByText('My Skills')).toBeInTheDocument();
    });

    it('renders the skills', () => {
        render(
            <SkillsCard
                title="My Skills"
                skills={mockSkills}
                selectedSkills={mockSelectedSkills}
                onSkillToggle={mockOnSkillToggle}
            />
        );

        mockSkills.forEach(skill => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        });
    });
});