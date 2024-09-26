import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
height: 60px;
background-color: #FFF;
`;

export const NavLinks = styled.div`
display: flex;
gap: 20px;
`;

export const StyledLink = styled(NavLink)`
color: black;
text-decoration: none;
font-size: 18px;

&.active {  
    color: ##FF4700;
    text-decoration: underline;
    text-decoration-color: ###FF4700; 
}

&:hover {
    color: ##FF4700;
    text-decoration: underline;
    text-decoration-color: #FF4700;
}
`;

export const Logo = styled.div`
img {
    width: 100px;
}
`;
