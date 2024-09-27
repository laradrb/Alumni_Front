import { Outlet } from "react-router-dom";
import NavbarPublic from "../components/navbarPublic/Navbar-public";
import NavbarCoders from "../components/navbarCoders/Navbar-coders";


const Layout = () => {
    return (
        <>  
        <NavbarPublic/>
        <NavbarCoders/>
        <main><Outlet /></main>      
        </>
    );
}

export default Layout;