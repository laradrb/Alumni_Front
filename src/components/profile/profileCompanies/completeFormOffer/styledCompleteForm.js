import styled from "styled-components";

export const MainContainer = styled.div`
    width: 76.0625rem;
    height: 83.75rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    border: 2px solid #FF4700;
    margin-left: 7rem;
    margin-bottom: 2.15rem;
`;

export const H1 = styled.h1`
    color: #FF4700;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    justify-content: center;
    text-align: center;
    margin-top: 3.69rem;
`;

export const HorizontalLine = styled.div`
  width: 69.00025rem;
  height: 0.125rem;
  background-color: #FF4700; 
  margin-left: 10.75rem;
  margin-bottom: 2.75rem;
  margin-top: -64rem;
`;

export const CompleteSkills = styled.div`
  width: 69.00025rem;
  height: 0.125rem;
  background-color: #FF4700; 
  margin-left: 3.5rem;
  margin-bottom: 2.75rem;
`;

export const HideGenderCard = styled.div`
  div:has(h3:contains('Género')) {
    display: none;
  }
`;