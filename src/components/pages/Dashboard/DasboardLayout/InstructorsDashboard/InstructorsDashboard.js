import React from 'react';
import { Link } from 'react-router-dom';
import InsUser from '../../../../../assest/instructos/user15.jpg';

const InstructorsDashboard = () => {

    const dashboardItems = <>
        <li>
            <Link className='text-md font-semibold  ' to='/my-dashboard'>My Dashboard</Link>
        </li>
        <li>
            <Link className='text-md font-semibold' to='/about'>Edit Profile</Link>
        </li>
        <li>
            <Link className='text-md font-semibold  ' to='/find-tutors'>Find Tutors</Link>
        </li>
        <li >
            <Link className='text-md font-semibold  ' to='/find-tuitions'>Tuitions</Link>
        </li>
        <li >
            <Link className='text-md font-semibold  ' to='/job-portal'>Job Board</Link>
        </li>
        <li >
            <Link className='text-md font-semibold  ' to='/instructors-dashboard'>Instructors Dashboard</Link>
        </li>
        <li>
            <Link className='text-md font-semibold  ' to='/contact-us'>Conact Us</Link>
        </li>
    </>;

    return (
        <div className="flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto p-5 md:p-10">
            <div className="w-full md:w-1/5 md:sticky h-screen top-20 right-0">
                <div className='bg-repeat relative w-full h-[120px]'
                    style={{ backgroundImage: `url('https://i.ibb.co/x8XcmKq/instructor-profile-bg.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                >
                    <figure className='flex justify-center items-center absolute top-[50%] lg:left-[30%] left-[32%] md:left-[14%] bg-white p-1 rounded-full'>
                        <img className='rounded-full lg:w-24 md:w-20' src={InsUser} alt="" />
                    </figure>
                </div>
                <div className='pt-12 pb-5 border p-2'>
                    <h2 className='text-xl font-bold'>Jenny Wilson</h2>
                    <p className='text-base font-normal'>Instructor</p>
                    <Link className='mt-2 inline-block bg-primary text-white px-10 rounded py-2 hover:bg-gradient-to-r hover:from-secondary hover:to-primary'>Edit Profile</Link>
                </div>
                <div className='p-2 border mt-5 mb-10'>
                    <h2 className='text-start text-xl font-bold text-primary'>DASHBOARD</h2>


                </div>
            </div>
            <div className="w-full md:w-4/5 pt-5 md:pt-0">
                <h2>Hey there</h2>
            </div>
        </div>
    );
};

export default InstructorsDashboard;