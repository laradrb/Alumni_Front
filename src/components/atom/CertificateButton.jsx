import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonStyled = styled.button`
    width: 9.375rem;
    height: 1.75rem;
    padding-bottom: 0.125rem;
    padding-top: 0.125rem;
    justify-content: center;
    background-color: #f74702;
    color: white;
    border: 0.063rem solid #f74702;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    font-size: 0.8125rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    &:hover {
        background-color: white;
        color: #f74702;
        border: 0.125rem solid #f74702;
    }
`;

const CertificateButton = ({ children, ...props }) => {
    const navigate = useNavigate();  

    const handleClick = () => {
        // Redirige a la ex-coder a la página del formulario del certificado
        navigate('/ruta-del-formulario-certificado'); 
    };

    return (
        <ButtonStyled onClick={handleClick} {...props}>
            {children}
        </ButtonStyled>
    );
};

export default CertificateButton;