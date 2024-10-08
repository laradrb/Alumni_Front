import React, { useState } from 'react';
import GlobalStyle from '../../../../../styled/GlobalStyle';
import { DataFormOfferContainer, FormSectionDataOffer, FormSectionDataOffer2 } from './styledDataFormOffer';


const DataFormOffer = () => {
    return (
        <>
        <GlobalStyle/>
            <DataFormOfferContainer>
                <FormSectionDataOffer
                type="text"
                placeholder="Título de la Oferta"
                arial-label="Insertar título de la oferta"
                />
            <FormSectionDataOffer2
                type="textarea"
                placeholder="Descripción:"
                arial-label="Añadir descripción de la oferta..."/>
            </DataFormOfferContainer>
        </>
    );
};

export default DataFormOffer;