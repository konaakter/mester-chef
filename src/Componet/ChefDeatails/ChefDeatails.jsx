import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chefood from '../Chefood/Chefood';

const ChefDeatails = () => {
    const loders = useLoaderData();
    console.log(loders);
    const { bio, _id, name, experience, numberOfRecipe, recipes, photo } = loders;
    return (
        <div>
            <div className=' bg-color '>
                <div className='grid grid-cols-2 gap-56 container mx-auto pt-32  pb-14'>
                    <div className='my-auto text-white'>
                        <h1 className='text-8xl color mb-2'>{name}</h1>
                        <p className=' mb-4 text-center'> Number of recipe: {recipes.length}</p>
                        <p className='mb-4'>{bio}</p>
                        <p className='color	 mb-4'>{experience}</p>
                        <p className='bg-orange-200 text-orange-200	 '>{experience}</p>

                    </div>
                    <div>
                        <img className='w-full p-2  border border-orange-300' src={photo} alt="" />

                    </div>

                </div>
            </div>
            <div>
               {
                recipes.map(recipe => <Chefood
                recipe={recipe}
                
                ></Chefood>)
               }
            </div>
        </div>
    );
};

export default ChefDeatails;