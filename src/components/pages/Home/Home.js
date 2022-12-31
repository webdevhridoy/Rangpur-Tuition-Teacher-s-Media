import React from 'react';
import Banner from './Banner/Banner';
import CategoriesGrid from './Categories/CategoriesGrid';
import HowItsWorks from './HowItsWorks/HowItsWorks';
import InstructorsGrid from './Instructors/InstructorsGrid';
import TuitionsGrid from './Tuitions/TuitionsGrid';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='bg-neutral bg-opacity-60'>
                <InstructorsGrid></InstructorsGrid>
            </div>
            <div>
                <TuitionsGrid></TuitionsGrid>
            </div>
            <div className='bg-neutral bg-opacity-60'>
                <CategoriesGrid></CategoriesGrid>
            </div>
            <div>
                <HowItsWorks></HowItsWorks>
            </div>
        </div>
    );
};

export default Home;