import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Alumni from "../pages/Alumni";
import RegisterRP from "../pages/RegisterRP";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home", 
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/alumni",
                element: <Alumni />,
            },
            {
                path: "/registerRP",
                element: <RegisterRP/>,
            },
        ],
    },
]);