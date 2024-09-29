import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%; 
`;

const DropdownButton = styled.button`
    width: 12.5rem; 
    height: 3.22rem;  
    padding: 1.2rem;
    border: none;  
    box-shadow: none;
    flex-shrink: 0; 
    transition: all 0.3s ease;
    border-radius: 1.875rem 1.875rem ${({ isOpen }) => (isOpen ? '0 0' : '1.875rem 1.875rem')}; 
    background-color: #E9E9E6;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #F0F0F0;
    }

    &:focus {
        outline: none;
    }
`;

const DropdownList = styled.ul`
    position: absolute;
    top: 100%; 
    left: 0;
    width: 12.5rem;  
    margin-top: -0.063rem;
    border: 0.063rem solid #E9E9E6;
    border-top: none;
    border-radius: 0 0 1.875rem 1.875rem;
    background-color: #E9E9E6;
    box-shadow: none;
    padding: 0;
    list-style: none;
    display: block;
    z-index: 1;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: scaleY(${({ isOpen }) => (isOpen ? '1' : '0')});
    transform-origin: top;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

const DropdownItem = styled.li`
    padding: 0.625rem 1.2rem;
    cursor: pointer;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;

    ${({ isOpen }) =>
        !isOpen &&
        `
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out;
    `}
    
    ${({ isOpen }) =>
        isOpen &&
        `
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s ease-in-out 0.3s;
    `}

    &:hover {
        background-color: #F0F0F0;
    }

    &:first-child {
        border-radius: 0;
    }
`;

const ArrowIcon = styled.svg`
    width: 2.5rem;  
    height: 2.5rem;
    fill: #A6A6A6; 
`;

const Dropdown = ({ options, onSelect, buttonText }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleDropdown = () => {
        setIsAnimating(true);
        if (isOpen) {
            setTimeout(() => {
                setIsOpen(false);
                setIsAnimating(false);
            }, 300); 
        } else {
            setIsOpen(true);
            setIsAnimating(false);
        }
    };

    const handleSelect = (option) => {
        onSelect(option);
        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsAnimating(false);
        }, 300); 
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown} isOpen={isOpen} isAnimating={isAnimating}>
                {buttonText}
                <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z" />
                </ArrowIcon>
            </DropdownButton>
            <DropdownList isOpen={isOpen}>
                {options.map((option, index) => (
                    <DropdownItem key={index} isOpen={isOpen} onClick={() => handleSelect(option)}>
                        {option}
                    </DropdownItem>
                ))}
            </DropdownList>
        </DropdownContainer>
    );
};

export default Dropdown;
