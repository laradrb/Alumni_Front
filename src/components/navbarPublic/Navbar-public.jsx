import React from 'react';
import { Link } from 'react-router-dom';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styled-navbar-public.jsx';

const NavbarPublic = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/login">INICIAR SESIÓN</StyledLink>
        <StyledLink to="/register">REGISTRARSE</StyledLink>
    </NavLinks>
    <LogoF5/>
    </Nav>
);
};

export default NavbarPublic;
