import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';
import { useLoaderData } from 'react-router-dom';
import Restudetchef from '../Restudetchef/Restudetchef';

const Home = () => {
    const loders = useLoaderData();
    console.log(loders);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className=' bg-color'>
                <div className=' container mx-auto pt-24 pb-16 lg:grid grid-cols-4 '>

                    {
                        loders.map(loder => <ChefCard
                            loder={loder}

                        >

                        </ChefCard>)
                    }

                </div>

            </div>
            <div className='bg-color'>
                <div className='container mx-auto'>
                <Restudetchef></Restudetchef>
                </div>
            </div>

        </div>
    );
};

export default Home;