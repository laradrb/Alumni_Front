import React from 'react';
import { FooterContainer, LeftSection, RightSection, IconContainer } from "./StyledFooter";
import Logo from "../../assets/logo/logo.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import XIcon from "../../assets/icons/x.svg"; 
import Youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
    return (
        <FooterContainer>
            <LeftSection>
                <img src={Logo} alt="Factoria F5" /> 
            </LeftSection>
            <RightSection>
                <a href="https://factoriaf5.org/aviso-legal/" target="_blank" rel="noopener noreferrer">Aviso legal</a>
                <a href="https://factoriaf5.org/politica-de-privacidad/" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
                <a href="https://factoriaf5.org/politica-de-cookies/" target="_blank" rel="noopener noreferrer">Política de Cookies</a>
                <a href="https://factoriaf5.org/contacto/"target="_blank" rel="noopener noreferrer" >Contacta</a>
                <a href="https://factoriaf5.org/blog/" target="_blank" rel="noopener noreferrer">Blog</a>
            </RightSection>
            <IconContainer>
                <a href="https://www.linkedin.com/school/factor%C3%ADaf5/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn" />
                </a>
                <a href="https://x.com/factoriaf5" target="_blank" rel="noopener noreferrer">
                    <img src={XIcon} alt="Twitter (X)" />
                </a>
                <a href="https://www.youtube.com/channel/UCazHbN7ChOJxRXW0-K1zczw" target="_blank" rel="noopener noreferrer">
                    <img src={Youtube} alt="YouTube" />
                </a>
                <a href="https://www.facebook.com/factoriaf5/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Facebook" />
                </a>
            </IconContainer>
        </FooterContainer>
    );
};

export default Footer;
