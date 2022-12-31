import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='shadow-sm'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <div className='bg-primary'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;