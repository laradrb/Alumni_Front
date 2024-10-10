import styled from 'styled-components';

export const Container = styled.div`
  display: flex;              
  flex-direction: column;            
  justify-content: center;  
  margin-top: 2rem;
  margin-bottom: 7rem;
`;

export const HeaderText = styled.h1`
color: #FF4700;
text-align: center;
font-family: "Poppins", sans-serif;
font-size: 32px;
font-weight: 700;
line-height: normal;
`;

export const ProfileContainer = styled.div`
width: 1127px;
height: 525px;
display: flex;
flex-direction: row;
padding: 20px;
margin: 0 auto;
border-radius: 1.25rem;
border: 3px solid #FF4700;
margin-bottom: 40px;
`;

export const ImageContainer = styled.div`
margin-right: 2rem;
img {
    width: 11.5rem;
    height: 12.875rem;
    border-radius: 0.5rem;
    object-fit: cover;
    margin-top: 4.188rem;
    margin-left: 05.06rem;
}
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
padding: 0 2rem;
margin-top: 4.188rem;
`;

export const Name = styled.h1`
color: #000;
font-family: "Poppins", sans-serif;
font-size: 20px;
font-weight: 500;
margin: 0;
margin-bottom: 0.5rem;
`;

export const School = styled.h2`
color: #020100;
font-family: Poppins, sans-serif;
font-size: 18px;
font-weight: 500;
margin: 0;
margin-bottom: 0.5rem;
`;

export const Email = styled.p`
color: #000;
font-family: Poppins, sans-serif;
font-size: 18px;
font-weight: 500;
margin: 0;
margin-bottom: 1rem;
`;

export const EditButton = styled.button`
width: 6.9375rem;
height: 1.75rem;
background-color: #f74702;
color: white;
border: 0.063rem solid #f74702;
border-radius: 1.875rem;
font-family: "Poppins", sans-serif;
font-size: 0.813rem;
font-weight: 700;
cursor: pointer;
transition: all 0.3s ease;
color: var(--Base-White, #FFF);
text-align: center;
font-style: normal;
line-height: normal;

&:hover {
    background-color: white;
    color: #f74702;
    border: 0.125rem solid #f74702;
}

margin-top: 2rem;
align-self: flex-start;
`;
