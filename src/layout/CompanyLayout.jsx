import { Outlet } from "react-router-dom"
import NavbarCompanies from "../components/navbarCompanies/NavbarCompanies";
import Footer from "../components/footer/Footer";

const CompanyLayout = () => {
return (
    <div>
        <NavbarCompanies />
        <Outlet />
        <Footer/>
    </div>
)
}

export default CompanyLayout