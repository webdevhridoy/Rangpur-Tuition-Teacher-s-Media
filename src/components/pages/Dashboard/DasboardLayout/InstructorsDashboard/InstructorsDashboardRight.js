import React from 'react';
import Features from './Features';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const InstructorsDashboardRight = () => {


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
        <>
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
        </>
    );
};

export default InstructorsDashboardRight;