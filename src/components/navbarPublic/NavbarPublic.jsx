import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Link } from 'react-router-dom';
import { Nav, NavLinks, StyledLink } from './styledNavbarPublic.js';

const NavbarPublic = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/home">HOME</StyledLink>
        <StyledLink to="/login">INICIAR SESIÓN</StyledLink>
        <StyledLink to="/preregister">REGISTRARSE</StyledLink>
    </NavLinks>
    <Link to="/home">
    <LogoF5/>
    </Link>
    </Nav>
);
};

export default NavbarPublic;
