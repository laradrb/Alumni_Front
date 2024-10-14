import React from "react";
import { Link } from 'react-router-dom';
import EditButton from "../../../atom/EditButton";
import SmallButton from "../../../atom/SmallButton";
import CertificateButton from "../../../atom/CertificateButton";
import {CardContainer, ImageContainer, CardView, NameEditContainer, NameCompany, ButtonContainer, OfferJob, HorizontalLine, DownContainer, Title, TitleButtonContainer } from "./styledCardProfileCompany";




const CardProfileCompany = ({ name,  description }) => {
    return(
<CardContainer>
        <ImageContainer>
            <img src="https://via.placeholder.com/167x184" alt="Profile" />
        </ImageContainer>
        <CardView>
            <NameEditContainer>
                <NameCompany>{name || 'Your Name'}</NameCompany>
                <Link to="/empresa/ajuste-perfil" style={{ textDecoration: 'none' }}>
                    <EditButton
                        role="button" 
                        aria-pressed="false"
                        aria-label="Editar Perfil">
                        Editar Perfil
                    </EditButton>
                </Link>
            </NameEditContainer>
            <OfferJob>
                {description || 'Describe your company...'}
            </OfferJob>
            <ButtonContainer>
                <SmallButton 
                    type="button" 
                    aria-pressed="false" 
                    aria-label="Contacto"
                >
                    Contacto
                </SmallButton>
                <SmallButton 
                    type="button" 
                    aria-pressed="false" 
                    aria-label="Correo"
                >
                    Correo
                </SmallButton>
                <SmallButton 
                    type="button" 
                    aria-pressed="false" 
                    aria-label="Sitio Web"
                >
                    Sitio Web
                </SmallButton>
            </ButtonContainer>
</CardView>
        <DownContainer>
        <HorizontalLine/>
        <TitleButtonContainer>
        <Title>OFertas</Title>
        <Link to="/empresa/ajuste-oferta" style={{ textDecoration: 'none' }}>
                    <CertificateButton
        type="button" 
                    aria-pressed="false" 
                    aria-label="Añadir Ofertas"
                >
                    Añadir Ofertas</CertificateButton>
                    </Link>
                    </TitleButtonContainer>
                    </DownContainer>
                    
</CardContainer>

    );


};

export default CardProfileCompany;
