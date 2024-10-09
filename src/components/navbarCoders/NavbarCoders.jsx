import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Link } from'react-router-dom';
import { Nav, NavLinks, StyledLink } from './styledNavbarCoders.js';

const NavbarCoders = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/coder/alumni">ALUMNI</StyledLink>
        <StyledLink to="/coder/listado-coders">CODERS</StyledLink>
        <StyledLink to="/coder/listado-ofertas">OFERTAS</StyledLink>
        <StyledLink to="/coder/perfil-coder">PERFIL</StyledLink>
        <StyledLink to="/coder/logout">CERRAR SESIÓN</StyledLink>
    </NavLinks>
    <Link to="/coder/alumni">
    <LogoF5/>
    </Link>
    </Nav>
);
};

export default NavbarCoders;