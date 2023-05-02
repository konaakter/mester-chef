import React from 'react';
import logo0 from '../../imge/bg6e.jpg'

const Chefood = (props) => {
    const { name, ingredients, cooking_method,  } = props.recipe;

    return (
        <div className=' bg-black'>
        <div className='container mx-auto' >
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-60 p' src={logo0}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        {
                            ingredients.map(ingredient => <li>{ingredient}</li>)
                        }
                    </div>
                    <p>{cooking_method}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>

        </div >
    );
};

export default Chefood;