import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Restudetchef from '../Restudetchef/Restudetchef';
import Foodpic from '../Foodpic/Foodpic';

const Home = () => {
    const navigation = useNavigate();
    console.log(navigation.state)
    if (navigation.state == 'loading') {
        return <div className='text-center   container mx-auto  px-16 py-36 mt-16'>
            <progress className="progress w-56"></progress>
            <progress className="progress progress-info w-56" value="70" max="100"></progress>
            
            <h1 className=' text-9xl text-black'>Lodindg</h1>
        </div>
    }
    const loders = useLoaderData();
    console.log(loders);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            {/* ******************************************chef card************************ */}
            <div className=' bg-color'>
                <h1 className='text-center lg:text-6xl text-3xl font-bold color lg:pt-36 pt-10 lg:pb-6 pb-3'>FRENCE<span className='text-white'> CUISINE CHEF</span> </h1>


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