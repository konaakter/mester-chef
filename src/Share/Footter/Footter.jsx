import React from 'react';
import { FaBeer, FaGoogle, FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaGlideG, FaPhone, FaRegEnvelope, FaSearchLocation } from 'react-icons/fa';

const Footter = () => {

    /**********************************************************fotter************************************ */
    return (
        <div>
        <div className='bg-black '>
            <div className=' container mx-auto py-40 '>

                <div className='lg:grid grid-cols-3 gap-4 text-white mb-4 '>
                    <div className='  lg:ms-1 ms-14'>
                        <div>
                        <h2 className='text-3xl'>Contacts </h2>

                        </div>
                        <div className='flex flex-row items-center pt-6 '>
                            <FaPhone className=' me-3 color'></FaPhone> 
                            07843434577
                        </div>
                        <div className='flex flex-row items-center pt-2 '>
                            <FaRegEnvelope className=' me-3 color'></FaRegEnvelope>

                        <p>hower@gmail.com</p>

                        </div>
                        <div className='flex flex-row items-center pt-2 '>
                           <FaInstagram className=' me-3 color'></FaInstagram>
                            
                            <p>Chef-Poin3663678</p>

                        </div>
                    </div>
                    <div className=' lg:text-center lg:me-40  lg:ms-1 ms-14 mb-4'>
                        <h1 className=' text-5xl color pb-5'>Chef-Point</h1>
                        <p>Whisper to us about your feelings, and we will prepare <br></br>what you need now.
                        </p>
                        <div className=' flex flex-row justify-around pt-7'>
                        <FaFacebookF ></FaFacebookF>
                        <FaInstagram ></FaInstagram>
                        <FaTwitter ></FaTwitter>
                        <FaGlideG></FaGlideG>

                        </div>



                    </div>
                    <div className=' lg:ms-1 ms-14 ' >
                        <h1 className='text-3xl pb-6'>Working Hours
                        </h1>
                        <p className='color pb-2'> Mon-fri : <span className='text-white'> 7.00am – 6.00pm
                        </span></p>
                        <p className='color pb-2'> Sat : <span className='text-white'> 7.00am – 6.00pm
                        </span></p>
                        <p className='color pb-2'> Sun : <span className='text-white'> 7.00am – 6.00pm
                        </span></p>

                    </div>
                </div>
            </div>

        </div>
        <div className='text-center bg-color py-8 text-slate-50'>
            <h3>Copyright © 2021 Benoit by WebGeniusLab. All Rights Reserved</h3>
        </div>
        </div>
    );
};

export default Footter;