import React, { useState } from 'react';
import Input from '../../../atom/Input'; 
import SaveButton from '../../../atom/SaveButton';
import { CertificacionesContainer, InputContainer, ButtonContainer, Title, FormContainer, ImageUploadContainer} from './styledSettingsCertificateComponent'; 
import GlobalStyle from '../../../../styled/GlobalStyle';


const SettingsCertificate = () => {
    const [formState, setFormState] = useState({
        titulo: '',
        escuela: '',
        fechaInicio: '',
        fechaFin: '',
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const certificateData = {
            ...formState,
            imagen: imagePreview,
        };
        console.log('Datos guardados:', certificateData);
    };

    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar tu cuenta?");
        if (confirmDelete) {
            alert("Cuenta eliminada");
        }
    };

    return (
        <>
            <GlobalStyle />
            <CertificacionesContainer>
                <Title>Crear Certificación</Title>
                <FormContainer>
                    <ImageUploadContainer>
                        {imagePreview ? (
                            <img src={imagePreview} alt="Vista previa" />
                        ) : (
                            <p>Subir Imagen</p>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </ImageUploadContainer>

                    <InputContainer>
                        <Input
                            type="text"
                            placeholder="Título"
                            name="titulo"
                            value={formState.titulo}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="text"
                            placeholder="Escuela"
                            name="escuela"
                            value={formState.escuela}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="text"
                            placeholder="Fecha de Inicio (dd/mm/aaaa)"
                            name="fechaInicio"
                            value={formState.fechaInicio}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="text"
                            placeholder="Fecha de Fin (dd/mm/aaaa)"
                            name="fechaFin"
                            value={formState.fechaFin}
                            onChange={handleInputChange}
                        />
                    </InputContainer>
                    </FormContainer>
                <ButtonContainer>
                    <SaveButton text="Eliminar Certificado" onClick={handleDeleteAccount} />
                    <SaveButton text="Guardar Cambios" onClick={handleSave} />
                </ButtonContainer>
            </CertificacionesContainer>
        </>
    );
};

export default SettingsCertificate;