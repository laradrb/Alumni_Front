import { Link } from 'react-router-dom';
import { StyledButtonLinkLg } from './styledButtonLinkLg';

// Componente funcional para el botón de enlace
const ButtonLinkLg = ({ to, children }) => {
  return (
    <StyledButtonLinkLg as={Link} to={to}>
      {children}
    </StyledButtonLinkLg>
  );
};

export default ButtonLinkLg;
