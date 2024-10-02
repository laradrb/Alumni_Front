import React from 'react';
import SmallButton from '../../../atom/SmallButton';
import CertificateButton from '../../../atom/CertificateButton';
import styles from './styledCertificateCard';

const CertificateCard = ({ titulo, escuela, fechaInicio, fechaFin, imageUrl }) => {
  return (
    <div style={styles.mainContainer}>
      {/* Title Section */}
      <div style={styles.headerContainer}>
        <h2 style={styles.headerTitle}>Certificaciones</h2>
        <CertificateButton onClick={() => window.location.href = '/agregar-certificado'}>
          Añadir Certificado
        </CertificateButton>
      </div>

      {/* Card Section */}
      <div style={styles.cardContainer}>
        <div style={styles.contentContainer}>
          <img src={imageUrl} alt="Certificado" style={styles.image} />
          <div style={styles.textContainer}>
            <div style={styles.title}>{titulo}</div>
            <div style={styles.school}>{escuela}</div>
            <div style={styles.dates}>{`${fechaInicio} - ${fechaFin}`}</div>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <SmallButton onClick={() => window.location.href = '/editar-certificado'}>
            Editar
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;




