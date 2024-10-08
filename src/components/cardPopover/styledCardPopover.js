import styled from 'styled-components';

export const StyledCardPopoverContainer = styled.div`
    width: 26.938rem;
    height: 16.313rem;
    border: 0.125rem solid #f74702;
    border-radius: 1.875rem;
    background-color: #f74702;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
`;

export const StyledCardPopoverTitle = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const StyledCardPopoverText = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StyledButton110 = styled.button`
    width: 6.875rem;
    height: 1.688rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #f74702;
    border: 0.063rem solid #f74702;
    border-radius: 1.875rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.813rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f74702;
        color: white;
    }
`;