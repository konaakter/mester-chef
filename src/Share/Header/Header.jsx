import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignout = () => {
        logOut()
            .then()

            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div >
            <div className='border-dashed border-b-2 border-slate-100 bg-zinc-800'>

                <div className="navbar  container mx-auto text-slate-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-color rounded-box w-52">
                                
                                    <NavLink
                                        to='/'
                                        className={({ isActive }) => (isActive ? ' text-orange-300' : 'default')}
                                    >
                                        Home
                                    </NavLink>
                                


                                
                                    
                                        <NavLink
                                            to='/logi'
                                            className={({ isActive }) => (isActive ? 'text-orange-300' : 'default')}
                                        >
                                            contract
                                        </NavLink>
                                    

                            
                                
                                    <NavLink
                                        to='/blog'
                                        className={({ isActive }) => (isActive ? 'text-orange-300' : 'default')}
                                    >
                                        blog
                                    </NavLink>
                                
                            </ul>
                        </div>
                        <a className=" normal-case text-xl font-bold color">Chef-Point</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal  items-center gap-6">

                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'text-orange-300' : 'default')}
                            >
                                Home
                            </NavLink>


                            <NavLink
                                to='/logi'
                                className={({ isActive }) => (isActive ? 'text-orange-300' : '')}
                            >
                                contract
                            </NavLink>

                            <NavLink
                                to='/blog'
                                className={({ isActive }) => (isActive ? 'text-orange-300' : 'default')}
                            >
                                blog
                            </NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <p>
                            {
                                user && <span>{user?.display}</span>
                            }
                        </p>
                        <p>
                            {
                                user ?
                                    <span className='flex gap-6 justify-center content-center'>
                                        {
                                            user.photoURL &&
                                            <img className='w-12 rounded-full' title={user.displayName ? user.displayName : ''} src={user.photoURL} />
                                        }
                                        <Link onClick={logOut} className="btn">LogOut</Link> </span>
                                    : <Link to={'/logi'} className="btn">Login</Link>
                            }
                        </p>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;

/* {
                                user ? < button className='boton px-8 py-2 mt-4' onClick={handleSignout}>logout</button> : <Link to='/logi'><button className='boton px-8 py-2 mt-4'>login</button></Link>
                            }*/