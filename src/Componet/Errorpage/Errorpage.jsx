import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import logo from '../../imge/error.png'


const Errorpage = () => {
    const {error, status} = useRouteError()

    /**********************************************error page show************************************ */
    return (
        <div>
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <h1 className='text-9xl text-pink-800'>OOPS</h1>
        <img className='W-96 h-52' src= {logo} alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-blue-900'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-green-700 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='rounded-md button-primary p-3 text-white'>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Errorpage;