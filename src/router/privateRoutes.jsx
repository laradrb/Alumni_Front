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
import PrivateRouteLogic from './PrivateRouteLogic';
import SettingsJobOffer from '../pages/SettingsJobOffer';
import CompanyOfferList from '../pages/CompanyOfferList';
import OffersList from '../pages/OffersList';
import CoderList from '../pages/CoderList';
import JobOfferList from '../pages/JobOfferList';
import AplicationToOffer from '../pages/AplicationToOffer';
import CertificateForm from '../pages/CertificateForm';
import CompaniesList from '../pages/CompaniesList';
import LimitedProfileCoder from '../pages/LimitedProfileCoder';
import LimitedCompanyProfile from '../pages/LimitedCompanyProfile';



export const privateRoutes = [
    {
        path: "empresa/",
        element: <PrivateRouteLogic allowedRoles={['empresa']} />, 
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
                    element: <LimitedProfileCoder /> },
                ],
            },
        ],
    },
    {
        path: "coder/",
        element: <PrivateRouteLogic allowedRoles={['coder']} />,
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
                    element: <LimitedCompanyProfile /> },
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
        element: <PrivateRouteLogic allowedRoles={['rp']} />, 
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
                    { path: "listado-coders", 
                    element: <CoderList /> },
                    { path: "listado-empresas", 
                    element: <CompaniesList /> },
                    { path: "perfil-coder", 
                    element: <LimitedProfileCoder /> },
                    { path: "perfil-empresa", 
                    element: <LimitedCompanyProfile /> },
                    { path: "listado-ofertas", 
                    element: <JobOfferList /> },
                    { path: "oferta", 
                    element: <JobOffer /> },
                ],
            },
        ],
    },
];