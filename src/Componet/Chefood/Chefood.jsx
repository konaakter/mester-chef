import React, { useState } from 'react';
import logo0 from '../../imge/fr3.jpg'
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import LazyLoad from 'react-lazy-load';

const Chefood = (props) => {

    
    
    const { name, ingredients, cooking_method, log } = props.recipe;
    const [alart, setalart] = useState(false)
    if(alart){
        toast("Fevorite!")

    }

    return (
        <div className=''>
            <div className='container mx-auto mb-8' >
                <div className=" text-white lg:flex flex-row bg-color justify-between p-10 border-b border-zinc-200 ">

                    <div className=' border border-orange-300 p-2  '>
                        <LazyLoad>
                        <img className=' lg:h-72 w-80 mx-auto  p-2 ' src={log} />
                        </LazyLoad>
                    </div>
                    <div className='lg:mt-1 mt-6 ms-12 '>
                        <h2>{name}</h2>
                        <div>
                            {
                                ingredients.map(ingredient => <li>{
                                    ingredient}</li>)
                            }
                        </div>
                        <div>
                            <p className='mb-5'>{
                                cooking_method

                            }
                            </p>

                        </div>
                        <hr />
                        <div className='flex flex-row justify-between items-center mt-4'>

                        <div>
                        <Rating style={{ maxWidth: 100 }} value={3} readOnly />

                        </div>
                        <div className='flex flex-row gap-3'>
                        <p className='text-1xl'>Fevorite</p>
                        <button onClick={() => setalart(!alart)} disabled={alart}  className={ ` text-1xl ${alart ? 'text-red-500' : ''}`}>
                        <FaHeart></FaHeart>

                        </button>
                        <ToastContainer />       
                        
                        </div>
                        </div>

                    


                        
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Chefood;


        
