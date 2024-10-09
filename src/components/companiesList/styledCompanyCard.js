import styled from "styled-components";

export const CompanyContainer = styled.div`
display: flex;
width: 69rem;
height: 14.9375rem;
flex-shrink: 0;
border-radius: 1.25rem;
border: 2px solid #FF4702;
align-items: center;
margin-bottom: 1.6rem;
margin-left: 4rem;
`;

export const LogoContainer = styled.div`
    display: flex;
    margin-left: 1.56rem; 
    width: 11rem;
    height: 13.2rem;

    img {
        width: 10.43rem;
        height: 11.5rem;
        border-radius: 0.4rem;
        object-fit: cover;
        margin: auto;
    }
`;

export const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 53.375rem;
    height: 11.5rem;
`;

export const NameCompany = styled.h2`
display: flex;
height: 1.0625rem;
width: 51.875rem;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
margin-left: 2.19rem;
color: #000;
font-family: "Poppins", sans-serif;
font-size: 1.125rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const AboutTheCompany = styled.p`
display: flex;
width: 51.875rem;
height: 8.9375rem;
flex-direction: column;
margin-left: 2.19rem;
color: #020100;
text-align: justify;
font-family: "Poppins", sans-serif;
font-size: 1rem;
font-style: normal;
font-weight: 300;
line-height: normal;
`;