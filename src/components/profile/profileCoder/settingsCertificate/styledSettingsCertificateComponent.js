import styled from 'styled-components';

export const CertificacionesContainer = styled.div`
  border: 2px solid #FF6600;
  border-radius: 10px;
  padding: 1.25rem;  
  width: 66.8125rem;  
  height: 33.9375rem; 
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  color: #FF4700; 
  text-align: center; 
  font-family: 'Poppins', sans-serif; 
  font-size: 2rem; 
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  gap: 2rem; 
  margin-top: 1.25rem; 
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625rem; 
  width: 50%; 
  padding-left: 1rem; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: auto;  
  gap: 1rem;  
  margin-top: 1rem; 
  margin-left: -19.31rem;
`;


export const ImageUploadContainer = styled.div`
  width: 17.24rem; 
  height: 11.53rem; 
  border: 2px dashed #ccc;
  background-color: #f0f0f0; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer; 

  &:hover {
    background-color: #e0e0e0; 
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer; 
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 5px; 
  }

  p {
    font-size: 1rem;
    color: #666;
    pointer-events: none; 
  }
`;

export const PopoverWrapper = styled.div`
    position: fixed;
    top: 45%; 
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`;