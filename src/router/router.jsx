import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

export const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    children: [
    ...publicRoutes,   
    ],
},
{
    path:"/",
    children: [...privateRoutes],
}

]);
