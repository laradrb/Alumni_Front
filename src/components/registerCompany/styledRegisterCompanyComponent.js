import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../atom/Input';

export const RegisterContainerCompany = styled.div`
    display: flex;
    max-width: 80rem;
    max-height: 65rem;
    margin: 12.5rem auto;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    overflow: hidden;
`;

export const FormSectionCompany = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center; 
    flex: 1;
    padding: 1.5rem;
`;

export const TitleCompany = styled.p`
    text-align: center;
    margin-top: 5.5rem;
    font-size: 2rem;
    color: #020100; 
    font-family: 'Poppins', sans-serif; 
    font-weight: bold; 
`;

export const SubtitleCompany = styled.p`
    font-size: 1.5rem;
    margin-top: -1rem;    
    margin-right: 4rem; 
    margin-left:4rem;  
    color: #020100;
    text-align: center;      
    font-family: 'Poppins', sans-serif; 
`;

export const FormCompany = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;
    width: 100%; 
`;

export const StyledInputCompany = styled(Input)`
    margin-bottom: 1.5rem; 
    width: 100%; 
`;

export const ButtonContainerCompany = styled.div`
    text-align: center;
    width: 100%;
`;

export const LinkContainerCompany = styled.p`
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-right: 3rem;
    font-family: 'Poppins', sans-serif;
    color: #020100;
    text-align: center;
`;

export const StyledLinkCompany = styled(Link)`
    text-decoration: none;
    color: #f74702;
    margin-left: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const ImageSectionCompany = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const StyledImageCompany = styled.img`
    width: 33.195rem; 
    height: 37.813rem;
    border-radius: 1.25rem;
    object-fit: cover;
`;