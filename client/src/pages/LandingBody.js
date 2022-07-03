import React from 'react';

import { Button } from '@mui/material';
import styled from 'styled-components';
import stats from '../resources/images/stats.png'
import classGroup from '../resources/images/class-group.png'
import deskGroup from '../resources/images/desk-group.png'
import logoGold from '../resources/images/logo-gold.png'
import { Palette } from '../components/utils/colors';
import { useNavigate } from 'react-router-dom';


const LandingBody = () => {
    const navigate = useNavigate()
    return ( 
        <Body>
            <SubBody>
                <Title>Invest With a Peace of Mind in Knowing You are Not Alone</Title>
                <p>We are private San Diego-based investment firm that is dedicated to helping communities grow their wealth</p>   
            </SubBody>
            <BigImage src={logoGold} alt='up-top-logo-landing'/>
            <h1>Our Private Investment Solutions</h1>
            <Information>
                <InfoBlock>
                    <InfoImage src={stats} alt='stats'/>
                    <strong>Wealth management</strong>
                    <p>CIPHER INVESTMENTS has a robust suite of tools designed to grow and manage wealth. We feature both traditional and digital solutions.</p>
                </InfoBlock>
                <InfoBlock>
                    <InfoImage src={classGroup} alt='group'/>
                    <b>Network Planning</b>
                    <p>Our experienced team helps plan for each investment carefully and with ease. We create strategies that keep up with our company's financial needs and goals.</p>
                </InfoBlock>
                <InfoBlock>
                    <InfoImage src={deskGroup} alt='desk'/>
                    <b>Community Educators</b>
                    <p>One of our main goals is to educate, train and equip our society with the right guidance to act on an opportunity when it presents itself.</p>
                </InfoBlock>
            </Information>
            <Phrase>
                <h2 style={{color: 'white'}}>Take calculated risks. That is quite different from being rash.</h2>
                <p style={{color: 'white'}}>-George S. Patton</p>
            </Phrase>
            <SubBody>
                <h1>Contact CIPHER INVESTMENTS and let us work together on your next project as a trusted partner.</h1>
                <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={()=>navigate('contact-us')}>Contact Us</Button>
            </SubBody>
            
        </Body>
     );
}
 
export default LandingBody;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

     > * {
        margin: 30px 0;
    }
    background-color: #F6F3EF;
`;

const SubBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;

    > * {
        margin-bottom: 20px;
    }
`

const Title = styled.div`
    font-size: 50px;
`

const BigImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;  
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    padding: 0 10px;

    text-align: justify;
    text-justify: inter-word;
`

const InfoImage = styled.img`
    width: 325px;
    height: 225px;
    margin-bottom: 10px;
`

const Phrase = styled.div`
    background-color: #181818;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`


