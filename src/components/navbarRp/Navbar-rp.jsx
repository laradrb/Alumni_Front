import React from 'react';
import { Link } from 'react-router-dom';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styled-navbar-rp.jsx';

const NavbarRp = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/alumni">ALUMNI</StyledLink>
        <StyledLink to="/coders">CODERS</StyledLink>
        <StyledLink to="/companies">EMPRESAS</StyledLink>
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

export default NavbarRp;