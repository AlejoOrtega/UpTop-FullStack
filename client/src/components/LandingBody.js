import React from 'react';

import { Button } from '@mui/material';

import stats from '../resources/images/stats.png'
import classGroup from '../resources/images/class-group.png'
import deskGroup from '../resources/images/desk-group.png'
import logoGold from '../resources/images/logo-gold.png'
import { Link } from 'react-router-dom';


const LandingBody = () => {
    return ( 
    <>
    <div className='body'>
            <div>
                <h1>Invest With a Peace of Mind in Knowing You are Not Alone</h1>
                <p>We are private San Diego-based investment firm that is dedicated to helping communities grow their wealth</p>   
            </div>
            <img className='logo-landing' src={logoGold} alt='up-top-logo-landing'/>
            <h1>Our Private Investment Solutions</h1>
            <div className='landing-information'>
                <div>
                    <img src={stats} alt='stats'/>
                    <h3>Wealth management</h3>
                    <p>CIPHER INVESTMENTS has a robust suite of tools designed to grow and manage wealth. We feature both traditional and digital solutions.</p>
                </div>
                <div>
                    <img src={classGroup} alt='group'/>
                    <h3>Network Planning</h3>
                    <p>Our experienced team helps plan for each investment carefully and with ease. We create strategies that keep up with our company's financial needs and goals.</p>
                </div>
                <div>
                    <img src={deskGroup} alt='desk'/>
                    <h3>Community Educators</h3>
                    <p>One of our main goals is to educate, train and equip our society with the right guidance to act on an opportunity when it presents itself.</p>
                </div>
            </div>
            <div className='landing-phrase'>
                <h2 style={{color: 'white'}}>Take calculated risks. That is quite different from being rash.</h2>
                <p style={{color: 'white'}}>-George S. Patton</p>
            </div>
            <div>
                <h1>Contact CIPHER INVESTMENTS and let us work together on your next project as a trusted partner.</h1>
                <Button sx={{color: 'black', backgroundColor: '#BFA558'}}><Link to='contact-us'>Contact Us</Link></Button>
            </div>
            
        </div>
    </>
     );
}
 
export default LandingBody;