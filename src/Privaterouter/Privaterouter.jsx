import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Privaterouter = ({children}) => {

   const {user}  = useContext(AuthContext);
   const location = useLocation();

   if (user) {
    return children;
    
   }
    return <Navigate to="/logi" state={{ from: location }} replace />;
};

export default Privaterouter;