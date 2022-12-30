import React from 'react';
import Banner from './Banner/Banner';
import InstructorsGrid from './Instructors/InstructorsGrid';
import TuitionsGrid from './Tuitions/TuitionsGrid';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InstructorsGrid></InstructorsGrid>
            <TuitionsGrid></TuitionsGrid>
        </div>
    );
};

export default Home;