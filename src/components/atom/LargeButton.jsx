import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 31.041rem;
    height: 3.222rem;
    padding: 1.2rem;
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

const LargeButton = ({ children, onClick, ...props }) => {
    return (
        <ButtonStyled onClick={onClick} {...props}>
            {children} 
        </ButtonStyled>
    );
};

export default LargeButton;
