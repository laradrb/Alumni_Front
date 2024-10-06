import { Outlet } from "react-router-dom";
import NavbarPublic from "../components/navbarPublic/NavbarPublic";
import Footer from "../components/footer/Footer"; 
import ApplicationToOffer from "../pages/AplicationToOffer";

const Layout = () => {
    return (
        
        <>
            <NavbarPublic />       
            <main>
                <Outlet />  
            </main>
            <Footer />
        </>
    );
}

export default Layout;
