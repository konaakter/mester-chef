import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Componet/Login/Login";
import Banner from "../Componet/Banner/Banner";
import Registatoin from "../Componet/Registatoin/Registatoin";
import Home from "../Componet/Home/Home";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch (`http://localhost:5000/chef`)
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