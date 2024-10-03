import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteLogic = ({ allowedRoles }) => {
    // Simulación de roles de usuario y empresa para este ejemplo
    const userRole = 'rp'; // Puedes reemplazar esto con localStorage.getItem('role');
    const empresaRole = 'empresa';
    const coderRole = 'coder'; // Puedes reemplazar esto con el rol adecuado

    // Verificación: Si ni el usuario ni la empresa tienen los roles permitidos, redirige a /login
    if (!allowedRoles.includes(userRole) && !allowedRoles.includes(empresaRole) && !allowedRoles.includes(coderRole)) {
        return <Navigate to="/login" />;
    }

    // Si alguno de los roles es permitido, permite el acceso a la ruta
    return <Outlet />;
};

export default PrivateRouteLogic;