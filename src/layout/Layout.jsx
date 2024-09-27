import { Outlet } from "react-router-dom";
import NavbarPublic from "../components/navbarPublic/Navbar-public";
import NavbarCoders from "../components/navbarCoders/Navbar-coders";
import NavbarCompanies from "../components/navbar-companies/Navbar-companiess";
import NavbarRp from "../components/navbarRp/Navbar-rp";
import Footer from "../components/footer/Footer";

const Layout = () => {
    return (
        <>  
        <NavbarPublic/>
        <NavbarCoders/>
        <NavbarCompanies/>
        <NavbarRp/>
        <Footer/>
        <main><Outlet /></main>      
        </>
    );
}

export default Layout;