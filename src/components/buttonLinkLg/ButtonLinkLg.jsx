import { Link } from 'react-router-dom';
import { StyledButtonLinkLg } from './styledButtonLinkLg';


const ButtonLinkLg = ({ to, children }) => {
  return (
    <StyledButtonLinkLg as={Link} to={to}>
      {children}
    </StyledButtonLinkLg>
  );
};

export default ButtonLinkLg;
