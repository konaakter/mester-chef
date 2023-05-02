import React from 'react';
import logo6 from '../../imge/chef2.jpg'

const ChefCard = (props) => {
    const {bio, id, name, experience, numberOfRecipe, recipes, photo} = props.loder;


    return (
        <div>
            <div className='text-white text-center' >
                <div  className='px-7 py-16 bg-black'>
                    <img className='h-80 w-50 mx-auto'src={photo} alt="" />
                    <h1 className=' pt-5'>{name}</h1>
                    <p>{experience}</p>
                    <p>Number of recipes{recipes.length}</p>
                    <button className='bg-teal-500 px-8 py-2 mt-4'>Veiws more</button>    
                </div>
            </div>
            
        </div>
    );
};

export default ChefCard;