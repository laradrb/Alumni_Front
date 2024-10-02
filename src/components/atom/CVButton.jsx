import React, { useRef } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 11.25rem;
    height: 3.375rem;
    padding: 1rem;
    background-color: #f74702;
    color: white;
    border: 0.063rem solid #f74702;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    font-size: 1.125rem;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: white;
        color: #f74702;
        border: 0.125rem solid #f74702;
    }
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const CVButton = ({ children, onChange, ...props }) => {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && onChange) {
            onChange(file);
        }
    };

    return (
        <>
            <ButtonStyled onClick={handleClick} type="button" {...props}>
                {children}
            </ButtonStyled>
            <HiddenFileInput 
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
            />
        </>
    );
};

export default CVButton;