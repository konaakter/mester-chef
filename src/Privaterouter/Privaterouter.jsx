import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Privaterouter = ({ children }) => {

    const { user, loding } = useContext(AuthContext);
    const location = useLocation();

    if (loding) {
        return  <div className='text-center border border-black container mx-auto  px-16 py-36 mt-16 bg-black'>
            
            <div className="radial-progress bg-primary text-primary-content border-4 border-primary w-auto h-auto" style={{ "--value": 70 }}>70%</div>
            <h1 className=' text-7xl'>Lodindg</h1>
        </div>
    }

    if (user) {
        return children;

    }
    return <Navigate to="/logi" state={{ from: location }} replace />;
};

export default Privaterouter;