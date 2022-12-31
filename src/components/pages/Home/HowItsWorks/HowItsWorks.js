import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import jobPlacement from '../../../../assest/HowItsWork/Placeholder-4-100x100.png';
import tuitions from '../../../../assest/HowItsWork/Placeholder-3-1-100x100.png';
import hours from '../../../../assest/HowItsWork/Placeholder-2-1-100x100.png';
import instructos from '../../../../assest/HowItsWork/Placeholder-1-2-100x100.png';
import Success from './Success';


const HowItsWorks = () => {

    const success = [
        {
            title: "560,616",
            image: jobPlacement,
            texts: 'Job available for verified and top companies'
        },
        {
            title: "648,482",
            image: tuitions,
            texts: 'Total tuition job posted on the platform till date'
        },
        {
            title: "20+ Hours",
            image: hours,
            texts: 'User daily average time spent on the platform'
        },
        {
            title: "7+ Million",
            image: instructos,
            texts: 'Active instructor and students available on the platform'
        }
    ];

    return (
        <div className="w-11/12 mx-auto p-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h2 className="text-2xl text-center md:text-start md:text-3xl font-bold text-gray-800 mb-7">
                    Stats that explain everything <br />
                    about <span className="text-secondary"> #Our success</span>
                </h2>
                <Link className="flex justify-between items-center hover:text-white text-xl bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition rounded text-white px-4 py-2 sm:py-3 mr-2">
                    See how it works
                    <span className="ml-3 mt-1">
                        <BsArrowRight></BsArrowRight>
                    </span>
                </Link>
            </div>
            <div className='text-center py-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
                    {
                        success.map((succed, idx) =>
                            <Success key={idx}
                                succed={succed}
                            ></Success>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HowItsWorks;
