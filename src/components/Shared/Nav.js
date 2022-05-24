import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Asset/logo.png'
import auth from '../../firebase.init';

const Nav = () => {
    const [user] = useAuthState(auth)
    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    {
        user &&   <li><Link to="/dashboard">Dashboard</Link></li>
    }
    <li><Link to="/review">Review</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/login">Log In</Link></li>
    <li><Link to="/signIn">Register</Link></li>
   

    </>
    return (
        <div className="navbar bg-purple-300 py-5 lg:px-44">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                   {menuItems}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <img className='  w-16' src={logo} alt="" /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
               {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
                <span className='text-white pe-2 outline-danger '> {user?.displayName && user.displayName} </span>
               {
                   user?.uid ?
                    <Link to='/login'> <button onClick={() => signOut(auth)} className="btn btn-primary bg-primary rounded-full px-5 py-2 rounded-pill fw-bolder" type="submit"> Sign Out </button> </Link>
                    : 
                    <Link to='/login'> <button className="btn btn-primary bg-primary rounded-full px-5 py-2 rounded-pill fw-bolder" type="submit">Log In</button> </Link>
               }
              
               <div className="navbar-start">
               <label for="my-drawer-2" tabindex="1"  className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
               </div>
            
            </div>
            </div>
    );
};

export default Nav;