import SaveButton from "../../../../atom/SaveButton";
import { Container } from "./styledSettingsButtons";

const SettingsButtons = () => {
    return (
        <Container>
        <SaveButton text="Borrar Cuenta"/>
        <SaveButton text="Guardar Cambios"/>
        </Container>
    )
}

export default SettingsButtons;