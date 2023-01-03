import React from 'react';
import {
    BsEnvelope,
    BsFillTelephoneForwardFill,
    BsWhatsapp,
    BsClockHistory,
    BsCircle,
    BsCalendar2Fill,
    BsGenderAmbiguous,
} from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import rightBanner from '../../../../assest/instructos/right-side-banner.png';
import divider from '../../../../assest/Tuitions/zigzag-line (1).svg';
import teacherImage from '../../../../assest/Tuitions/tuition.png';

import { MdEventAvailable } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { GiTakeMyMoney } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';

const TuitionsDetails = () => {
    return (
        <div className="bg-neutral">
            <div className="flex flex-col md:flex-row justify-between gap-5 w-11/12 mx-auto p-5 md:p-10">
                <div className="w-full md:w-4/5">
                    <div className="py-5 border hover:shadow-lg duration-700 px-2 md:px-14 mt-5 bg-white mb-5 rounded">
                        <h2 className="text-center text-2xl font-bold uppercase">
                            Need Male tutor for class-9
                        </h2>
                        <div className="flex justify-center items-center py-3">
                            <img src={divider} alt="" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col md:flex-row justify-start items-start md:items-center pt-2 py-2">
                                <img
                                    className="rounded-full bg-secondary w-16 h-16 object-cover"
                                    src={teacherImage}
                                    alt=""
                                />
                                <span className="pl-2 text-start">
                                    <h2 className="flex justify-start items-start text-lg font-bold">
                                        Antony Clara
                                    </h2>
                                    <p>Kamar Para, Rangpur</p>
                                </span>
                            </div>
                            <div className="md:pl-20 flex flex-col md:flex-row justify-start items-start">
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
                            <div className="pt-5">
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
                                                <span className="text-base font-semibold">
                                                    Group: Science
                                                </span>
                                            </h3>
                                            <h3 className="flex items-center font-bold text-base py-1">
                                                <span className="mt-1 mr-2">
                                                    <BsCircle></BsCircle>
                                                </span>
                                                <span className="text-base font-semibold">
                                                    Medium: English
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="mr-2">
                                            <h3 className="flex items-center font-bold text-base py-1">
                                                <span className="mt-1 mr-2">
                                                    <ImBooks></ImBooks>
                                                </span>
                                                <span className="text-base font-semibold">
                                                    Subject: All
                                                </span>
                                            </h3>
                                            <h3 className="flex items-center font-bold text-base py-1">
                                                <span className="mt-1 mr-2">
                                                    <GiTakeMyMoney></GiTakeMyMoney>
                                                </span>
                                                <span className="text-base font-semibold">
                                                    Salary: 2500/-
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="mr-2">
                                            <h3 className="flex items-center font-bold text-base py-1">
                                                <span className="mt-1 mr-2">
                                                    <BsClockHistory></BsClockHistory>
                                                </span>
                                                <span className="text-base font-semibold">
                                                    Duration: 2h
                                                </span>
                                            </h3>
                                            <h3 className="flex items-center font-bold text-base py-1">
                                                <span className="mt-1 mr-2">
                                                    <FiMapPin></FiMapPin>
                                                </span>
                                                <span className="text-base font-semibold">
                                                    Location: Kamarpara
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="mr-2">
                                            <h3 className="flex items-center font-bold text-base py-1">
                                                <span className="mt-1 mr-2">
                                                    <BsGenderAmbiguous></BsGenderAmbiguous>
                                                </span>
                                                <span className="text-base font-semibold">
                                                    Gender: Female
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="w-full my-5 border-[1.5px] border-dashed text-gray-500" />
                            <div className="flex justify-between items-center py-2">
                                <Link className="flex items-center hover:scale-110 duration-500 ease-in-out">
                                    <span className="mr-1">
                                        <AiOutlineHeart></AiOutlineHeart>
                                    </span>
                                    <span className="-mt-1 text-xl">Save</span>
                                </Link>
                                <Link to="/tuition-details">
                                    <button className="text-white px-10 py-2 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded mr-2">
                                        Apply Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="border px-3 rounded">
                            <div className="p-5 text-start">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
                                    <div className="pb-5">
                                        <h2 className="text-xl font-bold capitalize">
                                            A brief introduction
                                        </h2>
                                        <p className="text-gray-500 text-base py-2">
                                            On the other hand, we denounce with righteous indignation
                                            and dislike men who are so beguiled and demoralized by the
                                            charms of pleasure of the moment, so blinded by desire,
                                            that they cannot foresee the pain and trouble that are
                                            bound to ensue; and equal blame belongs to those who fail
                                            in their duty through weakness of will, which is the same
                                            as saying through shrinking from toil and pain. These
                                            cases are perfectly simple and easy to distinguish.
                                        </p>
                                    </div>
                                    <hr className="w-full border-dashed text-gray-500 pb-5" />

                                    {/* Education section */}
                                    <div>
                                        <div>
                                            <h2 className="text-xl font-bold capitalize">
                                                To get his tuition fill up the form
                                            </h2>
                                            <div className="py-3">
                                                <div className="rounded">
                                                    <form>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="form-group mb-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                                                    id="exampleInput123"
                                                                    aria-describedby="emailHelp123"
                                                                    placeholder="First name"
                                                                />
                                                            </div>
                                                            <div className="form-group mb-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                                                    id="exampleInput124"
                                                                    aria-describedby="emailHelp124"
                                                                    placeholder="Last name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-6">
                                                            <input
                                                                type="email"
                                                                className="form-control block  w-full px-3 py-1.5 text-base  font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                                                id="exampleInput125"
                                                                placeholder="Email address"
                                                            />
                                                        </div>
                                                        <div className="form-group mb-6">
                                                            <input
                                                                type="text"
                                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                                                id="exampleInput126"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                        <div className="form-group mb-6">
                                                            <textarea
                                                                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none'
                                                                placeholder="Your Comments"
                                                            ></textarea>
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="px-10 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-primary focus:shadow-lgfocus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                        >
                                                            Submit
                                                        </button>
                                                    </form>
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
                    <div className="border bg-white py-2 rounded text-center px-5 mb-5">
                        <p className="text-gray-500 text-base italic">
                            If you think your teacher is tough, wait till you get a boss.{' '}
                            <br />
                            <small className="italic text-gray-600">-Bill Gates</small>
                        </p>
                    </div>
                    <div className="border bg-white py-2 rounded text-start px-5 mb-5">
                        <h2 className="text-lg font-bold capitalize text-primary pb-2">
                            Profile Overview
                        </h2>
                        <h2 className="text-sm font-semibold capitalize text-gray-600 pb-2">
                            - Total Tuitions (12)
                        </h2>
                        <h2 className="text-sm font-semibold capitalize text-gray-600 pb-2">
                            - Year of experience (2) years
                        </h2>
                        <h2 className="text-sm font-semibold capitalize text-gray-600 pb-2">
                            - Total student (50)
                        </h2>
                        <h2 className="text-sm font-semibold capitalize text-gray-600 pb-2">
                            - Total Reviews (150)
                        </h2>
                    </div>
                    <div className="border bg-white py-2 rounded text-start px-5 mb-5">
                        <h2 className="text-lg font-bold capitalize text-primary pb-2">
                            Contact Details
                        </h2>
                        <div className="flex justify-start items-center pb-2">
                            <Link className="bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500">
                                <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
                            </Link>
                            <Link className="bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500">
                                <BsEnvelope></BsEnvelope>
                            </Link>
                            <Link className="bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500">
                                <BsWhatsapp></BsWhatsapp>
                            </Link>
                            <Link className="bg-secondary inline-block p-2 rounded-full text-white py-2 mr-2 hover:scale-105 hover:bg-primary duration-500">
                                <FiMapPin></FiMapPin>
                            </Link>
                        </div>
                    </div>
                    <div className="border bg-white py-2 rounded text-start px-5 mb-5">
                        <img src={rightBanner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitionsDetails;
