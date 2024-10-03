import styled from "styled-components";
import CertificateButton from "../../../atom/CertificateButton";



export const CardContainer = styled.div`
    display: flex;
    width:76.118rem;
    height: 26.188rem;
    margin-top: 4.813rem;
    margin-left: 6.969rem;
    margin-right: 6.969rem;
    border-radius: 1.24rem;
`;


export const CardView = styled.div`
position: relative;
display: flex;
align-items: flex-start;
width: 74.0625rem;
`;

export const ImageContainer = styled.div`
margin-right: 1.25rem;

img {
    width: 11.5rem;
    height: 12.875rem;
    border-radius: 0.5rem;
    object-fit: cover;
    margin-top: 4.188rem;
    margin-right: 1.75rem;
    margin-left: 1.75rem;
}
`;


export const EditButton = styled(CertificateButton)`
position: absolute;
top: 0.625rem;   
left: 0.625rem;  
width: 6.9375rem;  
height: 1.75rem;   
margin-top: 13.4375rem; 
margin-left: 71.6875rem;
`;



export const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 46.6875rem;
margin-top: 3.188rem;
`;

export const AboutMe = styled.p`
width: 46.6875rem;
height: 5.9375rem;
font-size: 1rem;
color: #333;
margin: 0.625rem 0;
overflow: hidden;
text-overflow: ellipsis;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 0.625rem;
margin-top: 0.9375rem;

`;

export const NameCoder = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 1.25rem;
margin: 0; 
margin-top: 14.8125rem; 
margin-left: 24.6875rem;
`;

export const Promotion= styled.h4`
font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 1.125rem;
color: #666;
margin-top: 17.25rem; 
margin-left: 24.6875rem;
`;