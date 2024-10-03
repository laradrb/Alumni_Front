import NavbarCoders from "../components/navbarCoders/NavbarCoders";
import { Outlet } from 'react-router-dom';
import Footer from "../components/footer/Footer";

const CoderLayout = () => {
return (
    <div>
        <NavbarCoders/>
        <Outlet/>
        <Footer/>
    </div>
)
}

export default CoderLayout;