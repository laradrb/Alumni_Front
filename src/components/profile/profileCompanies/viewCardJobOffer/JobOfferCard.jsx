import React, { useState } from 'react';
import {
    JobOfferCardContainer,
    ApplyButtonContainer
} from './styledJobOfferCard';
import JobOfferInfo from '../viewCardJobOffer/JobOfferInfo';
import JobOfferSkills from '../viewCardJobOffer/JobOfferSkills';
import Button110 from '../../../atom/Button110';
import CardPopover from '../../../cardPopover/CardPopover';

const JobOfferCard = () => {
    const [showPopover, setShowPopover] = useState(false);

    const handleApplyClick = async () => {
        // LLAMAR AL BACKEND
        try {
            await sendDataToBackend(); 
            setShowPopover(true); 
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    const handleConfirm = () => {
        // AGREGAR LÓGICA BACKEND
        setShowPopover(false); 
    };

    return (
        <JobOfferCardContainer>
            {/* Información del trabajo */}
            <JobOfferInfo />
            
            {/* Botón para aplicar debajo del JobDescription */}
            <ApplyButtonContainer>
                <Button110 onClick={handleApplyClick}>Aplicar</Button110>
            </ApplyButtonContainer>
            
            {/* Habilidades requeridas */}
            <JobOfferSkills />

            {/* Contenedor para centrar el popover */}
            {showPopover && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                }}>
                    <CardPopover 
                        title="¡Gracias por aplicar!" 
                        text="Pronto nos estaremos poniendo en contacto contigo." 
                        confirmText="Volver" 
                        onConfirm={handleConfirm}
                        onlyOne={true} 
                    />
                </div>
            )}
        </JobOfferCardContainer>
    );
};

// Función simulada para enviar datos al backend
const sendDataToBackend = async () => {
    // Aquí iría tu lógica para enviar datos, 
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default JobOfferCard;

