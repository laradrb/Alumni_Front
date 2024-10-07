import React from 'react';
import {
  JobOfferContainer,
  LogoContainer,
  CompanyLogo,
  JobInfo,
  JobTitle,
  JobDescription
} from './styledJobOfferInfo';

const JobOfferInfo = ({ logo, jobTitle, jobDescription }) => {
  return (
    <JobOfferContainer>
      <LogoContainer>
        <CompanyLogo src={logo} alt="Company Logo" />
      </LogoContainer>
      <JobInfo>
        <JobTitle>{jobTitle}</JobTitle>
        <JobDescription>{jobDescription}</JobDescription>
      </JobInfo>
    </JobOfferContainer>
  );
};

export default JobOfferInfo;
