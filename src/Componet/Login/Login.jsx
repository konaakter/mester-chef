import React, { useContext, useState} from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const {Loginemailpassword, gogoleprover, GithubSing, loding } = useContext(AuthContext);
    let navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/";

    const [food, setfood] = useState('')



    const handlelogin = (event) =>{
        event.preventDefault();
        setfood('')
        
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        Loginemailpassword(email, password)
        .then(result =>{
            const reuser = result.user;
            console.log(reuser);
            event.target.reset();

            navigate(form, {replace : true});
        })
        .catch(error => {
            console.log(error);
            setfood(error.message);
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
        <div >
            <div>

            <div className="hero min-h-screen bg-color">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold color">Login now!</h1>
                        <p className="py-6 text-slate-300">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handlelogin} className="card flex-shrink-0 w-full bg-black text-white max-w-sm shadow-slate-500">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-slate-300">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-slate-300">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn  mb-4">Login</button>
                                <button onClick={handlergoogle} className="btn bg-orange-400 mb-2 ">Google</button>
                                <button onClick={handleGithub} className="btn  ">Github</button>
                            </div>
                            <p className=' text-red-600'>{food}</p>
                            <p> <small>New to this website ? please <Link className=' color' to='/login'>Registatoin</Link></small></p>
                        </div>
                    </form>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Login;