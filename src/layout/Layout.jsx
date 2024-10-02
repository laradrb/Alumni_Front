import { Outlet } from "react-router-dom";
import NavbarPublic from "../components/navbarPublic/NavbarPublic";
import Footer from "../components/footer/Footer"; 
import CertificateCard from "../components/profile/profileCoder/viewCardCertificates/CertificateCard"

const Layout = () => {
    return (
        
        <>
            <NavbarPublic />       
            <main>
                <Outlet />  
            </main>
            <Footer />  
            <CertificateCard /> 
        </>
    );
}

export default Layout;
