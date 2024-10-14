import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 

export const Nav = styled.nav`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
align-items: center;
padding: 0 2.5rem;
height: 7.3125rem;
background-color: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 90rem;
flex-shrink: 0;
`;

export const NavLinks = styled.div`
display: flex;
gap: 3rem;
`;

export const StyledLink = styled(NavLink)`
color: #020100;
text-decoration: none;
font-size: 1rem;
font-family: 'Poppins', sans-serif;
position: relative;
font-style: normal;
font-weight: 500;
line-height: normal;


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
