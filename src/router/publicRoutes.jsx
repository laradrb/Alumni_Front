import React from "react";
import { Navigate } from "react-router-dom"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import PreRegister from "../pages/PreRegister";
import RegisterRP from "../pages/RegisterRP";
import RegisterCompany from "../pages/RegisterCompany";
import RegisterExCoder from "../pages/RegisterExCoder";
import SettingsCompany from "../pages/SettingsCompany";
import CardViewRp from "../components/profile/profileRp/CardViewRp/CardViewRp";
import SettingsRp from '../pages/SettingsRP'; 


export const publicRoutes = [
            {
                path: "/", 
                element: <Navigate to='/home'/>,
            },
            {
                path: "/home", 
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/preregister",
                element: <PreRegister />,
            },
            {
                path: "/registerRP",
                element: <RegisterRP/>,
            },
            {
                path: "/registerCompany",
                element: <RegisterCompany/>,
            },
            {
                path: "/registerExCoder",
                element: <RegisterExCoder/>,
            },
            {
                path: "/settingsCompany",
                element: <SettingsCompany/>,
            },
            {
                path: "/",
                element: <SettingsCompany/>,
            },
            {
                path: "/card",
                element: <CardViewRp/>,
            },
            {
                path: "/settingsRp",
                element: <SettingsRp/>,
            }
            
            
        ];
            