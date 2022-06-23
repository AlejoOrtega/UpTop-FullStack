import React from 'react';
import { Button } from '@mui/material';

const ContactUs = () => {
    return ( <>
    <h1>Contact Us</h1>
    <p>Contact CIPHER INVESTMENTS and let us build a better future for those that mean the most.</p>
    <div style={{display: 'flex'}}>
        <div>
            <h3>Our Info</h3>
            <p>1111 6th ave. San Diego CA 92101</p>
            <p>Lucky@cipherinvestments.com </p>
            <p>Drew@cipherinvestments.com</p>
            <p>www.investcipher.com</p>
        </div>
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <div>
                <input placeholder='First Name'/>
                <input placeholder='Last Name'/>
            </div>
            <input placeholder='Email'/>
            <input placeholder='Phone Number'/>
            <input placeholder='Leave a Message'/>
            <Button>Submit</Button>
        </form>
    </div>
    <div className='landing-phrase'>
        <h2 style={{color: 'white'}}>Never grocery shop on an empty stomach.</h2>
        <p style={{color: 'white'}}>- Victor J. Boschini</p>
    </div>
    </> );
}
 
export default ContactUs;