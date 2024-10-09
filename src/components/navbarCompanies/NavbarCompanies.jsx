import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styledNavbarCompanies.js';
import { Link } from'react-router-dom';

const NavbarCompanies = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/empresa/aplicaciones-oferta">APLICACIONES</StyledLink>
        <StyledLink to="/empresa/perfil-empresa">PERFIL</StyledLink>
        <StyledLink to="/logout">CERRAR SESIÓN</StyledLink>
    </NavLinks>
    <Link to="/home">
    <LogoF5/>
    </Link>
    </Nav>
);
};

export default NavbarCompanies;