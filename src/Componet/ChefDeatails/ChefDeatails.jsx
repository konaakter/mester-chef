import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chefood from '../Chefood/Chefood';
import { FaThumbsUp } from 'react-icons/fa';

const ChefDeatails = () => {
    const loders = useLoaderData();
    console.log(loders);
    const { bio, _id, name, experience, numberOfRecipe, recipes, photo, likes } = loders;
    return (
        <div>
            <div className=' bg-color '>
                <div className='lg:grid grid-cols-2 gap-56 container mx-auto pt-32  pb-14'>
                    <div className='my-auto text-white m-5'>
                        <h1 className='text-8xl color mb-2'>{name}</h1>

                        <div className='flex flex-row '>
                            <div className='flex flex-row gap-2 items-center justify-start'>
                                <p>recipes:</p>
                                <p>{recipes.length}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center ms-24'>
                                <FaThumbsUp className=' text-primary text-xl'></FaThumbsUp>

                                <p>{likes}</p>

                            </div>


                        </div>


                        <p className='mb-4'>{bio}</p>
                        <p className='color	 mb-4'>{experience}</p>
                        <p className='bg-orange-200 text-orange-200	 '>{experience}</p>

                    </div>
                    <div>
                        <img className='w-full p-2  border border-orange-300 m-3' src={photo} alt="" />

                    </div>

                </div>
            </div>
            <div className='bg-black'>
                <div className=' py-24'>
                    {
                        recipes.map(recipe => <Chefood
                            recipe={recipe}

                        ></Chefood>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ChefDeatails;