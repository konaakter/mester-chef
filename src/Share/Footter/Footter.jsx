import React from 'react';
import { FaBeer, FaGoogle, FaGithub, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footter = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto'>

                <div className=' grid grid-cols-3'>
                    <div>
                        <h2>Contacts</h2>
                        <p>07843434577</p>
                        <p>hower@gmail.com</p>
                    </div>
                    <div>
                        <h1>Chef-Point</h1>
                        <p>Whisper to us about your feelings, and we will prepare what you need now.
                        </p>
                        <FaFacebookF></FaFacebookF>
                        <FaInstagram></FaInstagram>
                        <FaTwitter></FaTwitter>



                    </div>
                    <div>
                        <h1>Working Hours
                        </h1>
                        <p> Mon-fri : <span> 7.00am – 6.00pm
                        </span></p>
                        <p> Sat : <span> 7.00am – 6.00pm
                        </span></p>
                        <p> Sun : <span> 7.00am – 6.00pm
                        </span></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footter;