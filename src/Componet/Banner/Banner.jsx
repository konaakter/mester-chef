import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {

    return (
        <div>
            <div className='home'>
                <div className='text-center pt-52'>
                    <div>
                        <h2 className=' font-mono text-orange-300'>Wellcome to our retudent</h2>
                        <h1 className='text-7xl text-slate-50 font-bold font-mono pt-2'>Testy Frence Cuisine</h1>
                        <button className="className=' boton text-white px-8 py-4 mt-4">See more</button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;

/*<div>
                    {
                        loders.map(loder => )
                    }

                </div>*/