import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styled-navbar-companies.jsx';

const NavbarCompanies = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/aplications">APLICACIONES</StyledLink>
        <StyledLink to="/profile">PERFIL</StyledLink>
        <StyledLink to="/logout">CERRAR SESIÓN</StyledLink>
    </NavLinks>
    <LogoF5/>
    </Nav>
);
};

export default NavbarCompanies;