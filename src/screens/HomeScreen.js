import React, { Fragment } from 'react';

import DrawerComponent from '../components/NewDrawer';
import Car from '../images/car.jpg';
import ADI from '../images/adi.png';
import Token from '../images/token.PNG';
import Facebook from '../images/facebook.png';
import { Hidden } from '@material-ui/core';

const Home = () => {
    const style = {
        mobileText: {
            fontSize: 15
        },
        notMobileText: {
            fontSize: 15, marginLeft: "auto", marginRight: "auto", width: "38em"
        },
        positioning: {
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }
    }

    return (
        <DrawerComponent>
            <div >
                <h1 style={style.positioning}>
                    Home
                </h1>

                <Hidden xsDown>
                    <div style={style.positioning}>
                        <img src={Car} alt="image of car" width="350" />
                    </div>

                    <p style={style.notMobileText}>
                        Tony Bennett of Bennett’s Driving School has over 15 years of experience, he is licensed to train drivers of cars (B),
                        trucks (C) and artic vehicles (CE). Flexibility is a huge part of Tony’s business and a large factor to his success.
                        Absolute beginners are very warmly welcomed at Bennett’s Driving School, everyone has to start somewhere! Nervous
                        students are not an irregular customer to Tony either and over his 15+ years he has met people from all backgrounds
                        and successfully tutored them in being good drivers and passing their driving tests, many first time too. His door
                        to door work model is another factor in his success as he has no issues in driving to his student’s door to collect
                        them and start the lesson from there to make it easier and more comfortable for the learner.
                    </p>

                    <p style={style.notMobileText}>
                        Along with providing EDT (Essential Driver Training), Tony also provides pre-tests in building up for the student’s
                        driving test to give the learner a feeling for how the driving exam is and what they will be expected to do in the
                        official test. Tony’s students from Dublin mostly choose the Finglas route and test centre while his Meath
                        students test in the Navan test centre with that route being highly familiar for Tony as he keeps up to date
                        with any changes that happen.
                    </p>

                    <div style={style.positioning}>
                        <img src={ADI} alt="ADI Logo" width="200" />
                        <a href="https://www.facebook.com/tonybennett.ie/" target="_blank">
                            <img src={Facebook} alt="Facebook Logo" width="200" />
                        </a>
                        <img src={Token} alt="token" width="200" />
                    </div>
                </Hidden>

                <Hidden smUp>
                    <div style={style.positioning}>
                        <img src={Car} alt="image of car" width="270" />
                    </div>

                    <p style={style.mobileText}>
                        Tony Bennett of Bennett’s Driving School has over 15 years of experience, he is licensed to train drivers of cars (B),
                        trucks (C) and artic vehicles (CE). Flexibility is a huge part of Tony’s business and a large factor to his success.
                        Absolute beginners are very warmly welcomed at Bennett’s Driving School, everyone has to start somewhere! Nervous
                        students are not an irregular customer to Tony either and over his 15+ years he has met people from all backgrounds
                        and successfully tutored them in being good drivers and passing their driving tests, many first time too. His door
                        to door work model is another factor in his success as he has no issues in driving to his student’s door to collect
                        them and start the lesson from there to make it easier and more comfortable for the learner.
                    </p>

                    <p style={style.mobileText}>
                        Along with providing EDT (Essential Driver Training), Tony also provides pre-tests in building up for the student’s
                        driving test to give the learner a feeling for how the driving exam is and what they will be expected to do in the
                        official test. Tony’s students from Dublin mostly choose the Finglas route and test centre while his Meath
                        students test in the Navan test centre with that route being highly familiar for Tony as he keeps up to date
                        with any changes that happen.
                    </p>

                    <div style={style.positioning}>
                        <img src={ADI} alt="ADI Logo" width="150" />
                    </div>

                    <div style={style.positioning}>
                        <a href="https://www.facebook.com/tonybennett.ie/" target="_blank">
                            <img src={Facebook} alt="Facebook Logo" width="150" />
                        </a>
                    </div>

                    <div style={style.positioning}>
                        <img src={Token} alt="token" width="150" />
                    </div>

                </Hidden>



            </div>
        </DrawerComponent>
    );
}

export default Home;