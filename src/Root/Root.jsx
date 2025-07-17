import React from 'react';

import {Outlet} from "react-router"
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
           
        </div>
    );
};

export default Root;