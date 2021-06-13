import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import resume from './Resume.pdf';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Tanishq</NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" 
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills" 
                        smooth={true} duration={500} spy={true} exact='true' offset={-78}
                        >Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="experience"
                        smooth={true} duration={500} spy={true} exact='true' offset={-76}
                        >Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true} duration={500} spy={true} exact='true' offset={-74}
                        >Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="certificate"
                        smooth={true} duration={500} spy={true} exact='true' offset={-72}
                        >Certification</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to={resume} target="_blank">Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider> 
        </>
    )
}

export default Navbar
