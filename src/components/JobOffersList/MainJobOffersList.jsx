import React, { useState } from 'react';
import { MainJobOffersListContainer, JobsContainer, MainContainer } from './styledJobOffersList';
import JobOfferInfo from '../profile/profileCompanies/viewCardJobOffer/JobOfferInfo';
import { JobOfferContainer1 } from '../profile/profileCompanies/viewCardProfile/styledCardProfileCompany';

const MainJobOffersList = () => {
    const [jobOffers] = useState([
        {
            id: 1,
            logo: 'https://via.placeholder.com/167x184', 
            jobTitle: 'Oferta 1',
            jobDescription: 'Descripción del puesto de trabajo...',
        },
        {
            id: 2,
            logo: 'https://via.placeholder.com/167x184', 
            jobTitle: 'Oferta 2',
            jobDescription: 'Descripción del puesto de trabajo...',
        },
        {
            id: 3,
            logo: 'https://via.placeholder.com/167x184', 
            jobTitle: 'Oferta 3',
            jobDescription: 'Descripción del puesto de trabajo...',
        },
    ]);

    return (
        <>
        <MainJobOffersListContainer>
            <MainContainer>
                <JobsContainer>
                    {jobOffers.map((offer) => (
                        <JobOfferContainer1 key={offer.id}>
                            <JobOfferInfo 
                                logo={offer.logo} 
                                jobTitle={offer.jobTitle} 
                                jobDescription={offer.jobDescription} 
                            />
                        </JobOfferContainer1>
                    ))}
                </JobsContainer>
            </MainContainer>
            </MainJobOffersListContainer>   
        </>
    );
};

export default MainJobOffersList;