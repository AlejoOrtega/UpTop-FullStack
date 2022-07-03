import React from 'react';
import styled from 'styled-components';
import logoBlack from '../resources/images/logo-black.png'

const Footer = () => {
    return ( 
        <Body>
            <LogoFooter src={logoBlack} alt='Logo black'/>
            <Information>
                <p>Home</p>
                <p>Up Top Trading</p>
                <p>Market Snapshot</p>
                <p>Market News</p>
                <p>Free Guide</p>
                <p>About</p>
                <p>Contact</p>
            </Information>
            <Information>
                <p>Discord</p>
                <p>Instagram</p>
            </Information>
            <Information>
                <p>1111 6th ave</p>
                <p>San Diego CA 92101</p>
                <p>Lucky@investcipher.com</p>
                <p>Drew@investcipher.com</p>
                <p>www.Investcipher.com</p>
            </Information>
        </Body>
    );
}
 
export default Footer;

const Body = styled.div`
    display: flex;
    background-color: #181818;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

const LogoFooter = styled.img`
    width: 150px;
    height: 150px;
    filter: brightness(0) invert(1);
    margin: 30px;
`
const Information = styled.div`
     color: white;
     margin: 30px 60px;
     > * {
        margin-bottom: 5px;
     }
`