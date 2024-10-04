import React from 'react';
import { Link } from 'react-router-dom';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styled-navbar-companies.jsx';

const NavbarCompanies = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/APLICACIONES">APLICACIONES</StyledLink>
        <StyledLink to="/PERFIL">PERFIL</StyledLink>
        <StyledLink to="/CERRAR SESION">CERRAR SESIÓN</StyledLink>
    </NavLinks>
    <LogoF5/>
    </Nav>
);
};

export default NavbarCompanies;