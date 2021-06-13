import React from 'react';
import {Button} from '../ButtonElements';
import img from '../../images/svg-16.svg';
import certificate from './certificate.pdf';
import coursera from './Coursera.pdf';
import geeksforgeeks from './geeksforgeeks.pdf';
import upgrad from './upgrad.pdf';
import{
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
BtnWrap,
Column2,
ImgWrap,
Img
} from './CertificateElement';

const Certificate = () => 
{
    return (
        <>
          <InfoContainer lightBg={true} id="certificate">
            <InfoWrapper>
                <InfoRow imgStart={false}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>certificate</TopLine>
                            <BtnWrap>
                                <Button 
                                onClick={()=> window.open(geeksforgeeks)}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={false}
                                dark={ false}
                                dark2={false}
                                >Data structure and algorithm (Geeks for Geeks)</Button>
                                </BtnWrap>

                                <BtnWrap>
                                <Button 
                                onClick={()=> window.open(certificate)}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={false}
                                dark={ false}
                                dark2={false}
                                >Fundamental of digital Marketing (Google)</Button></BtnWrap>

                                <BtnWrap>
                                <Button 
                                onClick={()=> window.open(upgrad)}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={false}
                                dark={ false}
                                dark2={false}
                                >Frontend Devlopement (Upgrad)</Button>
                            </BtnWrap>

                            
                            <BtnWrap>
                                <Button 
                                onClick={()=> window.open(coursera)}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={false}
                                dark={ false}
                                dark2={false}
                                >Interactivity with JavaScript (Coursera)</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt='car' />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default Certificate
