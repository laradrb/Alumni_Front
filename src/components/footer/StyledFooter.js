import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ffff;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.3rem solid #ccc;
  box-shadow: 0 -0.0625rem 0.625rem rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  img {
    height: 3.875rem; 
    margin-right: 0.625rem; 
  }

  p {
    font-size: 0.875rem; 
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 1rem; 
    text-decoration: none;
    color: #020100;
    font-size: 1.125rem; 
    position: relative;
    padding-right: 0.625rem; 
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  a:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: 0;
    padding-left: 0.625rem; 
    color: #020100;
    margin-right: -0.3rem;
  }

  a:hover {
    text-decoration: none;
    color: #FF4700;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 0.625rem; 
    font-size: 1.5rem;
    display: inline-block;
    transition: filter 0.3s ease;

    img {
      width: 2.5rem; 
      height: 1.875rem;
      transition: filter 0.3s ease;
    }

    &:hover img {
    filter: invert(43%) sepia(95%) saturate(6814%) hue-rotate(0deg) brightness(103%) contrast(105%);
    color: #FF4700;
}
  }
`;
