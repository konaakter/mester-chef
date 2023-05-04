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
            <div className='border-dashed border-b-2 border-slate-100  bg-zinc-800'>

                <div className="navbar  container mx-auto text-slate-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='login'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    contract
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='logi'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    blog
                                </NavLink>
                            </li>
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
                                user ? <button onClick={handleSignout}>logout</button> : <Link to='/logi'><button>login</button></Link>
                            }
                        </p>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;