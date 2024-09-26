import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: 75rem; 
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  flex: 1; 
  margin-right: 7rem;
  
  img {
    width: 37.063rem;
    height: 27.063rem;
    border-radius: 1rem;
  }
`;

export const Container2 = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60rem; 
  max-height: 20rem;
  margin-top: 3rem;
`;

export const Title = styled.h1`
  color: #FF4700;
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled.h3`
  color: #020100;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 0;
  max-width: 60rem;
`;

export const Text = styled.p`
  color: #020100;
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  text-align: justify;
  margin-top: 1rem;
  margin-bottom: 0;
  max-width: 60rem;
`;