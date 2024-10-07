import styled from 'styled-components';

export const Container = styled.div`
  width: 69rem; 
  background-color: #ffffff;
  padding: 0;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  font-weight: 500; 
  color: #FF4700; 
  margin: 0; 
  padding: 0.5rem 0;
`;

export const DivisionLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #FF4700; 
  margin-bottom: 2.438rem; 
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 2.188rem;
`;

export const Column = styled.div`
  flex: 1; /* Crea responsive Layout dentro de la columna */
  margin: 0.3125rem; 
  padding: 0.625rem; 
  border-radius: 0.3125rem; 
  box-sizing: border-box;
`;

export const ColumnTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem; 
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.625rem; 
  text-align: center;
`;

export const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SkillItem = styled.li`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem; 
  font-weight: 300;
  color: #020100;
  margin-bottom: 0.3125rem; 
`;
