import React from 'react';
import log2 from '../../imge/bg6e.jpg'
import log1 from '../../imge/bg4.jpg'


const Restudetchef = () => {
    return (
        <div className=' '>
            <h1>kona</h1>
            <div className='grid grid-cols-2 gap-6 pb-28'>
                <div>
                    <img className=' ps-10 h-96' src={log1} alt="" />
                    <img className=' -mt-20  h-72' src={log2} alt="" srcset="" />
                    
                </div>
                <div className=' mt-24 text-white'>
                    <h1 className=' text-6xl color pb-7'>Between Heaven & Earth</h1>
                    <hr className=' w-40'></hr>
                    <p className=' pb-5 pt-8 text-1xl'>The character and philosophy of our type of cuisine, which follows the ancestral technique of using different types of firewood, fire,charcoal and the scented trace of the smoke, inherently results in a limitation on the number of diners that we can accommodate without sacrificing our essence.
                    </p>
                    <p className='text-3xl pb-8'>Whisper to us about your feelings, and we will prepare what you need now.
                    </p>
                    
                    <button className='boton px-8 py-4 '>DISCOVER MORE</button>


                </div>

                <div>

                </div>
            </div>

        </div>
    );
};

export default Restudetchef;