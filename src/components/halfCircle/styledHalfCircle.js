import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 75rem; 
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 19.875rem;
  height: 16.125rem;
  margin-top: 5rem;
  
  img {
    width: 19.875rem;
    height: 16.125rem;
    margin-left: -8.5rem;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 72.125rem;
  height: 19.375rem;
  flex-shrink: 0;
  margin-top: 4.75rem;
  margin-left: -12.5rem;
`;

export const Text = styled.p`
  color: #020100;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 0;
  line-height: 150%;
  font-style: normal;
`;