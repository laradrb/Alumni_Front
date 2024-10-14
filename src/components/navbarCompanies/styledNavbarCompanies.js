import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 

export const Nav = styled.nav`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
align-items: center;
padding: 0 2.5rem;
height: 6.93956rem;
background-color: #FFF;
box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
`;

export const NavLinks = styled.div`
display: flex;
gap: 5.625rem;
`;

export const StyledLink = styled(NavLink)`
color: black;
text-decoration: none;
font-size: 1rem;
font-family: 'Poppins', sans-serif;
font-weight: 600;
position: relative;
letter-spacing: 0.1em;


&.active, &:hover {  
    color: #FF4700;
}

&.active::after, &:hover::after {
    content: '';
    display: block;
    height: 0.125rem;
    background-color: #FF4700;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -8px; 
    transition: all 0.3s ease; 
}

`;

