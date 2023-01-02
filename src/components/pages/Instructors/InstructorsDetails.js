import React from 'react';
import instructorImage from '../../../assest/instructos/instructors_image.png';
import { AiFillStar } from 'react-icons/ai';
import {
    BsCheckCircleFill,
    BsCheckCircle,
    BsFillBookmarkCheckFill,
} from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const InstructorsDetails = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto p-5 md:p-10">
            <div className="w-full md:w-4/5">
                <div className='pb-5'>
                    <div className="border px-3">
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <img
                                    className="w-full md:w-52 p-2 md:p-5 rounded-md md:rounded-full"
                                    src={instructorImage}
                                    alt=""
                                />
                                <div className="text-left pl-3">
                                    <div className="py-2">
                                        <div>
                                            <h2 className="flex justify-start items-center text-2xl font-bold pr-2">
                                                Ava Nguyen
                                                <span className="mr-1 text-green-500 pt-1 pl-2 text-lg">
                                                    <BsCheckCircle></BsCheckCircle>
                                                </span>
                                            </h2>
                                            <p className="text-gray-500 text-base">
                                                Think Once, Think Twice, Think Technology
                                            </p>
                                        </div>
                                        <div className="text-left md:text-right pt-5 pr-5 relative p-3 rounded-md bg-slate-50 my-3 md:hidden">
                                            <span className="absolute top-0 right-5 text-xl text-secondary">
                                                <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
                                            </span>
                                            <div className="flex justify-between items-center">
                                                <span>Starting from:</span> <br />
                                                <span className="text-xl font-bold text-secondary">
                                                    $33.00/hr
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-evenly md:items-center">
                                        <p className="flex justify-start items-center pr-2 py-1 md:py-0">
                                            <span className="mr-1 text-yellow-500">
                                                <AiFillStar></AiFillStar>
                                            </span>
                                            <strong>5.0</strong>/5.0
                                        </p>
                                        <p className="flex justify-start items-center pr-2 py-1 md:py-0">
                                            <span className="mr-1 text-green-500">
                                                <BsCheckCircleFill></BsCheckCircleFill>
                                            </span>
                                            Trusted Member Since 2018
                                        </p>
                                        <p className="flex justify-start items-center pr-2 py-1 md:py-0">
                                            <span className="mr-1 text-green-500">
                                                <FiMapPin></FiMapPin>
                                            </span>
                                            Charlotte, OK
                                        </p>
                                    </div>
                                    <div className="py-3">
                                        <h2 className="text-gray-400 font-bold">
                                            Subjects I have interest
                                        </h2>
                                        <p>Biology, Chemistry, Physics, Mathmatics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left md:text-right pt-10 pr-5 relative hidden md:block">
                                <span className="absolute top-0 right-5 text-xl text-secondary">
                                    <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
                                </span>
                                <span>Starting from:</span> <br />
                                <span className="text-2xl font-bold text-secondary">
                                    $33.00/hr
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border-[1.5px] border-dashed text-gray-500" />
                    <div className="border px-3 py-2">
                        <div className="px-3 flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <p className="flex justify-start items-center">
                                    <span className="pt-1 text-gray-500 pr-1">
                                        <TfiWorld></TfiWorld>
                                    </span>
                                    https://tinyurl.com/2kgxfzfq
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center py-5">
                                <div className="pr-5 pb-5 md:pb-0">
                                    <Link className="flex items-center hover:scale-110 duration-500 ease-in-out">
                                        <span className="mr-1">
                                            <AiOutlineHeart></AiOutlineHeart>
                                        </span>
                                        <span className="-mt-1 text-xl">Save</span>
                                    </Link>
                                </div>
                                <div className="pr-2">
                                    <Link className="hover:text-white md:px-2 px-10 md:py-2 py-3 border border-secondary text-gray-800 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2">
                                        Let's talk now
                                    </Link>
                                </div>
                                <div className="pr-2 pt-8 md:pt-0">
                                    <Link className="text-white md:px-2 px-10 md:py-2 py-3 bg-primary border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2">
                                        Book a tution
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className="border px-3">
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <img
                                    className="w-full md:w-52 p-2 md:p-5 rounded-md md:rounded-full"
                                    src={instructorImage}
                                    alt=""
                                />
                                <div className="text-left pl-3">
                                    <div className="py-2">
                                        <div>
                                            <h2 className="flex justify-start items-center text-2xl font-bold pr-2">
                                                Ava Nguyen
                                                <span className="mr-1 text-green-500 pt-1 pl-2 text-lg">
                                                    <BsCheckCircle></BsCheckCircle>
                                                </span>
                                            </h2>
                                            <p className="text-gray-500 text-base">
                                                Think Once, Think Twice, Think Technology
                                            </p>
                                        </div>
                                        <div className="text-left md:text-right pt-5 pr-5 relative p-3 rounded-md bg-slate-50 my-3 md:hidden">
                                            <span className="absolute top-0 right-5 text-xl text-secondary">
                                                <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
                                            </span>
                                            <div className="flex justify-between items-center">
                                                <span>Starting from:</span> <br />
                                                <span className="text-xl font-bold text-secondary">
                                                    $33.00/hr
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-evenly md:items-center">
                                        <p className="flex justify-start items-center pr-2 py-1 md:py-0">
                                            <span className="mr-1 text-yellow-500">
                                                <AiFillStar></AiFillStar>
                                            </span>
                                            <strong>5.0</strong>/5.0
                                        </p>
                                        <p className="flex justify-start items-center pr-2 py-1 md:py-0">
                                            <span className="mr-1 text-green-500">
                                                <BsCheckCircleFill></BsCheckCircleFill>
                                            </span>
                                            Trusted Member Since 2018
                                        </p>
                                        <p className="flex justify-start items-center pr-2 py-1 md:py-0">
                                            <span className="mr-1 text-green-500">
                                                <FiMapPin></FiMapPin>
                                            </span>
                                            Charlotte, OK
                                        </p>
                                    </div>
                                    <div className="py-3">
                                        <h2 className="text-gray-400 font-bold">
                                            Subjects I have interest
                                        </h2>
                                        <p>Biology, Chemistry, Physics, Mathmatics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left md:text-right pt-10 pr-5 relative hidden md:block">
                                <span className="absolute top-0 right-5 text-xl text-secondary">
                                    <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
                                </span>
                                <span>Starting from:</span> <br />
                                <span className="text-2xl font-bold text-secondary">
                                    $33.00/hr
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border-[1.5px] border-dashed text-gray-500" />
                    <div className="border px-3 py-2">
                        <div className="px-3 flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <p className="flex justify-start items-center">
                                    <span className="pt-1 text-gray-500 pr-1">
                                        <TfiWorld></TfiWorld>
                                    </span>
                                    https://tinyurl.com/2kgxfzfq
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center py-5">
                                <div className="pr-5 pb-5 md:pb-0">
                                    <Link className="flex items-center hover:scale-110 duration-500 ease-in-out">
                                        <span className="mr-1">
                                            <AiOutlineHeart></AiOutlineHeart>
                                        </span>
                                        <span className="-mt-1 text-xl">Save</span>
                                    </Link>
                                </div>
                                <div className="pr-2">
                                    <Link className="hover:text-white md:px-2 px-10 md:py-2 py-3 border border-secondary text-gray-800 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2">
                                        Let's talk now
                                    </Link>
                                </div>
                                <div className="pr-2 pt-8 md:pt-0">
                                    <Link className="text-white md:px-2 px-10 md:py-2 py-3 bg-primary border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2">
                                        Book a tution
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/5 sticky h-screen top-0 right-0">

            </div>
        </div>
    );
};

export default InstructorsDetails;