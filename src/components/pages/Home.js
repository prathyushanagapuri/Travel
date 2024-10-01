import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Cards';

function Home(){
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    )
}
export default Home;