import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37rem;
  margin-bottom: 12rem;
`;
  
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 72.93rem;
  height: 47rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

export const Container2 = styled.div`
  max-width: 18rem; 
  text-align: center;
  display: flex;
  flex-direction: column; 
  height: auto;
  padding: 0;
`;

export const Text = styled.p`
  height: 1.67688rem;
  color: #2e2e2e;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: normal;
  margin: 0.25rem;
`;

export const Container3 = styled.div` 
  border-radius: 1.25rem;
  border: 2px solid #ff4700;
  display: flex;
  flex-direction: column; 
  margin-left: 0.75rem;
  height: auto;
`;

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  gap: 0.2rem;
`;

export const SkillCheckbox = styled.div`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  background-color: ${(props) => (props.isSelected ? "#FF4702" : "#e0e0e0")};
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const InnerText = styled.h3`
  display: flex;
  width: 12rem;
  flex-shrink: 0;
  color: #000;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 0.001;
`;

export const Container6 = styled.div`
  max-width: 18rem; 
  text-align: center;
  display: flex;
  flex-direction: column; 
  padding: 0;
  justify-content: space-between;
  gap: 2.25rem;
`;
