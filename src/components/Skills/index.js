import React from 'react';
import Icon1 from '../../images/svg-8.svg';
import Icon2 from '../../images/svg-9.svg';
import Icon3 from '../../images/svg-10.svg';
import Icon4 from '../../images/svg-11.svg';
import Icon5 from '../../images/svg-2.svg';
import Icon6 from '../../images/svg-3.svg';
import Icon7 from '../../images/svg-4.svg';
import Icon8 from '../../images/svg-5.svg';
import Icon9 from '../../images/svg-6.svg';
import Icon10 from '../../images/svg-7.svg';
import{
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
} from './SkillElements';

const Skills = () => {
    return (
        <>
          <ServicesContainer id="skills">
          <ServicesH1>Skills</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1} />
                  <ServicesH2>HTML</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon2} />
                  <ServicesH2>CSS</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon3} />
                  <ServicesH2>Javascript</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon4} />
                  <ServicesH2>React JS</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon5} />
                  <ServicesH2>Adobe Photoshop</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon6} />
                  <ServicesH2>Adobe Illustrator</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon7} />
                  <ServicesH2>Figma</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon8} />
                  <ServicesH2>Adobe XD</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon9} />
                  <ServicesH2>Premiere Pro</ServicesH2>
              </ServicesCard>
              <ServicesCard>
                  <ServicesIcon src={Icon10} />
                  <ServicesH2>Adobe Lightroom</ServicesH2>
              </ServicesCard>
          </ServicesWrapper>  
          </ServicesContainer>  
        </>
    )
}

export default Skills
