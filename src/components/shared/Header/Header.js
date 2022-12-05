import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo.png';

const Header = () => {

    const menuItems = <>
        <li className='duration-700 hover:bg-primary'>
            <Link className='text-md font-semibold  hover:text-white' to='/'>Home</Link>
        </li>
        <li className='duration-700 hover:bg-primary'>
            <Link className='text-md font-semibold  hover:text-white' to='/'>About Us</Link>
        </li>
        <li className='duration-700 hover:bg-primary'>
            <Link className='text-md font-semibold  hover:text-white' to='/'>Find Tutors</Link>
        </li>
        <li className='duration-700 hover:bg-primary'>
            <Link className='text-md font-semibold  hover:text-white' to='/'>Tuitions</Link>
        </li>
        <li className='duration-700 hover:bg-primary'>
            <Link className='text-md font-semibold  hover:text-white' to='/'>Conact Us</Link>
        </li>
    </>;
    return (
        <div className="navbar bg-base-100 md:w-11/12 md:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-64 md:w-72' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn md:btn-md btn-sm bg-primary">Get started</Link>
            </div>
        </div>
    );
};

export default Header;