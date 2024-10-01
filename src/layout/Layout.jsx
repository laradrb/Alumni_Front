import { Outlet } from "react-router-dom";
import NavbarPublic from "../components/navbarPublic/Navbar-public";
import NavbarCoders from "../components/navbarCoders/Navbar-coders";
import NavbarCompanies from "../components/navbarCompanies/Navbar-companies";
import NavbarRp from "../components/navbarRp/Navbar-rp";
import Footer from "../components/footer/Footer";

const Layout = () => {
    //const userRole = localStorage.getItem('role');
    return (
        
        <>
            {!userRole && <NavbarPublic />}       
            {userRole === 'empresa' && <NavbarCompanies />} 
            {userRole === 'coder' && <NavbarCoders />}      
            {userRole === 'rp' && <NavbarRp />}          
            <main>
                <Outlet />  
            </main>
            <Footer />  
        </>
    );
}

export default Layout;
