import React from 'react';
import { Link } from 'react-router-dom';
import InsUser from '../../../../../assest/instructos/user15.jpg';
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineUserGroup, HiOutlineStar, HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

import Features from './Features';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


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
            <Link to='/dashboard-my-dashboard'>My Tuitions</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <HiOutlineStar></HiOutlineStar></span>
            <Link to='/dashboard-tutor-reviews'>Tutor Reviews</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <BsBook></BsBook></span>
            <Link to='/dashboard-referral'>My Courses</Link>
        </li>
        <li className='text-lg text-start my-2 py-2 hover:bg-primary hover:opacity-90 hover:text-white hover:border-l-10 hover:ml-2 hover:pl-1 duration-700 ease-in-out hover:rounded flex items-center'>
            <span className='mr-2'> <HiOutlineStar></HiOutlineStar></span>
            <Link to='/dashboard-course-reviews'>Course Reviews</Link>
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

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ];

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
                        <h2 className='text-start text-xl font-bold text-primary uppercase'>Dashboard</h2>
                        <ul>
                            {dashboardItems}
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-4/5 pt-20 md:pt-0">
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
                    <div className='p-5 border pt-5 mt-5 rounded-md bg-white'>
                        <h2 className='text-start text-xl font-bold text-primary pb-5 uppercase'>Earnings</h2>
                        <hr className='pb-5' />
                        <ResponsiveContainer width="100%" aspect={3} className='mx-auto'>
                            <AreaChart width={950} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='p-5 border pt-5 mt-5 rounded-md bg-white'>
                        <h2 className='text-start text-xl font-bold text-primary pb-5 uppercase'>New Tuition</h2>
                        <hr className='pb-5' />
                        <ResponsiveContainer width="100%" aspect={3} className='mx-auto'>
                            <BarChart width={950} height={250} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='p-5 border pt-5 mt-5 rounded-md bg-white'>
                        <h2 className='text-start text-xl font-bold text-primary pb-5 uppercase'>Best Selling Courses</h2>
                        <hr className='pb-5' />
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>COURSES</th>
                                        <th>SALES</th>
                                        <th>AMOUNT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- row 1 --> */}
                                    <tr>
                                        <th>1</th>
                                        <td>Learn Highter Math</td>
                                        <td>20</td>
                                        <td>2500 BDT</td>
                                    </tr>
                                    {/* <!-- row 2 --> */}
                                    <tr className="hover">
                                        <th>2</th>
                                        <td>Learn Core Chemistry</td>
                                        <td>10</td>
                                        <td>3500 BDT</td>
                                    </tr>
                                    {/* <!-- row 3 --> */}
                                    <tr>
                                        <th>3</th>
                                        <td>Learn Core Physics</td>
                                        <td>25</td>
                                        <td>5000 BDT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsDashboard;