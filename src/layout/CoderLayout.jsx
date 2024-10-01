import NavbarCoders from "../components/navbarCoders/NavbarCoders";
import { Outlet } from 'react-router-dom'

const CoderLayout = () => {
return (
    <div>
    <NavbarCoders/>
    <Outlet/>
    </div>
)
}

export default CoderLayout
