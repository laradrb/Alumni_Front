import Alumni from '../pages/Alumni';
import CompanyProfile from '../pages/CompanyProfile';
import SettingsCompany from '../pages/SettingsCompany';
import JobOffer from '../pages/JobOffer';
import ProfileCoder from '../pages/ProfileCoder';
import RpProfile from '../pages/RpProfile';
import CoderLayout from '../layout/CoderLayout';
import RpLayout from '../layout/RpLayout';        
import CompanyLayout from '../layout/CompanyLayout';
import PrivateRoute from './PrivateRoute'; 



export const privateRoutes = [
    {
        path: "empresa/",
        element: <PrivateRoute allowedRoles={['empresa']} />, 
        children: [
            {
                path: "",
                element: <CompanyLayout />, 
                children: [
                    { path: "perfil-empresa", 
                    element: <CompanyProfile /> },
                    { path: "ajuste-perfil", 
                    element: <SettingsCompany /> },
                    { path: "oferta", 
                    element: <JobOffer /> },
                ],
            },
        ],
    },
    {
        path: "coder/",
        element: <PrivateRoute allowedRoles={['coder']} />,
        children: [
            {
                path: "",
                element: <CoderLayout />, 
                children: [
                    { path: "", 
                    element: <Alumni /> },
                    { path: "perfil-coder", 
                    element: <ProfileCoder /> },
                ],
            },
        ],
    },
    {
        path: "rp/",
        element: <PrivateRoute allowedRoles={['rp']} />, 
        children: [
            {
                path: "",
                element: <RpLayout />, 
                children: [
                    { path: "", 
                    element: <Alumni /> },
                    { path: "", 
                    element: <RpProfile /> },
                ],
            },
        ],
    },
];