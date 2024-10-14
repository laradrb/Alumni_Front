import React, { useRef } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 15.1875rem;
    height: 2.6875rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    border: 1px solid #FF4700;
    background: #FF4700;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    color: white;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 4.75rem;
    margin-left: 19.31rem;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: white;
        color: #f74702;
        border: 0.125rem solid #f74702;
    }
`;

const SaveButton = ({ text, onClick }) => {
    const buttonRef = useRef();
  
    return (
      <ButtonStyled ref={buttonRef} onClick={onClick}>
        {text}
      </ButtonStyled>
    );
  };
  
  export default SaveButton;


