import React from "react";
import PropTypes from 'prop-types';
import { CompanyContainer, LogoContainer, CompanyInfo, NameCompany, AboutTheCompany } from './styledCompanyCard';


const CompanyCard = ({ name,  description, logoUrl }) => {
    return (
        <>
        <CompanyContainer>
        <LogoContainer>
        <img 
                    src={logoUrl || "https://via.placeholder.com/167x184"} 
                    alt={name ? `Logo de ${name}` : 'Logo de la empresa'} 
                />
        </LogoContainer>
        <CompanyInfo>
            <NameCompany>
                {name || 'Nombre de la empresa'}
            </NameCompany>
            <AboutTheCompany>
                {description || 'Descripción breve de la empresa...'}
            </AboutTheCompany>
        </CompanyInfo>
        </CompanyContainer>
        </>
    );
    };
    
    CompanyCard.propTypes = {
        name: PropTypes.string,
        description: PropTypes.string,
        logoUrl: PropTypes.string
    };
    
    export default CompanyCard;