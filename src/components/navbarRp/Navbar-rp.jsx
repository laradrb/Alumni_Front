import React from 'react';
import { Link } from 'react-router-dom';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styled-navbar-rp.jsx';

const NavbarRp = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/ALUMNI">ALUMNI</StyledLink>
        <StyledLink to="/CODERS">CODERS</StyledLink>
        <StyledLink to="/EMPRESAS">EMPRESAS</StyledLink>
        <StyledLink to="/OFERTAS">OFERTAS</StyledLink>
        <StyledLink to="/PERFIL">PERFIL</StyledLink>
        <StyledLink to="/CERRAR SESION">CERRAR SESIÓN</StyledLink>
    </NavLinks>
    <LogoF5/>
    </Nav>
);
};

export default NavbarRp;