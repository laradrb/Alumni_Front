import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Link } from'react-router-dom';
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
    <Link to="/alumni">
    <LogoF5/>
    </Link>
    </Nav>
);
};

export default NavbarCoders;