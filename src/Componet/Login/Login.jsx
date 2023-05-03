import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/Authprovider';

const Login = () => {
    const {Loginemailpassword, gogoleprover, GithubSing } = useContext(AuthContext);
    const [error, seterror] = useState('');


    const handlelogin = (event) =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        Loginemailpassword(email, password)
        .then(result =>{
            const reuser = result.user;
            console.log(reuser);
            event.target.reset();
        })
        .catch(error => {
            console.log(error);
        })
    

    }

    const handlergoogle = () =>{
        gogoleprover()
        .then(result => {
            const gogle = result.user
            console.log(gogle);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGithub =() =>{
        GithubSing()
        .then(result => {
            const github = result.user
            console.log(github);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handlelogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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
                                <button  className="btn btn-primary mb-4">Login</button>
                                <button onClick={handlergoogle} className="btn btn-primary mb-2 ">Google</button>
                                <button onClick={handleGithub} className="btn btn-primary ">Github</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;