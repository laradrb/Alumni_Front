import Alumni from '../pages/Alumni';
import CompanyProfile from '../pages/CompanyProfile';
import SettingsCompany from '../pages/SettingsCompany';
import JobOffer from '../pages/JobOffer';
import ProfileCoder from '../pages/ProfileCoder';
import RpProfile from '../pages/RpProfile';
import PrivateRoute from '../components/PrivateRoute';


export const privateRoutes = [
    {
        path:"/empresa/perfil-empresa",
        element: <privateRoute roles={['empresa']} component={CompanyProfile}/>,
    },
    {
        path: "/empresa/ajuste-perfil",
        element: <privateRoute roles={['empresa']} component={SettingsCompany} />,
    },
    {
        path:"/empresa/ajuste-oferta",
        element: <privateRoute roles={['empresa']} component={SettingsJobOffer}/>
    },
    {
        path:"/empresa/oferta",
        element: <privateRoute roles={['empresa']} component={JobOffer}/>
    },
    {
        path:"/empresa/aplicaciones-ofertas",
        element: <privateRoute roles={['empresa']} component={CompanyOfferList}/>
    },
    {
        path:"/empresa/aplicantes",
        element: <privateRoute roles={['empresa']} component={OffersList}/>
    },
    {
        path:"/empresa/perfil-coder",
        element: <privateRoute roles={['empresa']} component={ProfileCoder}/>
    },
    {
    path: "/coder/alumni",
    element: <privateRoute roles={['coder']} component={Alumni} />,
},
{
    path: "/coder/listado-coders",
    element: <privateRoute roles={['coder']} component={CoderList} />,
},
{
    path: "/coder/listado-ofertas",
    element: <privateRoute roles={['coder']} component={JobOfferList} />,
},
{
    path: "/coder/aplicar-oferta",
    element: <privateRoute roles={['coder']} component={ApplicationToOffer} />,
},
{
    path: "/coder/perfil-empresa",
    element: <privateRoute roles={['coder']} component={CompanyProfile} />,
},
{
    path: "/coder/perfil-coder",
    element: <privateRoute roles={['coder']} component={ProfileCoder} />,
},
{
    path: "/coder/ajustes-perfil",
    element: <privateRoute roles={['coder']} component={SettingsCoder} />,
},
{
    path: "/coder/formulario-certificado",
    element: <privateRoute roles={['coder']} component={CertificateForm} />,
},
{
    path: "/coder/alumni",
    element: <privateRoute roles={['rp']} component={Alumni} />,
},
{
    path: "/rp/perfil-rp",
    element: <privateRoute roles={['rp']} component={RpProfile} />,
},
{
    path: "/rp/ajustes-rp",
    element: <privateRoute roles={['rp']} component={SettingsRP} />,
},
];