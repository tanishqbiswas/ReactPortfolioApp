import React from 'react';
import {Button} from '../ButtonElements';
import Icon1 from '../../images/svg-13.svg';
import Icon2 from '../../images/svg-14.svg';
import Icon3 from '../../images/svg-15.svg';
import{
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    BtnWrap,
    BtnWrapper
} from './ServicesElements';

const Projects = () => {
    return (
        <>
          <ServicesContainer id="services">
          <ServicesH1>My Projects</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2>Portfolio App</ServicesH2>
                  <ServicesP>Web Portfolio devloped using React JS.</ServicesP>
                  <BtnWrapper>
                  <BtnWrap><Button 
                  onClick={()=> window.open("https://github.com/tanishqbiswas/ReactPortfolioApp")}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >code</Button>
                  </BtnWrap>
                  <BtnWrap>
                 <Button 
                 onClick={()=> window.open("https://tanishqbiswas.github.io/ReactPortfolioApp")}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >view</Button>
                 </BtnWrap>               
                 </BtnWrapper>    
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2>Weather App</ServicesH2>
                  <ServicesP>Fetched the real time data and tells the tempreature of location, devloped in React JS.</ServicesP>
                  <BtnWrapper>
                  <BtnWrap><Button 
                  onClick={()=> window.open("https://github.com/tanishqbiswas/ReactWeatherApp")}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >code</Button>
                  </BtnWrap>
                  <BtnWrap>
                 <Button
                 onClick={()=> window.open("https://tanishqbiswas.github.io/ReactWeatherApp/")}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >view</Button>
                 </BtnWrap>               
                 </BtnWrapper>  
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3} />
                  <ServicesH2>Recipe Finder</ServicesH2>
                  <ServicesP>Tells the recipe of any cuisine, developed in React JS.</ServicesP>
                  <BtnWrapper>
                  <BtnWrap><Button
                  onClick={()=> window.open("https://github.com/tanishqbiswas/recipeApp")}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >code</Button>
                  </BtnWrap>
                  <BtnWrap>
                 <Button
                 onClick={()=> window.open("https://tanishqbiswas.github.io/recipeApp/")}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                >view</Button>
                 </BtnWrap>               
                 </BtnWrapper>  
              </ServicesCard>
          </ServicesWrapper>  
          </ServicesContainer>  
        </>
    )
}

export default Projects
