import Alumni from '../pages/Alumni';
import CompanyProfile from '../pages/CompanyProfile';
import SettingsCompany from '../pages/SettingsCompany';
import SettingsCoder from '../pages/SettingsCoder';
import SettingsRP from '../pages/SettingsRP';
import JobOffer from '../pages/JobOffer';
import ProfileCoder from '../pages/ProfileCoder';
import RpProfile from '../pages/RpProfile';
import CoderLayout from '../layout/CoderLayout';
import RpLayout from '../layout/RpLayout';        
import CompanyLayout from '../layout/CompanyLayout';
import PrivateRoute from './PrivateRoute'; 
import SettingsJobOffer from '../pages/SettingsJobOffer';
import CompanyOfferList from '../pages/CompanyOfferList';
import OffersList from '../pages/OffersList';
import CoderList from '../pages/CoderList';
import JobOfferList from '../pages/JobOfferList';
import AplicationToOffer from '../pages/AplicationToOffer';
import CertificateForm from '../pages/CertificateForm';



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
                    { path: "ajuste-oferta", 
                    element: <SettingsJobOffer /> },
                    { path: "oferta", 
                    element: <JobOffer /> },
                    { path: "aplicaciones-oferta", 
                    element: <CompanyOfferList /> },
                    { path: "aplicantes", 
                    element: <OffersList /> },
                    { path: "perfil-coder", 
                    element: <ProfileCoder /> },
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
                    { path: "alumni", 
                    element: <Alumni /> },
                    { path: "listado-coders", 
                    element: <CoderList /> },
                    { path: "listado-ofertas", 
                    element: <JobOfferList /> },
                    { path: "aplicar-oferta", 
                    element: <AplicationToOffer /> },
                    { path: "perfil-empresa", 
                    element: <CompanyProfile /> },
                    { path: "perfil-coder", 
                    element: <ProfileCoder /> },
                    { path: "ajustes-perfil", 
                    element: <SettingsCoder/> },
                    { path: "formulario-certificado", 
                    element: <CertificateForm /> },
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
                    { path: "alumni", 
                    element: <Alumni /> },
                    { path: "perfil-rp", 
                    element: <RpProfile /> },
                    { path: "ajustes-rp", 
                    element: <SettingsRP /> },
                ],
            },
        ],
    },
];