import React from 'react';
import Banar from './Banar';
import About from './About';
import Slider from './Slider';
import Project from './Project';

const Home = () => {
    return (
        <div>
           <Banar />
           <About />
           <Project />
           <Slider />
        </div>
    );
};

export default Home;