import React from 'react';
import styled from 'styled-components';

const InputGeneral = styled.input`
    width: 31.041rem;
    height: 3.222rem;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    border: 0.063rem solid #e9e9e6;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    background-color: #e9e9e6;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;

    &:focus {
        outline: none;
        box-shadow: 0 -0.375rem 0.625rem -0.063rem rgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
    }
`;

const Input = ({ type, placeholder, name, value, onChange }) => {
    return (
        <InputGeneral 
            type={type} 
            name={name}
            placeholder={placeholder} 
            value = {value}
            onChange = {onChange}
        />
    );
};

export default Input;


