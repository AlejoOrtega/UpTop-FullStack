import React from 'react';
import uptop from '../resources/images/uptop.png';
import group from '../resources/images/class-group.png';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { joinPlan } from '../components/utils/fetchs';
import { Button } from '@mui/material';
import {Palette} from '../components/utils/colors'
import { useNavigate } from 'react-router-dom';

const Plan = () => {
    const currentUser = useSelector(state => state.user.value)
    const navigate = useNavigate()

    const onJoinPlan = (typeOfPlan) => {
        joinPlan(typeOfPlan)
    }
    return ( 
        <Body>
            <BigImage src={uptop} alt='uptop'/>
            <InformationSupport>
                <InfoBlock>
                    <InfoImage src={group} alt='education'/>
                    <h4>Education</h4>
                    <p>Education is key to understanding how to trade. We enjoy having the opportunity to provide not only what you find in books but hands on training. Imagine being mentored and trading at the same time! The potential is limitless!</p>
                </InfoBlock>
                <InfoBlock>
                    <InfoImage src={group} alt='community'/>
                    <h4>Community Support</h4>
                    <p>You have probably heard and seen other trading communities offer their support to members but ask yourself.. do they Truly follow through with their statements? UPTOP prides itself with having a close nit community where traders meet each other and share ideas to ultimately be successful in their pursuit of happiness.</p>
                </InfoBlock>
                <InfoBlock>
                    <InfoImage src={group} alt='signals'/>
                    <h4>Signals</h4>
                    <p>Have you ever been at a stop light and just waited for it to turn green? What if we told you that we can offer the same guidance towards trading? Think of it as an easy way to jump in and out of trades! We make sure you understand the lingo and opportunities as they come to your doorstep.</p>
                </InfoBlock>
            </InformationSupport>
            <Line/>
            <Information>
                <FreeTier>
                    <h4>Standard</h4>
                    <h1>Free</h1>
                    <Line/>
                    <p>Perfect for individuals that are interested in trading. This subscription includes:</p>
                    <List>
                        <li>General Chat Access</li>
                        <li>Watchlist Access</li>
                        <li>Live News and Report Access</li>
                        <li>Trading Gains Page</li>
                    </List>
                    { currentUser? <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={() =>onJoinPlan('Free')}>Join Today!</Button> : <h3>Login to join</h3> }
                </FreeTier>

                <PremiumTier>
                    
                    <h4>Premium</h4>
                    <h1>$35</h1>
                    <Line/>
                    
                    <p>Perfect for Traders that want to take their experience to the next level and the full support of the trading community. This subscription includes:</p>
                    <List>
                        <li style={{color: 'green'}}>Free benefits</li>
                        <li>Access to Trading Signals 24/7</li>
                        <li>Access to Training Content</li>
                        <li>Community Zoom Calls</li>
                        <li>Live Trading Sessions during Market Hours</li>
                        <li>Access to a One-on- One Trading Coach</li>
                        <li>Monthly Giveaways</li>
                        <li>Access to Local Community Events hosted by UP TOP TRADING COMMUNITY</li>
                    </List>
                    {currentUser? <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={()=> onJoinPlan('Premium')}>Join Today!</Button> : <h3>Login to join</h3> }
                </PremiumTier>
                
                <EliteTier>
                    
                    <h4>Elite</h4>
                    <h1>Please Contact Us</h1>
                    <Line/>
                    <p>This program is on a case by case basis and is completely designed for you.  Not all traders learn the same and we acknowledge that by tailoring our program around your personality, goals and weekly trading hours. An intuitive approach in helping you learn effectively and efficiently. Reach out to us to learn more!</p>
                    <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={()=>navigate('/contact-us')}>Contact Us</Button>
                </EliteTier>
            </Information>
        </Body>
    );
}
 
export default Plan;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    
    > * {
        margin-bottom: 20px;
    }
`;

const BigImage = styled.img`
    width: 75%;
    height: 50%;
    object-fit: cover; 
    margin: 20px;
`;

const InformationSupport = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 1.6;

    > div {
        display: flex;
        flex-direction: column;    
        padding: 0 10px;
        width: 400px;
        text-align: center;
        text-justify: inter-word;
    }
`;

const InfoBlock = styled.div`
    > h4 {
        align-self: center;
        margin-bottom: 10px;
    }
`
const InfoImage = styled.img`
    width: 325px;
    height: 225px;
    margin-bottom: 10px;
` 

const Line = styled.div`
    height: 0;
    width: 80%;
    margin: 80px 0;
    border-bottom: 1px solid gray;
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 1.6;
    margin-bottom: 80px;
    > div {
        display: flex;
        flex-direction: column;    
        padding: 20px 20px;
        width: 400px;
        > h1 {
            align-self: center;
        }
        > p {
            text-align: justify;
            text-justify: inter-word;
        }
        > h3 {
            margin-top: 20px;
            align-self: center;
        }
        > button {
            margin-top: 20px;
            algin-self: center;
        }
        > div {
            margin: 20px 0;
            padding: 0;
            align-self: center;
        }
    }
`;

const List = styled.ul`
    list-style-position: inside;
    list-style-type: square;
    margin: 5px 0px;
    > li {
        margin: 10px 0px;
    }
`

const FreeTier = styled.div`
    > h1 {
        color: green;
    }
    > ul {
        color: green;
    }
`

const PremiumTier = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: gray;
    box-shadow: 5px 10px 18px #888888;
    > h1 {
        color: orange;
    }
    > ul {
        color: orange;
    }
`

const EliteTier = styled.div`
`