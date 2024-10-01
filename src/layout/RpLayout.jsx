import React from 'react'
import NavbarRp from "../components/navbarRp/NavbarRp";


const RpLayout = () => {
return (
    <div>
    <NavbarRp/>
    <Outlet/>
    </div>
)
}

export default RpLayout
