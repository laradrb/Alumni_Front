import React from 'react';
import ViewListCoderCv from './ViewListCoderCv'
import JobOfferInfo from '../../profileCompanies/viewCardJobOffer/JobOfferInfo';
import { MainContainerWiewListCoderCv, CardListCoderCvContainer } from './styledMainViewListCoderCv';
import HorizontalLine from '../../../../assets/img/horizontalLine.png'

const MainViewListCoderCv = () => {
    return (
        <>
        <MainContainerWiewListCoderCv >
            <JobOfferInfo/>
            <>
            <img src={HorizontalLine} alt='Linea horizontal naranja'
                style={{marginLeft: '2rem', marginTop: '3.5rem'}}/>
            </> 
            <CardListCoderCvContainer> 
            <ViewListCoderCv/>
            </CardListCoderCvContainer> 
        </MainContainerWiewListCoderCv>
        </>
    );
};
export default MainViewListCoderCv;