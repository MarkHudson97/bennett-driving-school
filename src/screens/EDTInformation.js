import React from 'react';
import DrawerComponent from '../components/NewDrawer';
import { Hidden } from '@material-ui/core';

const Useful = () => {
    const style = {
        mobileText: {
            fontSize: 15
        },
        notMobileText: {
            fontSize: 15, marginLeft: "auto", marginRight: "auto", width: "38em"
        },
        notMobileTextCentered: {
            fontSize: 15, marginLeft: "auto", marginRight: "auto", width: "38em", textAlign: "center"
        },
        positioning: {
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        },
        notMobileLinkPositioning: {
            display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontSize: 20
        },
        mobileLinkPositioning: {
            display: 'flex', justifyContent: 'center', textDecoration: 'none', fontSize: 15, textAlign: 'center'
        }
    }
    return (
        <DrawerComponent>
            <div>
                <h1 style={style.positioning}>
                    Information about EDT
                </h1>

                <h2 style={style.positioning}>
                    What is EDT and how does it work?
                </h2>

                <Hidden xsDown>
                    <p style={style.notMobileText}>Essential Driver Training (EDT) is a training course that teaches fundamental driving skills
                    to learner car drivers and improves their knowledge and understanding of road safety post theory test completion.
                    EDT is mandatory for all learners who received their first driving permit on or after 4 April 2011. The course consists
                       of 12, 1-hour lessons or 6 two hour lessons which must be completed before the driving test.</p>

                    <p style={style.notMobileText}>Each lesson has a set of expected outcomes describing what you should be able to do by the end
                    of said lesson. It is important to remember that the EDT course alone is not enough to make you a competent driver and
                    additional lessons and practice with your instructor or a qualified driver with two years experience can be used to
                       bring your skills to a suitable level before progressing on to the next EDT course lesson.</p>

                    {/* <p style={style.notMobileText}>Each lesson has a set of expected outcomes describing what you should be able to do by the end of said lesson.
                      It is important to remember that the EDT course alone is not enough to make you a competent driver and additional lessons and practice with your instructor or a qualified driver with two years experience can be used to bring your skills to a suitable level before progressing on to the next EDT course lesson.</p> */}

                    <ol style={style.notMobileTextCentered}>Essential Driver Training Syllabus</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 1:   Car Controls & Safety Checks</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 2:   Correct Positioning</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 3:   Changing Direction</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 4:   Progression Management</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 5:   Correct Positioning</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 6:   Anticipation & Reaction</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 7:   Sharing the Road</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 8:   Driving Safely Through Traffic</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 9:   Changing Direction (More Complex Situations)</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 10: Speed Management</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 11: Driving Calmly</ol>
                    <ol style={style.notMobileTextCentered}>Lesson 12: Night Driving</ol>

                    <p style={style.notMobileText}><b><i>Here are some useful links to learn more about the steps you will be taking</i></b></p>

                    <a style={style.notMobileLinkPositioning} href="https://www.rsa.ie/RSA/Learner-Drivers/Your-learner-permit/The-theory-test/" target="_blank">Find Information About The Theory Test Here!</a>

                    <a style={style.notMobileLinkPositioning} href="https://theorytest.ie/" target="_blank">Book Your Theory Test Here!</a>

                    <a style={style.notMobileLinkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/The-Driving-Test/Apply-online/" target="_blank">Book Your Driving Test Here!</a>

                    <a style={style.notMobileLinkPositioning} href="https://www.ndls.ie/" target="_blank" >Visit The National Driving Licence Service Here!</a>

                </Hidden>

                <Hidden smUp>
                    <p style={style.mobileText}>Essential Driver Training (EDT) is a training course that teaches fundamental driving skills
                    to learner car drivers and improves their knowledge and understanding of road safety post theory test completion.
                    EDT is mandatory for all learners who received their first driving permit on or after 4 April 2011. The course consists
                       of 12, 1-hour lessons or 6 two hour lessons.</p>

                    <p style={style.mobileText}>Each lesson has a set of expected outcomes describing what you should be able to do by the end
                    of said lesson. It is important to remember that the EDT course alone is not enough to make you a competent driver and
                    additional lessons and practice with your instructor or a qualified driver with two years experience can be used to
                       bring your skills to a suitable level before progressing on to the next EDT course lesson.</p>

                    {/* <p style={style.mobileText}>Each lesson has a set of expected outcomes describing what you should be able to do by the end of said lesson.
                      It is important to remember that the EDT course alone is not enough to make you a competent driver and additional lessons and practice with your instructor or a qualified driver with two years experience can be used to bring your skills to a suitable level before progressing on to the next EDT course lesson.</p> */}

                    <ol style={style.mobileText}>Essential Driver Training Syllabus</ol>
                    <ol style={style.mobileText}>Lesson 1:   Car Controls & Safety Checks</ol>
                    <ol style={style.mobileText}>Lesson 2:   Correct Positioning</ol>
                    <ol style={style.mobileText}>Lesson 3:   Changing Direction</ol>
                    <ol style={style.mobileText}>Lesson 4:   Progression Management</ol>
                    <ol style={style.mobileText}>Lesson 5:   Correct Positioning</ol>
                    <ol style={style.mobileText}>Lesson 6:   Anticipation & Reaction</ol>
                    <ol style={style.mobileText}>Lesson 7:   Sharing the Road</ol>
                    <ol style={style.mobileText}>Lesson 8:   Driving Safely Through Traffic</ol>
                    <ol style={style.mobileText}>Lesson 9:   Changing Direction (More Complex Situations)</ol>
                    <ol style={style.mobileText}>Lesson 10: Speed Management</ol>
                    <ol style={style.mobileText}>Lesson 11: Driving Calmly</ol>
                    <ol style={style.mobileText}>Lesson 12: Night Driving</ol>

                    <p style={style.mobileText}><b><i>Here are some useful links to learn more about the steps you will be taking</i></b></p>

                    <a style={style.mobileLinkPositioning} href="https://www.rsa.ie/RSA/Learner-Drivers/Your-learner-permit/The-theory-test/" target="_blank">Find Information About The Theory Test Here!</a>
                    <br />
                    <a style={style.mobileLinkPositioning} href="https://theorytest.ie/" target="_blank">Book Your Theory Test Here!</a>
                    <br />
                    <a style={style.mobileLinkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/The-Driving-Test/Apply-online/" target="_blank">Book Your Driving Test Here!</a>
                    <br />
                    <a style={style.mobileLinkPositioning} href="https://www.ndls.ie/" target="_blank">Visit The National Driving Licence Service Here!</a>
                </Hidden>

            </div>
        </DrawerComponent>
    );
}

export default Useful;