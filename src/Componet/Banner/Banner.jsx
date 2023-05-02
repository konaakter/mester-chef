import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {

    return (
        <div>
            <div className='home'>
                <div className='text-center pt-52'>
                    <div>
                        <h2 className='text-slate-50 font-mono'>Wellcome to our retudent</h2>
                        <h1 className='text-7xl text-slate-50 font-bold font-mono pt-2'>Testy Royele Cuisine</h1>
                        <button className="btn btn-outline btn-accent	 mt-11">See more</button>
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