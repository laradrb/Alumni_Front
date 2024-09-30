import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styledNavbarCoders.js';

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
    <StyledLink to="/alumni">
    <LogoF5/>
    </StyledLink>
    </Nav>
);
};

export default NavbarCoders;