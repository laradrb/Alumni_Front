import { Navigate, Outlet } from 'react-router-dom';



const PrivateRoute = ({ allowedRoles }) => {
   // const userRole = localStorage.getItem('role'); 
    const userRole = 'rp'; // Simulación de un rol de usuario en localStorage para este ejemplo
if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />; 
}

return <Outlet />; 
};

export default PrivateRoute;
