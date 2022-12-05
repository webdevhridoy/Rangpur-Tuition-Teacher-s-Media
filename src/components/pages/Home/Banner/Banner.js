import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../../assest/banner.png';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
        }}
    />;
    return (
        <div className='flex md:flex-row flex-col-reverse justify-evenly items-center w-11/12 mx-auto p-5 md:p-10'>
            <div className='text-start md:w-1/2'>
                <h2 className='text-3xl text-center md:text-start md:text-5xl font-bold text-gray-800 mb-7'>A good <span className='text-secondary'>#education</span> is always a base of</h2>
                <p className='text-3xl text-center md:text-start md:text-5xl font-bold bg-primary text-white rounded-md px-2 py-1 md:inline-block '>
                    <Typewriter
                        options={{
                            strings: ['Equitable societies', 'Self confidence', 'A bright future'],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                </p>
                <p className='mt-7 text-gray-500 text-center md:text-start text-lg md:pr-10'>Students can find available online tutors/instructors and unlock any tutor profile to get online tutuion.</p>
                <div className="flex justify-center md:justify-start items-center mb-10 sm:mb-20 mt-7">
                    <Link to='/signup'>
                        <button className="hover:text-white hover:bg-primary lg:text-xl hover:border-white border bg-secondary transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-white px-4 sm:px-8 py-2 sm:py-3 text-sm">Start as student</button>
                    </Link>
                    <Link to='/signup'>
                        <button className="lg:text-xl border-secondary hover:border-primary ml-3 sm:ml-6 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-primary focus:ring-primary rounded border  px-4 sm:px-8 py-2 sm:py-3 text-sm">Join as Instructor</button>
                    </Link>
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='w-full pb-8 md:pb-0' src={banner} alt="" />
            </div>
        </div>
    );
};
export default Banner;