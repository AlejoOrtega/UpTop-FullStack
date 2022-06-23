import React from 'react';
import logoBlack from '../resources/images/logo-black.png'

const Footer = () => {
    return ( 
    <>
        <div className='footer'>
            <img className='logo-footer' src={logoBlack} alt='Logo black'/>
            <div>
                <p>Home</p>
                <p>Up Top Trading</p>
                <p>Market Snapshot</p>
                <p>Market News</p>
                <p>Free Guide</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div>
                <p>Discord</p>
                <p>Instagram</p>
            </div>
            <div>
                <p>1111 6th ave</p>
                <p>San Diego CA 92101</p>
                <p>Lucky@investcipher.com</p>
                <p>Drew@investcipher.com</p>
                <p>www.Investcipher.com</p>
            </div>
        </div>
    </> 
    );
}
 
export default Footer;