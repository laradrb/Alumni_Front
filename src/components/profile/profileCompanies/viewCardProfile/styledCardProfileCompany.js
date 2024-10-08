import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    width: 74.0625rem;
    min-height: 63.68rem;
    height: auto;
    border-radius: 1.25rem;
    border: 2px solid #FF4700;
    margin: 4rem auto;
    padding: 0.5rem;
    box-sizing: border-box;


`;

export const ImageContainer = styled.div`
    margin-left: 3.69rem; 
    margin-right: 1.25rem;

    img {
        width: 10.43rem;
        height: 11.5rem;
        border-radius: 0.5rem;
        object-fit: cover;
        margin-top: 4.188rem; 
        margin-bottom: 0;
    }
`;

export const CardView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 52rem;
    height: 16rem;
`;



export const NameEditContainer = styled.div`
display: flex;
align-items: center; 
justify-content: space-between; 
width: 100%; 
margin-top: 4.188rem; 

`;

export const NameCompany = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    margin: 0;
`;

export const OfferJob = styled.p`
display: flex;
width: 51.8125rem;
height: 5.8375rem;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: var(--Black-Factoria, #020100);
text-align: justify;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 300;
line-height: normal;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.625rem;
    margin-top: 0; 
    align-items: center;

`;

export const DownContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
width: 69.00025rem;
min-height: 34rem;
height: auto;
margin-right: 1rem;
margin-top: 16rem;
position: absolute;
`;

export const HorizontalLine = styled.div`
width: 69.00025rem;
height: 0.125rem;
margin-top: 2rem;
margin-bottom: 2rem;
margin-left: 2rem; 
background: #FF4700;
position: absolute;
`; 



export const Title = styled.h2`
color: #FF4700;
text-align: start;
font-family: Poppins;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 3.69rem;
margin-top: 1.88rem;

`;

export const TitleButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-left: 0.100rem;
    margin-top: 2rem;
`;

