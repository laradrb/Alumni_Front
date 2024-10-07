import styled from "styled-components";


export const GeneralContainerCoder = styled.div`
display: flex;
align-items: flex-start;
gap: 8.125rem;
width: 100%;
padding: 20px;
margin: 0 auto;
`;

export const TittleCoder = styled.h1`
color: #FF4700;
text-align: center;
font-family: Poppins;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
width: 100%;
margin-bottom: 1.25rem;
`;

export const SidebarFilter = styled.div`
width: 15.813rem;
height: 83.375rem;
padding: 1.25rem;
border: 1px solid var(--Orange-Factoria, #FF4702);
background: var(--Base-White, #FFF);
`;

export const CodersSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 1.25rem;
gap: 1.25rem;
`;


export const FilterTitle = styled.h3`
color: var(--Orange-Factoria, #FF4702);
text-align: center;
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const FilterList = styled.ul`
list-style: none;
padding: 0;
`;

export const FilterItem = styled.li`
color: #2E2E2E;
font-family: Poppins;
font-size: 0.875rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;


export const CoderCard = styled.div`
display: flex;
align-items: center;
width: 25rem;
height: 14.375rem;
background-color: white;
border: 0.125rem solid #e74c3c;
border-radius: 1.25rem;
border: 0.063rem solid var(--Orange-Factoria, #FF4700);
background: var(--Base-White, #FFF);
padding: 0.938rem;
margin-bottom: 1.25rem;
display: flex;
align-items: center;
`;

export const CoderImage = styled.img`
border-radius: 0.313rem;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
width: 10.438rem;
height: 11.5rem;
margin-right: 1.25rem;
`;

export const CoderInfo = styled.div`
display: flex;
width: 9.188rem;
height: 1.438rem;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
`;

export const CoderName = styled.h4`
display: flex;
width: 9.188rem;
height: 1.438rem;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: var(--Black-Factoria, #020100);
text-align: center;
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const CoderDetails = styled.p`
display: flex;
width: 9.625rem;
height: 1.438rem;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: var(--Black-Factoria, #020100);
font-family: Poppins;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const CoderRole = styled.p`
color: #000;
font-family: Poppins;
font-size: 0.875rem;
font-style: normal;
font-weight: 300;
line-height: normal;
`;