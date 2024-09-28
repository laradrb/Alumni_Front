import React from "react";
import FirstDivision from "../firstdivision/FirstDivision";
import OrangeCard from "../orangeCard/orangeCard";
import Carrousel from "../carousel/Carousel";
import HalfCircle from "../halfCircle/HalfCircle";
import CardCoder from "../landingPage/cardCoders/CardCoder";
import { GeneralContainer, CardTitle, Text, Button, CardContainer } from "../landingPage/cardCoders/styleCard";

const MainLP = () => {
    return (
    <div>
        <FirstDivision />
        <OrangeCard />
        <Carrousel />
        <HalfCircle />
        <GeneralContainer>
        <CardCoder
        title="Coders"
        text="Acceso a Oportunidades de Empleo Comunidad y Colaboración  
        Visibilidad ante Empresas"
        buttonText={<Button to="/alumni">Regístrate como Alumni</Button>}
        />
         <CardCoder
        title="Empresas"
        text={
            <>
              Encuentra Talento
              <br />
              Conexión Directa con Candidatos
              Filtrado Eficiente de Perfiles
              </>
        }
        buttonText={<Button to="/empresa">Regístrate como Empresa</Button>}
        />
        </GeneralContainer>
    </div>
    );
};

export default MainLP;