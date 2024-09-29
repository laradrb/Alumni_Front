import styled from "styled-components";

export const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 67.313rem;
    height: 28.125rem;
    margin: 6rem auto 2rem;;
`;
export const Paragraph = styled.p`
    font-size: 2rem;
    text-align: center;
    color: #020100;
    font-style: normal;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    line-height: normal;
    text-align: center;
`;
export const CentralImage = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: center;
    margin-top: 2rem;
`;
export const StyledCentralImage = styled.img`
    width: 75rem;
    height: 42.188rem;
    border-radius: 1.875rem;
    object-fit: cover;
    margin-bottom: 6.875rem;
`;