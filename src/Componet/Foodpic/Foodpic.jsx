import React from 'react';
import logo1 from '../../imge/chaina5e.jpeg'
import logo2 from '../../imge/gosto.jpg'
import logo3 from '../../imge/bg2.jpeg'


const Foodpic = () => {



    /*************************************home page top food sectoin********************************** */
    return (
        <div className=''>
            <div className='w-4/5 mx-auto pb-40'>
                <h1 className='text-center text-6xl font-bold color pb-20'>ToP FOOd</h1>
                <div className=' lg:grid grid-cols-3 gap-6 '>
                    <div className='card w-96 bg-base-100 shadow-xl image-full lg:mb-1 mb-6' >
                        <figure><img src={logo1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title color">Tacos al Pastor</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className='card w-96 bg-base-100 shadow-xl image-full lg:mb-1 mb-6' >
                        <figure><img src={logo2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title color">Guacamole</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className='card w-96 bg-base-100 shadow-xl image-full lg:mb-1 mb-6' >
                        <figure><img src={logo3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title color">Salsa Verde</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodpic;