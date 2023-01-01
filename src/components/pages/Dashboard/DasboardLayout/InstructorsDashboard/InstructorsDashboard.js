import React from 'react';
import { Link } from 'react-router-dom';
import InsUser from '../../../../../assest/instructos/user15.jpg';
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineUserGroup, HiOutlineStar, HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import Features from './Features';


const InstructorsDashboard = () => {

    const features = [
        {
            title: "Visitors",
            numbers: 10,
            text: 'Total views activity'
        },
        {
            title: "New Tuition",
            numbers: 10,
            text: 'Hurrah! Congratulations!'
        },
        {
            title: "Total Reviews",
            numbers: 10,
            text: 'Keep working hard'
        },
        {
            title: "Revenue",
            numbers: 85000,
            text: "You're doing good"
        },
    ];

    const dashboardItems = <>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <BsHouseDoor></BsHouseDoor></span>
            <Link to='/instructors-dashboard'>My Dashboard</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <HiOutlineUserGroup></HiOutlineUserGroup></span>
            <Link to='/dashboard-my-dashboard'>My Tuitons</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <HiOutlineStar></HiOutlineStar></span>
            <Link to='/dashboard-reviews'>Reviews</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <HiOutlineUserAdd></HiOutlineUserAdd></span>
            <Link to='/dashboard-referral'>Referrel</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <AiOutlineLogout></AiOutlineLogout></span>
            <Link to='/dashboard-signout'>Sign Out</Link>
        </li>
    </>;

    return (
        <div className='bg-neutral'>
            <div className="flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto p-5 md:p-10">
                <div className="w-full md:w-1/5 md:sticky h-screen top-20 right-0 rounded-lg ">
                    <div className='bg-repeat relative w-full h-[120px] rounded-t '
                        style={{ backgroundImage: `url('https://i.ibb.co/x8XcmKq/instructor-profile-bg.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    >
                        <figure className='flex justify-center items-center absolute top-[50%] lg:left-[30%] left-[32%] md:left-[14%] bg-white p-1 rounded-full'>
                            <img className='rounded-full lg:w-24 md:w-20' src={InsUser} alt="" />
                        </figure>
                    </div>
                    <div className='pt-12 pb-5 border rounded-b bg-white'>
                        <h2 className='text-xl font-bold'>Jenny Wilson</h2>
                        <p className='text-base font-normal'>Instructor</p>
                        <Link className='mt-2 inline-block bg-primary text-white px-10 rounded py-2 hover:bg-gradient-to-r hover:from-secondary hover:to-primary'>Edit Profile</Link>
                    </div>
                    <div className='p-2 border pt-5 mt-5 rounded bg-white'>
                        <h2 className='text-start text-xl font-bold text-primary'>DASHBOARD</h2>
                        <ul>
                            {dashboardItems}
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-4/5 pt-5 md:pt-0">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            features.map((feature, idx) =>
                                <Features
                                    key={idx}
                                    feature={feature}
                                ></Features>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsDashboard;