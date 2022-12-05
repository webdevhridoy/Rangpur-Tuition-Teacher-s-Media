import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../../src/assest/error.png';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center h-screen text-rose-600' >
            <div>
                <img src={errorImg} alt="" />
                <p className='text-3xl font-bold pb-10'> {error.statusText || error.message} </p>
                <Link to='/' className='text-1xl font-semibold bg-secondary text-white px-10 py-3 rounded-sm'>Go back to home page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;