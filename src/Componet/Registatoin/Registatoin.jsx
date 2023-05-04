import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import { Link } from 'react-router-dom';


const Registatoin = () => {
    const {SignInRegintatoin, updatUser} = useContext(AuthContext);
    console.log(SignInRegintatoin);

    const [error, seterror] = useState('')
    const [succes, setsucces] =useState('')
     const handleREgintatoin = (event) => {
        event.preventDefault();
        setsucces('');
        seterror('');

        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)


        if(password.length<6){
           return seterror('Please add at least 6 chahacters in you password ')
        }
        SignInRegintatoin(email, password)
        .then(result =>{
            const reuser = result.user;
            console.log(reuser);
            event.target.reset();
            seterror('')
           alert('YOu has been created succesfully')
        })
        .catch(error => {
            console.log(error.message);
            seterror(error.message)
        })
         updatUser(name, photo)
        .then(result =>{
            const photo = result.user;
            console.log(photo);

        })
        .catch(error => {
            console.log(error.message);
        })




     }





    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <form onSubmit={handleREgintatoin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary mb-2">Login</button>
                                <p className=' text-red-600'>{error}</p>
                            </div>
                            <p> <small>Allready account ? please <Link className=' text-primary' to='/logi'>Login</Link></small></p>

                        </div>
                    </form>
        
                </div>
            </div>

        </div>
    );
};

export default Registatoin;