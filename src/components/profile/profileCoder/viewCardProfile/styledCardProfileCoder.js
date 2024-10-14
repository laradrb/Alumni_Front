import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 69.75rem;
    height: 17rem;
`;

export const CardView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 52rem;
    height: 16rem;
`;

export const ImageContainer = styled.div`
    margin-left: 3rem; 
    margin-right: 1.25rem;

    img {
        width: 11.5rem;
        height: 12.875rem;
        border-radius: 0.5rem;
        object-fit: cover;
        margin-top: 4.188rem; 
    }
`;

export const NameEditContainer = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    width: 100%; 
    margin-top: 4.188rem; 
`;

export const AboutMe = styled.p`
    width: 46.6875rem;
    height: auto; 
    font-size: 1rem;
    color: #333;
    margin: 0.625rem 0;
    margin-bottom: 2.5rem;
    font-family: 'Poppins', sans-serif;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.625rem;
    margin-top: 2.5rem; 
`;

export const NameCoder = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    margin: 0;
`;

export const Promotion = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
    color: #666;
    margin-top: 1rem; 
`;
