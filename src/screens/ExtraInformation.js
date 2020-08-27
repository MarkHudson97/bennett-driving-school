import React from 'react';
import DrawerComponent from '../components/NewDrawer';
import { Hidden } from '@material-ui/core';
import Lesson from '../images/lesson.jpg';

const Extra = () => {
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
            display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none'
        },
        mobileLinkPositioning: {
            display: 'flex', justifyContent: 'center', textDecoration: 'none', fontSize: 15, textAlign: 'center'
        }
    }
    return (
        <DrawerComponent>
            <div>
                <h1 style={style.positioning}>
                    Extra Information
                </h1>

                <Hidden xsDown>
                    <div style={style.positioning}>
                        <img src={Lesson} alt="lesson image" width="350" />
                    </div>

                    <h2 style={style.positioning}>
                        Learning to drive videos
                    </h2>

                    <p style={style.notMobileText}>The RSA have made a series of ‘Learning to Drive’ videos explaining everything you need to
                    know about the practical driving test and becoming a safe and socially responsible driver. There are 13 videos in the series,
                    each of which deals with a different aspect of the ‘learning to drive’ process for driving a car, motorcycle, bus, or truck.
                       They provide additional support and guidance to protect some of our most vulnerable road users.</p>

                    <b><i><a style={style.notMobileLinkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/Driver-Training/Car-Training-EDT/Learning-to-drive-videos/" target="_blank">Click here to see these videos!</a></i></b>
                </Hidden>

                <Hidden smUp>
                    <div style={style.positioning}>
                        <img src={Lesson} alt="lesson image" width="270" height="150" />
                    </div>

                    <h2 style={style.positioning}>
                        Learning to drive videos
                    </h2>

                    <p style={style.mobileText}>The RSA have made a series of ‘Learning to Drive’ videos explaining everything you need to
                    know about the practical driving test and becoming a safe and socially responsible driver. There are 13 videos in the series,
                    each of which deals with a different aspect of the ‘learning to drive’ process for driving a car, motorcycle, bus, or truck.
                       They provide additional support and guidance to protect some of our most vulnerable road users.</p>

                    <b><i><a style={style.mobileLinkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/Driver-Training/Car-Training-EDT/Learning-to-drive-videos/" target="_blank">Click here to see these videos!</a></i></b>
                </Hidden>

                <h2 style={style.positioning}>
                    What is a sponsor and how do they work?
                </h2>

                <Hidden xsDown>
                    <p style={style.notMobileText}>A sponsor is an experienced driver who accompanies a learner driver when practising Essential
                    Driver Training (EDT) lessons, and assists learners in becoming better, safer drivers. Sponsors are often family members or
                    close friends of learner drivers.
                     </p>

                    <p style={style.notMobileText}>The RSA’s EDT programme has identified the sponsor as playing a key
                    role in safe driving education. EDT is a crucial component of the Graduated Driver Licensing (GDL) system, which aims to
                    provide new drivers the opportunity to gain driving experience, skills, and maturity.
                     </p>

                    <p style={style.notMobileText}>Research tells us that accompanying drivers can have a real impact on the learning to drive
                    process. Although you are not expected to teach the learner driver, by offering support and encouragement, you will increase
                    the learner’s enthusiasm for practicing driving. In your interactions with the learner driver, you should:
                     </p>

                    <ol>
                        <li style={style.notMobileText}>Show interest in their progress</li>
                        <li style={style.notMobileText}>Encourage them</li>
                        <li style={style.notMobileText}>Assure them they can rely on your experience in difficult road situations</li>
                        <li style={style.notMobileText}>Reinforce that safe driving takes lots of persistence, patience and practice</li>
                    </ol>

                    <p style={style.notMobileText}>You should only facilitate practice on topics already covered by the Approved Driving Instructor
                    (ADI), and should not seek to teach your learner anything that has not yet been recommended by the instructor.
                     </p>

                    <p style={style.notMobileText}>When a learner starts the EDT course, they will be given an EDT logbook in which they and the
                    ADI record details of each lesson. The logbook also has a page for sponsors to record details of any practice undertaken by
                    the learner.
                     </p>

                    <p style={style.notMobileText}>You can use the information in the learner’s logbook to help plan out practice sessions and to
                    pinpoint areas of learning to focus on.
                     </p>
                </Hidden>

                <Hidden smUp>
                    <p style={style.mobileText}>A sponsor is an experienced driver who accompanies a learner driver when practising Essential
                    Driver Training (EDT) lessons, and assists learners in becoming better, safer drivers. Sponsors are often family members or
                    close friends of learner drivers.
                     </p>

                    <p style={style.mobileText}>The RSA’s EDT programme has identified the sponsor as playing a key
                    role in safe driving education. EDT is a crucial component of the Graduated Driver Licensing (GDL) system, which aims to
                    provide new drivers the opportunity to gain driving experience, skills, and maturity.
                     </p>

                    <p style={style.mobileText}>Research tells us that accompanying drivers can have a real impact on the learning to drive
                    process. Although you are not expected to teach the learner driver, by offering support and encouragement, you will increase
                    the learner’s enthusiasm for practicing driving. In your interactions with the learner driver, you should:
                     </p>

                    <ol>
                        <li style={style.mobileText}>Show interest in their progress</li>
                        <li style={style.mobileText}>Encourage them</li>
                        <li style={style.mobileText}>Assure them they can rely on your experience in difficult road situations</li>
                        <li style={style.mobileText}>Reinforce that safe driving takes lots of persistence, patience and practice</li>
                    </ol>

                    <p style={style.mobileText}>You should only facilitate practice on topics already covered by the Approved Driving Instructor
                    (ADI), and should not seek to teach your learner anything that has not yet been recommended by the instructor.
                     </p>

                    <p style={style.mobileText}>When a learner starts the EDT course, they will be given an EDT logbook in which they and the
                    ADI record details of each lesson. The logbook also has a page for sponsors to record details of any practice undertaken by
                    the learner.
                     </p>

                    <p style={style.mobileText}>You can use the information in the learner’s logbook to help plan out practice sessions and to
                    pinpoint areas of learning to focus on.
                     </p>
                </Hidden>
            </div>
        </DrawerComponent>
    );
}

export default Extra;