import React, { useState } from 'react';
import Input from '../../../atom/Input';
import SaveButton from '../../../atom/SaveButton';
import { CertificacionesContainer, InputContainer, PopoverWrapper, ButtonContainer, Title, FormContainer, ImageUploadContainer } from './styledSettingsCertificateComponent';
import GlobalStyle from '../../../../styled/GlobalStyle';
import CardPopover from '../../../cardPopover/CardPopover'; 

const SettingsCertificate = () => {
    const [formState, setFormState] = useState({
        titulo: '',
        escuela: '',
        fechaInicio: '',
        fechaFin: '',
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [showDeletePopover, setShowDeletePopover] = useState(false);

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

    const handleDeleteAccount = () => {
        setShowDeletePopover(true);
    };

    const confirmDeleteAccount = async () => {
        try {
            const response = await axios.delete('/api/deleteAccount');
            console.log('Cuenta borrada:', response.data);
        } catch (error) {
            console.error('Error al borrar la cuenta:', error);
        }
        setShowDeletePopover(false);
    };

    const cancelDeleteAccount = () => {
        setShowDeletePopover(false);
    };

    const handleSave = () => {
        console.log("Cambios guardados", formState);
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
                            <p>Subir Certificado</p>
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

                {showDeletePopover && (
                    <PopoverWrapper>
                        <CardPopover
                            title="¿Desea eliminar este certificado?"
                            text="No podrás revertir esta acción"
                            confirmText="Sí"
                            cancelText="No"
                            onConfirm={confirmDeleteAccount}
                            onCancel={cancelDeleteAccount}
                        />
                    </PopoverWrapper>
                )}
            </CertificacionesContainer>
        </>
    );
};

export default SettingsCertificate;
