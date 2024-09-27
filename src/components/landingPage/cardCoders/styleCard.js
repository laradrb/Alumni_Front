import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CardContainer = styled.div`
  width: 34.375rem;
  height: 30rem;
  padding: 1.5rem;
  margin: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
border: 0.125rem solid #FF4700;

`;

export const CardTitle = styled.h2`
  font-size: 2.5rem;
  color: #FF4700;
  margin-bottom: 0.625rem;
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
  margin-top: 2rem;
    `;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #FF4700;
  margin-bottom: 1.25rem;
  font-family: 'Poppins', sans-serif;
  font-weight: medium;
  margin-top: 5.125rem;
  text-align: center;
  max-width: 24rem;
  `;

export const Button = styled(Link)`
  padding: 10px 20px;
  background-color: #FF4700;
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 3.125rem;
  font-family: 'Poppins', sans-serif;
  margin-top: 3rem;
  align-items: center;

  &:hover {
        background-color: white;
        color: #f74702;
        border:0.125rem solid #f74702;
    
  }
`;


