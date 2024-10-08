import styled from "styled-components";


export const ProfileRpTitle = styled.p`
    margin-top: 3.968rem;
    margin-bottom: 3.968rem;
    text-align: center;
    font-size: 2rem;
    color: #f74702; 
    font-weight: 700;
    font-family: 'Poppins', sans-serif; 
    font-weight: bold;
`;

export const ProfileRpContainer = styled.div`
    display: flex;
    width:70.438rem;
    height: 30.975rem;
    margin-left: 9.781rem;
    margin-right: 9.781rem;
    border-radius: 1.24rem;
    border: solid #f74702;
    margin-bottom: 7.936rem;
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 11.005rem;
    height: 20.063rem; 
    margin-right: 2.526rem; 
    margin-left:  2.719rem; 
`; 

export const ImageSectionRpProfile = styled.div`
    width: 11.005rem;
    height: 12.5rem;
    border-radius: 1.25rem; 
    margin-top: 4.125rem;
    margin-bottom: 2.125rem;
    object-fit: cover;
`;

export const StyledImageRpProfile = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #A6A6A6;
    border-radius: 1.875px;
    overflow: hidden;
    object-fit: cover;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;


export const FormSectionRpProfile = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 27.589rem;
    height: auto;
    margin-top: 4.125rem;
`;

export const StyledRpProfile = styled.input`
    width: 25rem;
    height: 2.226rem;
    border: 0.063rem solid #e9e9e6;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    background-color: #e9e9e6;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    padding: 0 0 0 1rem; 
    resize: none; 
    vertical-align: top;
    color: #020100;
    &:focus {
        outline: none;
        box-shadow: 0 -0.375rem 0.625rem -0.063rem rgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
    }

    margin-bottom: 1.649rem;
`;
export const StyledRpSectionDrowdowButton = styled.div`
    flex: 1;
    width: 25rem;
    height: 12.313rem;
`;

export const FormSectionRpProfile1 = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 27.589rem;
    height: auto;
    margin-top: 4.125rem;

`;

export const StyledRpProfile1 = styled.input`
    width: 25rem;
    height: 2.226rem !important;
    border: 0.063rem solid #e9e9e6;
    box-shadow: 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border-radius: 1.875rem;
    background-color: #e9e9e6;
    font-size: 1.125rem;
    font-family: 'Poppins', sans-serif;
    padding: 1rem; 
    resize: none; 
    vertical-align: top;
    color: #020100;
    box-sizing: border-box;
    &:focus {
        outline: none;
        box-shadow: 0 -0.375rem 0.625rem -0.063rem rgba(0, 0, 0, 0.1), 0 0.125rem 0.25rem -0.125rem rgba(0, 0, 0, 0.06);
    }
    margin-right: 2.825rem;
    margin-bottom: 1.669rem;
`;

export const SectionButtonRp = styled.div`
    display: flex;
    width: 35.219rem;
    height: 9.5rem;
    justify-content: flex-end;
    margin-left: -22rem;
    margin-bottom: -4rem;
`;

export const SectionButtonRp2 = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 9.325rem;
    margin-left: -10rem;
`;

export const PopoverWrapper = styled.div`
    position: fixed;
    top: 45%; 
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`;

