import { Outlet } from "react-router-dom";
import NavbarPublic from "../components/navbarPublic/Navbar-public";


const Layout = () => {
    return (
        <>  
        <NavbarPublic/>
        <main><Outlet /></main>      
        </>
    );
}

export default Layout;