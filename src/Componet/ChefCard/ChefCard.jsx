import React from 'react';
import logo6 from '../../imge/chef2.jpg'
import { Link } from 'react-router-dom';

const ChefCard = (props) => {
    const { bio, _id, name, experience, numberOfRecipe, recipes, photo } = props.loder;


    return (
        <div>
            <div className='text-white text-center' >
                <div className='px-7 py-16 bg-black'>
                    <img className='h-80 w-50 mx-auto hover:rounded-bl-lg ' src={photo} alt="" />
                    <h1 className=' pt-5'>{name}</h1>
                    <p>{experience}</p>
                    <p>Number of recipes : {recipes.length}</p>
                    
                        <button className='boton px-8 py-2 mt-4'> <Link to={`/chef/${_id}`}>Veiws more</Link></button>
                </div>
            </div>

        </div>
    );
};

export default ChefCard;