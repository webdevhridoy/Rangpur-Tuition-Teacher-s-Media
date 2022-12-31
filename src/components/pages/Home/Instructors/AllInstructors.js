import React from 'react';
import instructorImage from '../../../../assest/instructos/instructors_image.png';
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
import { BsArrowDown } from 'react-icons/bs';
// import { useForm } from 'react-hook-form';
import { BsArrowRight } from "react-icons/bs";

const AllInstructors = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto p-5 md:p-10">
            <div className="w-full md:w-1/5 block lg:hidden">
                <div className="border px-3">
                    <a
                        href="#search"
                        className="flex justify-between items-center hover:text-white text-xl bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition rounded text-white px-4 py-2 sm:py-3 mr-2"
                    >
                        Search Best Tutors
                        <span className="ml-3 mt-1">
                            <BsArrowDown></BsArrowDown>
                        </span>
                    </a>
                </div>
            </div>
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
                <div id="search" className="border px-3">
                    <div className="py-3 text-left">
                        <h2 className="text-gray-400 font-bold">SEARCH FOR TUTORS:</h2>
                        <p className="text-sm">Find a great tutor in your area.</p>
                        <form>
                            <div className="form-control w-full mt-2">
                                <label htmlFor="firstname" className="text-base font-semibold pb-2">
                                    - Teacher Group
                                </label>
                                <select
                                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example"
                                >
                                    <option selected>Open this select menu</option>
                                    <option defaultValue="Science">Science</option>
                                    <option defaultValue="Commerce">Commerce</option>
                                    <option defaultValue="Humanities">Humanities</option>
                                    <option defaultValue="Medical">Medical</option>
                                </select>
                            </div>
                            <div className="form-control w-full mt-2">
                                <label htmlFor="firstname" className="text-base font-semibold pb-2">
                                    - Gender
                                </label>
                                <select
                                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example"
                                >
                                    <option selected>Open this select menu</option>
                                    <option defaultValue="Male">Male</option>
                                    <option defaultValue="Female">Female</option>
                                </select>
                            </div>
                            <div className="form-control w-full mt-2">
                                <label htmlFor="firstname" className="text-base font-semibold pb-2">
                                    - Day of week
                                </label>
                                <select
                                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example"
                                >
                                    <option selected>Open this select menu</option>
                                    <option defaultValue="1">1</option>
                                    <option defaultValue="2">2</option>
                                    <option defaultValue="3">3</option>
                                    <option defaultValue="4">4</option>
                                    <option defaultValue="5">5</option>
                                </select>
                            </div>
                            <div className="form-control w-full mt-2">
                                <label htmlFor="firstname" className="text-base font-semibold pb-2">
                                    - Select Price Range
                                </label>
                                <select
                                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example"
                                >
                                    <option selected>Open this select menu</option>
                                    <option defaultValue="1500-2000">1500-2000</option>
                                    <option defaultValue="2000-2500">2000-2500</option>
                                    <option defaultValue="2500-3000">2500-3000</option>
                                    <option defaultValue="3000-3500">3000-3500</option>
                                    <option defaultValue="3500-4000">3500-4000</option>
                                    <option defaultValue="4000-4500">4000-4500</option>
                                    <option defaultValue="4500-5000">4500-5000</option>
                                    <option defaultValue="5500">5500+</option>
                                </select>
                            </div>
                            <div className='pt-5'>
                                <Link className='flex justify-between items-centertext-white rounded bg-primary px-4 py-2 sm:py-3 mr-2 text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary'>Apply Filters
                                    <span className='ml-3 mt-1'>
                                        <BsArrowRight></BsArrowRight>
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllInstructors;