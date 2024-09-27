import React from "react";
import CardCoder from "../components/landingPage/cardCoders/CardCoder.jsx";
import { GeneralContainer, Button } from "../components/landingPage/cardCoders/styleCard";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <GeneralContainer>
      <CardCoder
        title="Coders"
        text="Acceso a Oportunidades de Empleo Comunidad y Colaboración  
        Visibilidad ante Alumnos
        Visibilidad ante Empresas"
        buttonText={<Button to="/alumni">Registrate como Alumni</Button>}
      />

      <CardCoder
        title="Empresas"
        text="Encuentra Talento Conexión Directa con Candidatos Filtrado Eficiente de Perfiles"
        buttonText={<Button to="/empresas">Registrate como Empresa</Button>}
      />
    
    </GeneralContainer>
        <Footer/>
  );
};

export default Home;
