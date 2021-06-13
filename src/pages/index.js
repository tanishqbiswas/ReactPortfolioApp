import React, { useState } from 'react'
import Certificate from '../components/Certificate';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/navbar';
import Projects from '../components/Project';
import Sidebar from '../components/sidebar';
import Skills from '../components/Skills';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Skills />
            <InfoSection {...homeObjTwo} />
            <Projects />
            <Certificate />
            <Footer />
        </>
    )
}

export default Home
