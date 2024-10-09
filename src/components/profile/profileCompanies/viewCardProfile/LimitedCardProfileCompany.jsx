import React from "react";
import SmallButton from "../../../atom/SmallButton";
import {CardContainer, ImageContainer, CardView, NameEditContainer, NameCompany, ButtonContainer, OfferJob, HorizontalLine, DownContainer, TitleButtonContainer1, Title1, JobOfferContainer1 } from "./styledCardProfileCompany";
import JobOfferInfo from "../viewCardJobOffer/JobOfferInfo";




const LimitedCardProfileCompany = ({ name,  description }) => {
    return(
        <CardContainer>
            <ImageContainer>
                <img src="https://via.placeholder.com/167x184" alt="Profile" />
            </ImageContainer>
                <CardView>
                    <NameEditContainer>
                        <NameCompany>{name || 'Your Name'}</NameCompany>
                    </NameEditContainer>
                    <OfferJob>
                        {description || 'Describe your offerJob...'}
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
                    <TitleButtonContainer1>
                        <Title1> 
                        Ofertas
                        </Title1>
                    </TitleButtonContainer1>
                    <JobOfferContainer1>
                        <JobOfferInfo/>
                    </JobOfferContainer1>
                </DownContainer>
        </CardContainer>
    );
};

export default LimitedCardProfileCompany;