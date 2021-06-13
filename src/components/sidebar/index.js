import React from 'react'
import resume from './Resume.pdf';
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SideBarRoute
} from './SideBarElements';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <>
          <SideBarContainer isOpen={isOpen} onClick={toggle}>
              <Icon onClick={toggle}>
                  <CloseIcon />
              </Icon>
              <SidebarWrapper>
                  <SidebarMenu>
                      <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                      <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                      <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                      <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                      <SidebarLink to="services" onClick={toggle}>Project</SidebarLink>
                      <SidebarLink to="certificate" onClick={toggle}>Certification</SidebarLink>
                  </SidebarMenu>
                  <SideBtnWrap>
                      <SideBarRoute onClick={()=> window.open(resume)}>Resume</SideBarRoute>
                  </SideBtnWrap>
              </SidebarWrapper>
          </SideBarContainer>  
        </>
    )
}

export default Sidebar
