import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../atom/Input';

export const RegisterContainer = styled.div`
    display: flex;
    max-width: 80rem;
    max-height: 65rem;
    margin: 12.5rem auto;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    overflow: hidden;
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center; 
    flex: 1;
    padding: 1rem;
`;

export const Title = styled.p`
    text-align: center;
    font-size: 2rem; 
    color: #020100; 
    font-family: 'Poppins', sans-serif; 
    font-weight: bold; 
`;

export const Subtitle = styled.p`
    font-size: 1.5rem;    
    margin-right: 3rem;    
    color: #020100;
    margin-top: 0.75rem;
    text-align: center;      
    font-family: 'Poppins', sans-serif; 
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
`;

export const DropdownContainer = styled.div`
    display: flex;                                          
    margin-bottom: 1.5rem; 
    gap: 2rem;                         
`;

export const StyledInput = styled(Input)`
    margin-bottom: 1.5rem; 
    width: 100%; 
`;

export const ButtonContainer = styled.div`
    text-align: center;
    width: 100%;
`;

export const LinkContainer = styled.p`
    font-size: 1rem;
    margin-top: 2.5rem;
    margin-right: 3rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    text-align: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #f74702;
    margin-left: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const ImageSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const StyledImage = styled.img`
    width: 31.875rem; 
    height: 35.4827rem;
    border-radius: 1.25rem;
    object-fit: cover;
`;
