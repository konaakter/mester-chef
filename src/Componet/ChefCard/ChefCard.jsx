import React from 'react';
import logo6 from '../../imge/chef2.jpg'
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const ChefCard = (props) => {

    const { bio, _id, name, experience, numberOfRecipe, recipes, photo, likes } = props.loder;


    return (
        <div>
            <div className='text-white text-center' >
                <div className='px-7 py-16 bg-black'>
                    <LazyLoad width={400} threshold={0.95}>
                        <img className='h-80 w-50 mx-auto hover:rounded-bl-lg ' src={photo} alt="" />

                    </LazyLoad>
                    <h1 className=' pt-5'>{name}</h1>
                    <p>{experience}</p>
                    <div className='flex flex-row justify-evenly'>
                        <div className='flex flex-row gap-2 items-center'>
                            <p>recipes:</p>
                            <p>{recipes.length}</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <FaThumbsUp className=' text-primary text-xl'></FaThumbsUp>

                            <p>{likes}</p>

                        </div>


                    </div>

                    <button className='boton px-8 py-2 mt-4'> <Link to={`/chef/${_id}`}>Veiws more</Link></button>
                </div>
            </div>

        </div>
    );
};

export default ChefCard;