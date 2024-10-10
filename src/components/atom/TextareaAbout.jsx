import React from 'react';
import styled from 'styled-components';

export const StyledAboutme = styled.textarea`
    width: 25rem;
    height: 7.625rem;
    border: 0.063rem solid #e9e9e6;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    padding: 1rem 1rem 0 1rem; 
    border-radius: 1.875rem;
    background-color: #e9e9e6;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    resize: none; 
    vertical-align: top; 
    line-height: 1.5; 
    &:focus {
        outline: none;
        box-shadow: 0 -0.375rem 0.625rem -0.063remrgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
    }   
`;

const TextareaAbout = ({placeholder, ...props}) => {
    return (
        <StyledAboutme
        placeholder={placeholder}
        {...props} 
        />
    );
};

export default TextareaAbout;