import styled from "styled-components";



export const SidebarFilter = styled.div`
width: 17.813rem;
height: 83.375rem;
padding: 1.25rem;
border: 1px solid var(--Orange-Factoria, #FF4702);
background: var(--Base-White, #FFF);
overflow-y: auto;
margin-left: 1.25rem;
margin-bottom: 2.5rem;
`;


export const FilterTitle = styled.h3`
color: var(--Orange-Factoria, #FF4702);
text-align: center;
font-family: Poppins;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 0.5rem; 
`;

export const FilterList = styled.ul`
list-style: none;
padding: 0;
margin-top: 1rem;
`;



export const ShowMoreButton = styled.button`
background-color: transparent;
border: none;
color: #FF5722; 
cursor: pointer;
font-size: 1rem;
margin-top: 1rem;
align-self: flex-end; 
padding: 0;

&:hover {
    text-decoration: underline;
}
`;

export const DropdownContainer = styled.div`
position: relative; 
z-index: 1; 
`;