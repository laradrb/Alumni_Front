import React from 'react';
import styled from 'styled-components';


const ButtonStyled = styled.button`
    width: 6.875rem;
    height: 1.688rem;    
    display: flex;     
    align-items: center;     
    justify-content: center; 
    background-color: #f74702;
    color: white;
    border: 0.063rem solid #f74702;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    font-family: "Poppins, sans-serif"
    font-size: 0.813rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: white;
        color: #f74702;
        border: 0.125rem solid #f74702;
    }
`;

const Button110 = ({ children, onClick, ...props }) => {
    return (
        <ButtonStyled onClick={onClick} {...props}>
            {children} 
        </ButtonStyled>
    );
};

export default Button110;