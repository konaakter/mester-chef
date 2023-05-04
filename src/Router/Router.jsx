import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Componet/Login/Login";
import Banner from "../Componet/Banner/Banner";
import Registatoin from "../Componet/Registatoin/Registatoin";
import Home from "../Componet/Home/Home";
import ChefDeatails from "../Componet/ChefDeatails/ChefDeatails";
import Privaterouter from "../Privaterouter/Privaterouter";
import Blog from "../Componet/Blog/Blog";

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
                element: <Privaterouter><ChefDeatails></ChefDeatails></Privaterouter> ,
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
            {
                path:"/blog",
                element: <Blog></Blog>
            }


        ],
    },

]);



export default router;