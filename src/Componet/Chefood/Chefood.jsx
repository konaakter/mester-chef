import React from 'react';
import logo0 from '../../imge/fr3.jpg'
import { Link } from 'react-router-dom';

const Chefood = (props) => {
    const { name, ingredients, cooking_method, log } = props.recipe;

    return (
        <div className=''>
            <div className='container mx-auto mb-8' >
                <div className=" text-white lg:flex flex-row bg-color justify-between p-10 border-b border-zinc-200 ">

                    <div className=' border border-orange-300 p-2  '>
                        <img className=' lg:h-72 w-80  p-2 ' src={log} />
                    </div>
                    <div className='lg:mt-1 mt-6 ms-12'>
                        <h2>{name}</h2>
                        <div>
                            {
                                ingredients.map(ingredient => <li>{
                                    ingredient}</li>)
                            }
                        </div>
                        <div>
                            <p>{
                                cooking_method

                            }
                            </p>

                        </div>
                        <div>
                            <button className='boton px-8 py-2 mt-4'>Read more</button>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Chefood;

/* <div className='container mx-auto mb-8' >
            <div className="card card-side bg-color text-white shadow-xl ">
                <figure><img className=' w-6/12' src={logo0}/></figure>
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
        
        
        
        
        
        lg:card lg:card-side bg-color text-white shadow-xl*/