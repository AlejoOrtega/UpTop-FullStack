import React from 'react';
import uptop from '../resources/images/uptop.png'
import { useSelector } from 'react-redux';
import { joinPlan } from '../components/utils/fetchs';

const Plan = () => {
    const currentUser = useSelector(state => state.user.value)

    const onJoinPlan = (typeOfPlan) => {
        joinPlan(typeOfPlan)
    }
    return ( 
        <>
            <img src={uptop} alt='uptop'/>
            <section style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                 <h4>Standard</h4>
                 <h1>Free</h1>

                 <p>Perfect for individuals that are interested in trading. This subscription includes:</p>
                 <ul>
                    <li>General Chat Access</li>
                    <li>Watchlist Access</li>
                    <li>Live News and Report Access</li>
                    <li>Trading Gains Page</li>
                 </ul>
                 { currentUser? <button onClick={() =>onJoinPlan('Free')}>Join Today!</button> : <h3>Login to join</h3> }
                </div>

                <div>
                 <h4>Premium</h4>
                 <h1>$35</h1>

                 <p>Perfect for Traders that want to take their experience to the next level and the full support of the trading community. This subscription includes:</p>
                 <ul>
                    <li>Free benefits</li>
                    <li>Access to Trading Signals 24/7</li>
                    <li>Access to Training Content</li>
                    <li>Community Zoom Calls</li>
                    <li>Live Trading Sessions during Market Hours</li>
                    <li>Access to a One-on- One Trading Coach</li>
                    <li>Monthly Giveaways</li>
                    <li>Access to Local Community Events hosted by UP TOP TRADING COMMUNITY</li>
                 </ul>
                 {currentUser? <button onClick={()=> onJoinPlan('Premium')}>Join Today!</button> : <h3>Login to join</h3> }
                </div>
                
                <div>
                 <h4>Elite</h4>
                 <h1>Please Contact Us</h1>

                 <p>This program is on a case by case basis and is completely designed for you.  Not all traders learn the same and we acknowledge that by tailoring our program around your personality, goals and weekly trading hours. An intuitive approach in helping you learn effectively and efficiently. Reach out to us to learn more!</p>
                 <button>Contact Us</button>
                </div>
            </section>
        </>
    );
}
 
export default Plan;