import React from 'react';
import LargeButton from '../atom/LargeButton';
import registerEmpresa from '../../assets/img/registerEmpresa.jpg';
import GlobalStyle from '../../styled/GlobalStyle';
import {RegisterContainerCompany, FormSectionCompany, TitleCompany, SubtitleCompany, FormCompany, StyledInputCompany, ButtonContainerCompany, LinkContainerCompany, StyledLinkCompany, ImageSectionCompany, StyledImageCompany} from './styledRegisterCompanyComponent';

const RegisterCompanyComponent = () => {
    return (
        <>
            <GlobalStyle />
            <RegisterContainerCompany>
                <FormSectionCompany>
                    <TitleCompany>Registro para Empresas</TitleCompany>
                    <SubtitleCompany>
                        Regístrate para acceder a tu <br/> cuenta en Alumni
                    </SubtitleCompany>
                    <FormCompany>
                        <StyledInputCompany 
                            type="text" 
                            placeholder="Nombre de la empresa/razón social" 
                            aria-label="Insertar Nombre de la empresa/razón social"
                        />
                        
                        <StyledInputCompany 
                            type="text" 
                            placeholder="N.I.F" 
                            aria-label="Insertar NIF"
                        />
                        
                        <StyledInputCompany 
                            type="email" 
                            placeholder="Correo electrónico" 
                            aria-label=" Insertar Correo electrónico"
                        />
                        
                        <StyledInputCompany 
                            type="password" 
                            placeholder="Contraseña" 
                            aria-label="Insertar Contraseña"
                        />

                        <ButtonContainerCompany>
                            <LargeButton 
                                type="submit" 
                                aria-pressed="false" 
                                aria-label="Boton Registrarse"
                            >
                                Registrarse
                            </LargeButton>
                        </ButtonContainerCompany>
                    </FormCompany>
                    <LinkContainerCompany>
                        <span>¿Ya tienes cuenta?</span> 
                        <StyledLinkCompany to="/login">
                            Inicia sesión aquí
                        </StyledLinkCompany>
                    </LinkContainerCompany>
                </FormSectionCompany>
                <ImageSectionCompany>
                    <StyledImageCompany 
                        src={registerEmpresa} 
                        alt="Imagen decorativa de registro" 
                        aria-hidden="true" 
                    />
                </ImageSectionCompany>
            </RegisterContainerCompany>
        </>
    );
};

export default RegisterCompanyComponent;