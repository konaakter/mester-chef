import React from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loders = useLoaderData();
    console.log(loders);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className=' bg-zinc-800'>
                <div className=' container mx-auto pt-24 pb-16 lg:grid grid-cols-4 '>

                    {
                        loders.map(loder => <ChefCard
                            loder={loder}

                        >

                        </ChefCard>)
                    }

                </div>s

            </div>

        </div>
    );
};

export default Home;