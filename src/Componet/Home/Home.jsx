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
            <div>
                
                    {
                        loders.map(loder => <ChefCard
                        loder={loder}
                        
                        >

                        </ChefCard>)
                    }
                
            </div>

        </div>
    );
};

export default Home;