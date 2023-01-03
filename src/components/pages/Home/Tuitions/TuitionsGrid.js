import React from 'react';
import teacherImage from '../../../../assest/Teachers/5-100x100.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
    BsArrowRight,
    BsClockHistory,
    BsCircle,
    BsCalendar2Fill,
} from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { MdEventAvailable } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { GiTakeMyMoney } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import divider from '../../../../assest/Tuitions/zigzag-line (1).svg';

const TuitionsGrid = () => {
    return (
        <div className="w-11/12 mx-auto p-5">
            <div>
                <h2 className="text-xl text-gray-500">Our Featured Tuitions</h2>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    Tuition jobs in your city
                </h2>
                <p className="text-gray-500 text-center text-lg md:px-40">
                    Accusamus et iusidio dignissimos ducimus blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores etmquasa molestias
                    epturi sint occaecati cupiditate non providente mikume.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center md:gap-8 gap-2'>
                <div className="py-5 border hover:shadow-lg duration-700 px-2 md:px-14 mt-5">
                    <h2 className="text-center text-2xl font-bold uppercase">
                        Need Male tutor for class-9
                    </h2>
                    <div className="flex justify-center items-center py-3">
                        <img src={divider} alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center pt-2 pl-3 py-2">
                            <img
                                className="rounded-full w-12 h-auto"
                                src={teacherImage}
                                alt=""
                            />
                            <span className="pl-2 text-start">
                                <h2>Antony Clara</h2>
                                <p>Charlotte, OK</p>
                            </span>
                        </div>
                        <div className="md:pl-20 flex flex-col md:flex-row justify-start items-center">
                            <p className="pr-1 flex items-center">
                                <span className="pr-1">
                                    <BsCalendar2Fill></BsCalendar2Fill>
                                </span>
                                Dec 29, 2022
                            </p>
                            <p className="pl-1 flex items-center">
                                <span className="pr-1">
                                    <BsClockHistory></BsClockHistory>
                                </span>
                                09:33 PM
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <div className="text-start">
                                <div className="flex items-center font-bold text-base py-1">
                                    <span className="mt-1 mr-2">
                                        <MdEventAvailable></MdEventAvailable>
                                    </span>
                                    <span className="">
                                        Availability:{' '}
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            MON
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            TUE
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            WED
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            THU
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            SAT
                                        </span>
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 justify-start items-center">
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <HiUserGroup></HiUserGroup>
                                            </span>
                                            <span>Group: Science</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsCircle></BsCircle>
                                            </span>
                                            <span>Medium: English</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <ImBooks></ImBooks>
                                            </span>
                                            <span>Subject: All</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <GiTakeMyMoney></GiTakeMyMoney>
                                            </span>
                                            <span>Salary: 2500 BDT</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsClockHistory></BsClockHistory>
                                            </span>
                                            <span>Duration: 2500 BDT</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <FiMapPin></FiMapPin>
                                            </span>
                                            <span>Location: Mirpur-13</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center pt-2 px-3 py-2'>
                            <Link className='flex items-center hover:scale-110 duration-500 ease-in-out'>
                                <span className='mr-1'>
                                    <AiOutlineHeart></AiOutlineHeart>
                                </span>
                                <span className='-mt-1 text-xl'>Save</span>
                            </Link>
                            <Link to='/tuition-details'>
                                <button className='text-white px-10 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-5 border hover:shadow-lg duration-700 px-2 md:px-14 mt-5">
                    <h2 className="text-center text-2xl font-bold uppercase">
                        Need Male tutor for class-9
                    </h2>
                    <div className="flex justify-center items-center py-3">
                        <img src={divider} alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center pt-2 pl-3 py-2">
                            <img
                                className="rounded-full w-12 h-auto"
                                src={teacherImage}
                                alt=""
                            />
                            <span className="pl-2 text-start">
                                <h2>Antony Clara</h2>
                                <p>Charlotte, OK</p>
                            </span>
                        </div>
                        <div className="md:pl-20 flex flex-col md:flex-row justify-start items-center">
                            <p className="pr-1 flex items-center">
                                <span className="pr-1">
                                    <BsCalendar2Fill></BsCalendar2Fill>
                                </span>
                                Dec 29, 2022
                            </p>
                            <p className="pl-1 flex items-center">
                                <span className="pr-1">
                                    <BsClockHistory></BsClockHistory>
                                </span>
                                09:33 PM
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <div className="text-start">
                                <div className="flex items-center font-bold text-base py-1">
                                    <span className="mt-1 mr-2">
                                        <MdEventAvailable></MdEventAvailable>
                                    </span>
                                    <span className="">
                                        Availability:{' '}
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            MON
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            TUE
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            WED
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            THU
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            SAT
                                        </span>

                                    </span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 justify-start items-center">
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <HiUserGroup></HiUserGroup>
                                            </span>
                                            <span>Group: Science</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsCircle></BsCircle>
                                            </span>
                                            <span>Medium: English</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <ImBooks></ImBooks>
                                            </span>
                                            <span>Subject: All</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <GiTakeMyMoney></GiTakeMyMoney>
                                            </span>
                                            <span>Salary: 2500 BDT</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsClockHistory></BsClockHistory>
                                            </span>
                                            <span>Duration: 2500 BDT</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <FiMapPin></FiMapPin>
                                            </span>
                                            <span>Location: Mirpur-13</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between items-center pt-2 px-3 py-2'>
                            <Link className='flex items-center hover:scale-110 duration-500 ease-in-out'>
                                <span className='mr-1'>
                                    <AiOutlineHeart></AiOutlineHeart>
                                </span>
                                <span className='-mt-1 text-xl'>Save</span>
                            </Link>
                            <div>
                                <button className='text-white px-10 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 border hover:shadow-lg duration-700 px-2 md:px-14 mt-5">
                    <h2 className="text-center text-2xl font-bold uppercase">
                        Need Male tutor for class-9
                    </h2>
                    <div className="flex justify-center items-center py-3">
                        <img src={divider} alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center pt-2 pl-3 py-2">
                            <img
                                className="rounded-full w-12 h-auto"
                                src={teacherImage}
                                alt=""
                            />
                            <span className="pl-2 text-start">
                                <h2>Antony Clara</h2>
                                <p>Charlotte, OK</p>
                            </span>
                        </div>
                        <div className="md:pl-20 flex flex-col md:flex-row justify-start items-center">
                            <p className="pr-1 flex items-center">
                                <span className="pr-1">
                                    <BsCalendar2Fill></BsCalendar2Fill>
                                </span>
                                Dec 29, 2022
                            </p>
                            <p className="pl-1 flex items-center">
                                <span className="pr-1">
                                    <BsClockHistory></BsClockHistory>
                                </span>
                                09:33 PM
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <div className="text-start">
                                <div className="flex items-center font-bold text-base py-1">
                                    <span className="mt-1 mr-2">
                                        <MdEventAvailable></MdEventAvailable>
                                    </span>
                                    <span className="">
                                        Availability:{' '}
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            MON
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            TUE
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            WED
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            THU
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            SAT
                                        </span>

                                    </span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 justify-start items-center">
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <HiUserGroup></HiUserGroup>
                                            </span>
                                            <span>Group: Science</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsCircle></BsCircle>
                                            </span>
                                            <span>Medium: English</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <ImBooks></ImBooks>
                                            </span>
                                            <span>Subject: All</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <GiTakeMyMoney></GiTakeMyMoney>
                                            </span>
                                            <span>Salary: 2500 BDT</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsClockHistory></BsClockHistory>
                                            </span>
                                            <span>Duration: 2500 BDT</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <FiMapPin></FiMapPin>
                                            </span>
                                            <span>Location: Mirpur-13</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center pt-2 px-3 py-2'>
                            <Link className='flex items-center hover:scale-110 duration-500 ease-in-out'>
                                <span className='mr-1'>
                                    <AiOutlineHeart></AiOutlineHeart>
                                </span>
                                <span className='-mt-1 text-xl'>Save</span>
                            </Link>
                            <div>
                                <button className='text-white px-10 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 border hover:shadow-lg duration-700 px-2 md:px-14 mt-5">
                    <h2 className="text-center text-2xl font-bold uppercase">
                        Need Male tutor for class-9
                    </h2>
                    <div className="flex justify-center items-center py-3">
                        <img src={divider} alt="" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center pt-2 pl-3 py-2">
                            <img
                                className="rounded-full w-12 h-auto"
                                src={teacherImage}
                                alt=""
                            />
                            <span className="pl-2 text-start">
                                <h2>Antony Clara</h2>
                                <p>Charlotte, OK</p>
                            </span>
                        </div>
                        <div className="md:pl-20 flex flex-col md:flex-row justify-start items-center">
                            <p className="pr-1 flex items-center">
                                <span className="pr-1">
                                    <BsCalendar2Fill></BsCalendar2Fill>
                                </span>
                                Dec 29, 2022
                            </p>
                            <p className="pl-1 flex items-center">
                                <span className="pr-1">
                                    <BsClockHistory></BsClockHistory>
                                </span>
                                09:33 PM
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <div className="text-start">
                                <div className="flex items-center font-bold text-base py-1">
                                    <span className="mt-1 mr-2">
                                        <MdEventAvailable></MdEventAvailable>
                                    </span>
                                    <span className="">
                                        Availability:{' '}
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            MON
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            TUE
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            WED
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            THU
                                        </span>
                                        <span className="mr-2 bg-red-50 border px-1 py-1 text-primary rounded">
                                            SAT
                                        </span>

                                    </span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 justify-start items-center">
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <HiUserGroup></HiUserGroup>
                                            </span>
                                            <span>Group: Science</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsCircle></BsCircle>
                                            </span>
                                            <span>Medium: English</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <ImBooks></ImBooks>
                                            </span>
                                            <span>Subject: All</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <GiTakeMyMoney></GiTakeMyMoney>
                                            </span>
                                            <span>Salary: 2500 BDT</span>
                                        </h3>
                                    </div>
                                    <div className="mr-2">
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <BsClockHistory></BsClockHistory>
                                            </span>
                                            <span>Duration: 2500 BDT</span>
                                        </h3>
                                        <h3 className="flex items-center font-bold text-base py-1">
                                            <span className="mt-1 mr-2">
                                                <FiMapPin></FiMapPin>
                                            </span>
                                            <span>Location: Mirpur-13</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center pt-2 px-3 py-2'>
                            <Link className='flex items-center hover:scale-110 duration-500 ease-in-out'>
                                <span className='mr-1'>
                                    <AiOutlineHeart></AiOutlineHeart>
                                </span>
                                <span className='-mt-1 text-xl'>Save</span>
                            </Link>
                            <div>
                                <button className='text-white px-10 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-10 pb-6 w-60 md:w-72 mx-auto'>
                <Link className='flex justify-between items-center hover:text-white text-xl bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition rounded text-white px-4 py-2 sm:py-3 mr-2'>Explore all Tuitions
                    <span className='ml-3 mt-1'>
                        <BsArrowRight></BsArrowRight>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default TuitionsGrid;
