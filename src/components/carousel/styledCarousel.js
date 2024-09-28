import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;
  margin-left: 1rem;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
`;

export const CarouselImage = styled.img`
  width: calc(100% / 3);
  max-width: 29.5rem;
  max-height: 19.25rem;
  flex-shrink: 0;
  margin-right: 1rem;
  transition: transform 0.3s ease-in-out;
  border-radius: 1rem;
`;

export const CarouselControls = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

`;

export const ArrowIcon = styled.img`
  width: 1.313rem;
  height: 1.75rem;
`;