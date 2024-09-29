import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styled-navbar-coders.jsx';

const NavbarCoders = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/alumni">ALUMNI</StyledLink>
        <StyledLink to="/coders">CODERS</StyledLink>
        <StyledLink to="/joboffers">OFERTAS</StyledLink>
        <StyledLink to="/profile">PERFIL</StyledLink>
        <StyledLink to="/logout">CERRAR SESIÓN</StyledLink>
    </NavLinks>
    <LogoF5/>
    </Nav>
);
};

export default NavbarCoders;