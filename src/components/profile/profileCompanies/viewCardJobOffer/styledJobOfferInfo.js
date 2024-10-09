import styled from 'styled-components';

export const JobOfferContainer = styled.div`
  display: flex;
  align-items: center;
  width: 69rem; 
  height: 11.5rem; 
  background-color: #FFFFFF;
  margin-bottom: 2.625rem; 
  border-radius: 1.25rem;
`;

export const LogoContainer = styled.div`
  width: 11.5rem; 
  height: 11.5rem; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const JobInfo = styled.div`
  margin-left: 2.375rem; /* 38px */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const JobTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  color: #000000;
  border: 0.125rem solid #e0e0e0; 
  margin-top: 4.375rem; 
  margin-bottom: 0.9375rem;
`;

export const JobDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #020100;
`;


