import React from 'react';
import { Link } from 'react-router-dom';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styledNavbarRp.js';

const NavbarRp = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/rp/alumni">ALUMNI</StyledLink>
        <StyledLink to="/rp/listado-coders">CODERS</StyledLink>
        <StyledLink to="/rp/listado-empresas">EMPRESAS</StyledLink>
        <StyledLink to="/rp/listado-ofertas">OFERTAS</StyledLink>
        <StyledLink to="/rp/perfil-rp">PERFIL</StyledLink>
        <StyledLink to="/home">CERRAR SESIÓN</StyledLink>
    </NavLinks>
    <Link to="/rp/alumni">
    <LogoF5/>
    </Link>
    </Nav>
);
};

export default NavbarRp;