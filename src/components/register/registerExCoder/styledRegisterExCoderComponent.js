import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../atom/Input';

export const RContainer = styled.div`
    display: flex;
    max-width: 80rem;
    max-height: rem;
    margin: 12.5rem auto;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    overflow: hidden;
`;

export const FormSection1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center; 
    flex: 1;
    padding: 1rem;
`;

export const Title1 = styled.p`
    text-align: center;
    font-size: 2rem; 
    color: #020100; 
    font-family: 'Poppins', sans-serif; 
    font-weight: bold; 
`;

export const Subtitle1 = styled.p`
    font-size: 1.5rem;    
    margin-right: 3rem;    
    color: #020100;
    margin-top: 0.75rem;
    text-align: center;      
    font-family: 'Poppins', sans-serif; 
`;

export const Form1 = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
`;

export const StyledInput1 = styled(Input)`
    margin-bottom: 1.5rem; 
    width: 100%; 
`;

export const DropdownContainer = styled.div`
    display: flex;                                          
    margin-bottom: 1.5rem; 
    gap: 2rem;                         
`;


export const ButtonContainer1 = styled.div`
    text-align: center;
    width: 100%;
`;

export const LinkContainer1 = styled.p`
    font-size: 1rem;
    margin-top: 2.5rem;
    margin-right: 3rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    text-align: center;
`;

export const StyledLink1 = styled(Link)`
    text-decoration: none;
    color: #f74702;
    margin-left: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const ImageSection1 = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const StyledImage1 = styled.img`
    width: 31.875rem; 
    height: 35.4827rem;
    border-radius: 1.25rem;
    object-fit: cover;
`;