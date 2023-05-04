import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Componet/Login/Login";
import Banner from "../Componet/Banner/Banner";
import Registatoin from "../Componet/Registatoin/Registatoin";
import Home from "../Componet/Home/Home";
import ChefDeatails from "../Componet/ChefDeatails/ChefDeatails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`https://master-chef-kona-server-konaakter.vercel.app/chef`)
            },

            {
                path: "/chef/:id",
                element: <ChefDeatails></ChefDeatails>,
                loader: ({params}) => fetch(`https://master-chef-kona-server-konaakter.vercel.app/chef/${params.id}`)
              },
            {
                path: "logi",
                element: <Login></Login>,
            },
            {
                path: "login",
                element: <Registatoin></Registatoin>,
            },


        ],
    },

]);



export default router;