import React from 'react';
import instructor from '../../../../assest/instructos/gallery-10-612x400.jpg';
import './InstructorsGrid.css';
import teacherImage from '../../../../assest/Teachers/5-100x100.png';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

const InstructorsGrid = () => {
    return (
        <div className='w-11/12 mx-auto p-5 md:p-10 bg-neutral'>
            <div>
                <h2 className='text-xl text-gray-500'>Our featured instructors</h2>
                <h2 className='text-3xl md:text-4xl font-bold mt-2 mb-4'>Highly qualified professionals</h2>
                <p className='text-gray-500 text-center text-lg md:px-40'>Accusamus et iusidio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores etmquasa molestias epturi sint occaecati cupiditate non providente mikume.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-evenly items-center py-5 hover14 '>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img src={instructor} alt="" />
                    </figure>
                    <div className='flex justify-start items-center pt-2 pl-3 py-2'>
                        <img className='rounded-full w-12 h-auto' src={teacherImage} alt="" />
                        <span className='pl-2 text-start'>
                            <h2>Antony Clara</h2>
                            <p>Charlotte, OK</p>
                        </span>
                    </div>
                    <div className='pr-2 py-2'>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Expected Salary:</li>
                            <li>5000 BDT</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Qualification:</li>
                            <li>MBBS</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Availability:</li>
                            <li>4-Days</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span className='-mt-1'>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img src={instructor} alt="" />
                    </figure>
                    <div className='flex justify-start items-center pt-2 pl-3 py-2'>
                        <img className='rounded-full w-12 h-auto' src={teacherImage} alt="" />
                        <span className='pl-2 text-start'>
                            <h2>Antony Clara</h2>
                            <p>Charlotte, OK</p>
                        </span>
                    </div>
                    <div className='pr-2 py-2'>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Expected Salary:</li>
                            <li>5000 BDT</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Qualification:</li>
                            <li>MBBS</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Availability:</li>
                            <li>4-Days</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span className='-mt-1'>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img src={instructor} alt="" />
                    </figure>
                    <div className='flex justify-start items-center pt-2 pl-3 py-2'>
                        <img className='rounded-full w-12 h-auto' src={teacherImage} alt="" />
                        <span className='pl-2 text-start'>
                            <h2>Antony Clara</h2>
                            <p>Charlotte, OK</p>
                        </span>
                    </div>
                    <div className='pr-2 py-2'>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Expected Salary:</li>
                            <li>5000 BDT</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Qualification:</li>
                            <li>MBBS</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Availability:</li>
                            <li>4-Days</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span className='-mt-1'>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className='border hover:shadow-lg duration-700'>
                    <figure>
                        <img src={instructor} alt="" />
                    </figure>
                    <div className='flex justify-start items-center pt-2 pl-3 py-2'>
                        <img className='rounded-full w-12 h-auto' src={teacherImage} alt="" />
                        <span className='pl-2 text-start'>
                            <h2>Antony Clara</h2>
                            <p>Charlotte, OK</p>
                        </span>
                    </div>
                    <div className='pr-2 py-2'>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Expected Salary:</li>
                            <li>5000 BDT</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Qualification:</li>
                            <li>MBBS</li>
                        </ul>
                        <ul className='flex justify-between items-center pt-2 pl-3 py-2'>
                            <li>Availability:</li>
                            <li>4-Days</li>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center pt-2 px-3 py-2'>
                        <Link className='flex items-center'>
                            <span className='mr-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                            </span>
                            <span className='-mt-1'>Save</span>
                        </Link>
                        <div>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            <button className='text-white px-2 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6 w-72 mx-auto'>
                <Link className='flex justify-between items-center hover:text-white text-xl bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition rounded text-white px-4 py-2 sm:py-3 mr-2'>Explore all instructors
                    <span className='ml-3 mt-1'>
                        <BsArrowRight></BsArrowRight>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default InstructorsGrid;;