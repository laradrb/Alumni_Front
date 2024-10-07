import React from 'react'
import NavbarRp from "../components/navbarRp/NavbarRp";
import {Outlet} from 'react-router-dom';
import Footer from '../components/footer/Footer';

const RpLayout = () => {
return (
    <div>
    <NavbarRp/>
    <Outlet/>
    <Footer/>
    </div>
)
}

export default RpLayout
