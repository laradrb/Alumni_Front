import React from 'react';
import LogoF5 from '../logo/Logo.jsx';
import { Nav, NavLinks, StyledLink } from './styled-navbar-public.jsx';

const NavbarPublic = () => {
return (
    <Nav>
    <NavLinks>
        <StyledLink to="/home">HOME</StyledLink>
        <StyledLink to="/login">INICIAR SESIÓN</StyledLink>
        <StyledLink to="/preregister">REGISTRARSE</StyledLink>
    </NavLinks>
    <LogoF5/>
    </Nav>
);
};

export default NavbarPublic;
