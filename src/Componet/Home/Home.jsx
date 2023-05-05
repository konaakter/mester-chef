import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';
import { useLoaderData } from 'react-router-dom';
import Restudetchef from '../Restudetchef/Restudetchef';
import Foodpic from '../Foodpic/Foodpic';

const Home = () => {
    <progress className="progress w-56"></progress>
    const loders = useLoaderData();
    console.log(loders);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            {/* ******************************************chef card************************ */}
            <div className=' bg-color'>
            <h1 className='text-center text-6xl font-bold color pt-36 pb-6'>FRANCH <span className='text-white'> COUSIN SHEF</span> </h1>


                <div className=' container mx-auto pt-24 pb-16 lg:grid grid-cols-3 '>

                    {
                        loders.map(loder => <ChefCard
                            loder={loder}

                        >

                        </ChefCard>)
                    }

                </div>

            </div>
            {/************************************ home ar 3 section */}
            <div className='bg-color'>
                <div className='container mx-auto'>
                <Restudetchef></Restudetchef>
                </div>
            </div>
            {/* fotter******************************************************************************* */}

            <div>
                <div className='bg-color pt-20'>
                    <Foodpic></Foodpic>
                </div>
            </div>

        </div>
    );
};

export default Home;