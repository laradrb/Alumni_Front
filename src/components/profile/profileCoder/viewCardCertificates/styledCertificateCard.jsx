import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36.5rem; // 584px igual que la card
`;

export const HeaderContainer = styled.div`
  width: 25.813rem; // width of header container
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3.365rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem; // 24px
  font-weight: 700;
  color: #f74702;
  font-family: 'Poppins';
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 36.5rem; // 584px
  height: 9.8125rem; // 157px
  border: 0.125rem solid #f74702; // 2px
  box-shadow: 0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem; // 10px
  padding: 0.625rem; // 10px
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 8.313rem; // 133px
  height: auto;
  margin-right: 0.5rem; // 8px
  margin-left: 0.5rem; // 8px
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 1.125rem; // 18px
  font-weight: 500;
  color: black;
  font-family: 'Poppins';
  margin-bottom: 0rem; 
`;

export const School = styled.p`
  font-size: 1.125rem; // 18px
  font-weight: 300;
  color: black;
  font-family: 'Poppins';
  margin-bottom: 0rem; 
`;

export const Dates = styled.p`
  font-size: 1.125rem; // 18px
  font-weight: 300;
  color: black;
  font-family: 'Poppins';
  margin-bottom: 0.3125rem; // 5px
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 5rem;
  min-width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;



