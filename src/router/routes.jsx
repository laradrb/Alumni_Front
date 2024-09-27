import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PreRegister from "../pages/PreRegister";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/", 
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/preregister",
                element: <PreRegister/>,
            },
        ],
    },
]);