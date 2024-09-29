import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
    display: inline-block;
    width: 100%;
`;

const DropdownLargeButton = styled.button`
    width: 31.041rem;
    height: 3.222rem;
    padding: 1.2rem;
    border: none;
    box-shadow: none;
    flex-shrink: 0;
    transition: all 0.3s ease;
    border-radius: 1.875rem 1.875rem ${({ $isOpen }) => ($isOpen ? '0 0' : '1.875rem 1.875rem')};
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
    width: 31.041rem;
    margin-top: -0.063rem;
    background-color: #E9E9E6;
    padding: 0;
    list-style: none;
    overflow: hidden;
    max-height: ${({ $isOpen }) => ($isOpen ? '15rem' : '0')};
    transition: max-height 0.3s ease-in-out;
    box-shadow: ${({ $isOpen }) => ($isOpen ? '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' : 'none')};
    border-radius: 0 0 1.875rem 1.875rem; 
`;

const DropdownItem = styled.li`
    padding: 0.625rem 1.2rem;
    cursor: pointer;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;

    &:hover {
        background-color: #F0F0F0;
    }
`;

const ArrowIcon = styled.svg`
    width: 2.5rem;
    height: 2.5rem;
    fill: #A6A6A6;
`;

const DropdownLargeButtonComponent = ({ options, onSelect, buttonText }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleDropdown = () => {
        if (isOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsOpen(true);
        }
    };

    const handleSelect = (option) => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
            onSelect(option);
        }, 300);
    };

    return (
        <DropdownContainer>
            <DropdownLargeButton onClick={toggleDropdown} $isOpen={isOpen} type="button">
                {buttonText}
                <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z" />
                </ArrowIcon>
            </DropdownLargeButton>
            <DropdownList $isOpen={isOpen && !isClosing}>
                {options.map((option, index) => (
                    <DropdownItem key={index} onClick={() => handleSelect(option)}>
                        {option}
                    </DropdownItem>
                ))}
            </DropdownList>
        </DropdownContainer>
    );
};

export default DropdownLargeButtonComponent;
