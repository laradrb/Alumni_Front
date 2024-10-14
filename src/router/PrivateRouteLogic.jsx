import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteLogic = ({ allowedRoles }) => {
    const userRole = 'rp';
    const empresaRole = 'empresa';
    const coderRole = 'coder'; 

    if (!allowedRoles.includes(userRole) && !allowedRoles.includes(empresaRole) && !allowedRoles.includes(coderRole)) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRouteLogic;