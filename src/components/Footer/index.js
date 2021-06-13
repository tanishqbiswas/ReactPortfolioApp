import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {
    FaFacebook, 
    FaInstagram, 
    FaDribbble, 
    FaGithub,
    FaTwitter, 
    FaLinkedin,
    FaMobile,
    FaInbox
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    Column1,
    Column2,
    Column3,
    Contact,
    ContactLogo,
    Follow
    
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
          <FooterContainer id="contact">
              <FooterWrap>
              <SocialMedia>
              <SocialMediaWrap>
              <Column1>
                  <SocialLogo to='/' onClick={toggleHome}>Tanishq</SocialLogo>
                  <WebsiteRights>
                      Tanishq © {new Date().getFullYear()}
                       , All rights reserved.
                  </WebsiteRights>
                  </Column1>
                  <Column2>
                  <ContactLogo><FaMobile/><Contact>+91-8463890200</Contact></ContactLogo>
                  <ContactLogo><FaInbox/><Contact>tanishqbiswas@gmail.com</Contact></ContactLogo>  
                  </Column2>
                  <Column3>              
                  <Follow>Follow me</Follow>
                  <SocialIcons>
                      <SocialIconLink href="//www.facebook.com/tanishq.biswas" target="_blank" aria-label="Facebook">
                          <FaFacebook />
                      </SocialIconLink>
                      <SocialIconLink href="//www.instagram.com/tanishqbiswas/" target="_blank" aria-label="Instagram">
                          <FaInstagram />
                      </SocialIconLink>
                      <SocialIconLink href="//github.com/tanishqbiswas" target="_blank" aria-label="dribble">
                          <FaGithub />
                      </SocialIconLink>
                      <SocialIconLink href="//dribbble.com/tanishqbiswas" target="_blank" aria-label="dribble">
                          <FaDribbble />
                      </SocialIconLink>
                      <SocialIconLink href="//twitter.com/tanishqbiswas" target="_blank" aria-label="Twitter">
                          <FaTwitter />
                      </SocialIconLink>
                      <SocialIconLink href="//www.linkedin.com/in/tanishqbiswas" target="_blank" aria-label="LinkedIn">
                          <FaLinkedin />
                      </SocialIconLink>
                  </SocialIcons>
                  </Column3>
              </SocialMediaWrap>
              </SocialMedia>
              </FooterWrap>
          </FooterContainer>  
        </>
    )
}

export default Footer