import React from "react";
import { Navigate } from "react-router-dom"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import PreRegister from "../pages/PreRegister";
import RegisterRP from "../pages/RegisterRP";
import RegisterCompany from "../pages/RegisterCompany";
import RegisterExCoder from "../pages/RegisterExCoder";

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
            }           
        ];
