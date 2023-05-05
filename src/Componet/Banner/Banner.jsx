import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {
    /***********************************************banar img and some text***************************** */

    return (
        <div>
            <div className='home'>
                <div className='text-center pt-52'>
                    <div>
                        <h2 className=' font-mono text-orange-300 text-4xl'>Wellcome to <span className='text-white'> our retudent</span> </h2>
                        <h1 className='lg:text-8xl text-3xl text-slate-50 font-bold font-mono pt-2 mb-5'>Testy Frence <span className='text-orange-300'> Cuisine</span> </h1>

                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;

