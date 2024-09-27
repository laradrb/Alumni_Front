import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CardContainer = styled.div`
  width: 34.375rem;
  height: 30rem;
  padding: 20px;
  margin: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-image: linear-gradient(to bottom right, #FF4700, #3700b3);
`;

export const CardTitle = styled.h2`
  font-size: 2.5rem;
  color: #FF4700;
  margin-bottom: 0.625rem;
  font-weight: bold;
  font family: 'Poppins', sans-serif;
    `;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #FF4700;
  margin-bottom: 1.25rem;
  font-family: 'Poppins', sans-serif;
  font-weight: medium;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #FF4700;
  color: white;
  border: none;
  border-radius: 3.125rem;

  &:hover {
    background-color: #3700b3;
  }
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #6200ea;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4700; /* Cambia de color al hacer hover */
  }

  &:focus {
    outline: none; /* Quita el borde de enfoque predeterminado */
  }
`;
