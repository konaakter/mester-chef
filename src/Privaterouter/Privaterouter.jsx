import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Privaterouter = ({ children }) => {

    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loding) {
        return  <div className='text-center border  container mx-auto  px-16 py-36 mt-16'>
            
            <div className="radial-progress bg-primary text-primary-content border-4 border-primary w-auto h-auto" style={{ "--value": 70 }}>70%</div>
            <h1 className=' text-7xl'>Lodindg</h1>
        </div>
    }

    if (user) {
        return children;

    }
    return <Navigate state={{ from: location }} to="/logi"  replace />;
};

export default Privaterouter;