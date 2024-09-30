import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styledNavbarPublic.js';

const NavbarPublic = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/home">HOME</StyledLink>
        <StyledLink to="/login">INICIAR SESIÓN</StyledLink>
        <StyledLink to="/preregister">REGISTRARSE</StyledLink>
    </NavLinks>
    <StyledLink to="/home">
    <LogoF5/>
    </StyledLink>
    </Nav>
);
};

export default NavbarPublic;
