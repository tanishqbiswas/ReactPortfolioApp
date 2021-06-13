import styled from 'styled-components';
import {Link} from  'react-router-dom';

export const FooterContainer=styled.footer `
background-color: #101522;
`; 

export const FooterWrap=styled.div `
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`;

export const SocialMedia=styled.section `
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap=styled.div `
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

export const SocialLogo=styled(Link) `
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`;

export const WebsiteRights=styled.small `
color: #fff;
margin-bottom: 16px;
`;

export const SocialIcons=styled.div `
display: flex;
justify-content: space-between;
align-items: center;
width: 220px;
`;

export const SocialIconLink=styled.a `
color: #fff;
font-size: 24px;
`;

export const Column1=styled.div `
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2=styled.div `
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

`;

export const Column3=styled.div `
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const Follow=styled.small `
color: #fff;
display: flex;
margin-bottom: 16px;
`;

export const Contact=styled.small `
color: #fff;
display: flex;
margin-bottom: 16px;
margin-left: 16px;

@media screen and (max-width: 768px){
    margin-left: 20px;
    padding-right: 50px;
}

`;

export const ContactLogo=styled.small `
color: #fff;
display: flex;


`;


