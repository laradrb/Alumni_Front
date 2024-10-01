import { Outlet } from "react-router-dom"
import NavbarCompanies from "../components/navbarCompanies/NavbarCompanies";
const CompanyLayout = () => {
return (
    <div>
<NavbarCompanies />
    <Outlet />
    </div>
)
}

export default CompanyLayout
