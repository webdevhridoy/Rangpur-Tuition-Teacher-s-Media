import React, { useState } from 'react';
import instructorImage from '../../../assest/instructos/instructors_image.png';
import { AiFillStar } from 'react-icons/ai';
import {
    BsCheckCircleFill,
    BsCheckCircle,
    BsFillBookmarkCheckFill,
    BsEnvelope,
    BsFillTelephoneForwardFill,
    BsWhatsapp
} from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaUniversity, FaRegCalendarAlt } from "react-icons/fa";
import rightBanner from '../../../assest/instructos/right-side-banner.png';


const InstructorsDetails = () => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className='bg-neutral'>
            <div className="flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto p-5 md:p-10">
                <div className="w-full md:w-4/5">
                    <div className='mb-5 bg-white'>
                        <div className="border px-3 rounded-t">
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
                        <div className="border px-3 py-2 rounded-b">
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
                    <div className='bg-white'>
                        <div className="border px-3 rounded">
                            <div className="flex flex-col md:flex-row justify-between items-start p-3">
                                <div>
                                    <ul
                                        className="flex mb-0 list-none pt-3 pb-4 items-center"
                                        role="tablist"
                                    >
                                        <li>
                                            <Link
                                                className={
                                                    "text-xs font-bold uppercase px-2 md:px-5 py-3 rounded block leading-normal " +
                                                    (openTab === 1
                                                        ? "text-white bg-secondary mr-2 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                        : "bg-primary text-white mr-2 hover:bg-gradient-to-r hover:from-secondary hover:to-primary")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"
                                                role="tablist"
                                            >
                                                Introduction
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={
                                                    "text-xs font-bold uppercase px-2 md:px-5 py-3 rounded block leading-normal " +
                                                    (openTab === 2
                                                        ? "text-white bg-secondary gradient-to-r hover:from-primary hover:to-secondary"
                                                        : "bg-primary text-white hover:bg-gradient-to-r hover:from-secondary hover:to-primary")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(2);
                                                }}
                                                data-toggle="tab"
                                                href="#link2"
                                                role="tablist"
                                            >
                                                Tutor Reviews
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
                                        <div className='text-start'>
                                            <div className="overflow-x-auto">
                                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                    {/* brief intoduction section */}
                                                    <div className='pb-5'>
                                                        <h2 className='text-xl font-bold capitalize'>A brief introduction</h2>
                                                        <p className="text-gray-500 text-base py-2">
                                                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                                        </p>
                                                    </div>
                                                    <hr className="w-full border-dashed text-gray-500 pb-5" />

                                                    {/* Education section */}
                                                    <div>
                                                        <div>
                                                            <h2 className='text-xl font-bold capitalize'>Education</h2>
                                                            <div className='py-3'>
                                                                <h2 className='text-base md:text-lg font-bold pb-1'>MBBS, MD, DM rheumatology</h2>
                                                                <div className='flex flex-col md:flex-row md:items-center justify-start'>
                                                                    <li className='list-none flex items-center mr-10 text-gray-500'>
                                                                        <span className='mr-2'><FaUniversity></FaUniversity></span>
                                                                        University of Florida
                                                                    </li>
                                                                    <li className='list-none flex items-center mr-10 text-gray-500'>
                                                                        <span className='mr-2'><FiMapPin></FiMapPin></span>
                                                                        San Francisco, TN
                                                                    </li>
                                                                    <li className='list-none flex items-center mr-10 text-gray-500'>
                                                                        <span className='mr-2'><FaRegCalendarAlt></FaRegCalendarAlt></span>
                                                                        June 2018 - Present
                                                                    </li>
                                                                </div>
                                                                <p className="text-gray-500 text-base pt-5">
                                                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                                                </p>
                                                            </div>
                                                            <hr className="w-full border-dashed text-gray-500 my-2" />
                                                            <div className='py-3'>
                                                                <h2 className='text-base md:text-lg font-bold pb-1'>MBBS, MD pathology</h2>
                                                                <div className='flex flex-col md:flex-row md:items-center justify-start'>
                                                                    <li className='list-none flex items-center mr-10 text-gray-500'>
                                                                        <span className='mr-2'><FaUniversity></FaUniversity></span>
                                                                        Auburn University
                                                                    </li>
                                                                    <li className='list-none flex items-center mr-10 text-gray-500'>
                                                                        <span className='mr-2'><FiMapPin></FiMapPin></span>
                                                                        Atlanta, CO
                                                                    </li>
                                                                    <li className='list-none flex items-center mr-10 text-gray-500'>
                                                                        <span className='mr-2'><FaRegCalendarAlt></FaRegCalendarAlt></span>
                                                                        June 2011 - Dec 2013
                                                                    </li>
                                                                </div>
                                                                <p className="text-gray-500 text-base pt-5">
                                                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                    <h2 className='text-xl font-bold capitalize'>Reviews - (15)</h2>
                                                    <div className='pb-2'>
                                                        <div
                                                            class="flex justify-start items-center pt-5"
                                                        >
                                                            <img
                                                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                                                                class="rounded-full shadow-md w-20"
                                                                alt="woman avatar"
                                                            />
                                                            <div className='pl-5'>
                                                                <p class="font-semibold text-xl text-gray-800">Anna Smith</p>
                                                                <p class="font-normal text-gray-500 mb-0 text-base">Rating - 5.0</p>
                                                            </div>
                                                        </div>
                                                        <div className='py-3'>
                                                            <p class="text-gray-500 font-light">
                                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                                                                molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti
                                                                magnam.
                                                            </p>
                                                            <p class="font-semibold text-gray-500 mt-2">Published 3 weeks ago</p>
                                                        </div>
                                                        <hr />
                                                        <div
                                                            class="flex justify-start items-center pt-5"
                                                        >
                                                            <img
                                                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                                                                class="rounded-full shadow-md w-20"
                                                                alt="woman avatar"
                                                            />
                                                            <div className='pl-5'>
                                                                <p class="font-semibold text-xl text-gray-800">Anna Smith</p>
                                                                <p class="font-normal text-gray-500 mb-0 text-base">Rating - 5.0</p>
                                                            </div>
                                                        </div>
                                                        <div className='py-3'>
                                                            <p class="text-gray-500 font-light">
                                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                                                                molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti
                                                                magnam.
                                                            </p>
                                                            <p class="font-semibold text-gray-500 mt-2">Published 3 weeks ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/5">
                    <div className='border bg-white py-2 rounded text-center px-5 mb-5'>
                        <p className="text-gray-500 text-base italic">
                            If you think your teacher is tough, wait till you get a boss. <br />
                            <small className='italic text-gray-600'>-Bill Gates</small>
                        </p>
                    </div>
                    <div className='border bg-white py-2 rounded text-start px-5 mb-5'>
                        <h2 className='text-lg font-bold capitalize text-primary pb-2'>Profile Overview</h2>
                        <h2 className='text-sm font-semibold capitalize text-gray-600 pb-2'>- Total Tuitions (12)</h2>
                        <h2 className='text-sm font-semibold capitalize text-gray-600 pb-2'>- Year of experience (2) years</h2>
                        <h2 className='text-sm font-semibold capitalize text-gray-600 pb-2'>- Total student (50)</h2>
                        <h2 className='text-sm font-semibold capitalize text-gray-600 pb-2'>- Total Reviews (150)</h2>
                    </div>
                    <div className='border bg-white py-2 rounded text-start px-5 mb-5'>
                        <h2 className='text-lg font-bold capitalize text-primary pb-2'>Contact Details</h2>
                        <div className='flex justify-start items-center pb-2'>
                            <Link className='bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500'>
                                <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
                            </Link>
                            <Link className='bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500'>
                                <BsEnvelope></BsEnvelope>
                            </Link>
                            <Link className='bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500'>
                                <BsWhatsapp></BsWhatsapp>
                            </Link>
                            <Link className='bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500'>
                                <FiMapPin></FiMapPin>
                            </Link>
                        </div>

                    </div>
                    <div className='border bg-white py-2 rounded text-start px-5 mb-5'>
                        <img src={rightBanner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsDetails;