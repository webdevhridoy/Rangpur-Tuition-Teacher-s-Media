import React from 'react';

const Success = ({ succed }) => {
    const { title, image, texts } = succed;
    // console.log(succed);
    return (
        <div className='flex flex-col justify-center items-center bg-neutral p-10 border shadow hover:shadow-lg duration-500'>
            <div className='bg-white p-5 rounded-full'>
                <img className='w-12' src={image} alt="" />
            </div>
            <div className='py-3'>
                <h2 className='text-xl text-gray-900 font-bold'>{title}</h2>
                <p className='text-gray-500 text-center text-sm'>{texts}</p>
            </div>
        </div>
    );
};

export default Success;