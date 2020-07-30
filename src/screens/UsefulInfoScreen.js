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
        positioning: {
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        },
        linkPositioning: {
            display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontSize: 20
        }
    }
    return (
        <DrawerComponent>
            <div>
                <h1 style={style.positioning}>
                    Useful Information
                </h1>

                <Hidden xsDown>
                    <p style={style.notMobileText}><b><i>Here are some useful links to learn more about the steps you will be taking</i></b></p>

                    <a style={style.linkPositioning} href="https://www.rsa.ie/RSA/Learner-Drivers/Your-learner-permit/The-theory-test/" >Find Information About The Theory Test Here!</a>

                    <a style={style.linkPositioning} href="https://theorytest.ie/" >Book Your Theory Test Here!</a>

                    <a style={style.linkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/The-Driving-Test/Apply-online/" >Book Your Driving Test Here!</a>

                    <a style={style.linkPositioning} href="https://www.ndls.ie/" >Visit The National Driving Licence Service Here!</a>

                    <a style={style.linkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/Driver-Training/Car-Training-EDT/Learning-to-drive-videos/" >Watch Some Learning To Drive Videos By The RSA Here!</a>

                </Hidden>

                <Hidden smUp>
                    <p style={style.mobileText}><b><i>Here are some useful links to learn more about the steps you will be taking</i></b></p>

                    <a style={style.linkPositioning} href="https://www.rsa.ie/RSA/Learner-Drivers/Your-learner-permit/The-theory-test/" >Information about the Theory Test Here!</a>

                    <a style={style.linkPositioning} href="https://theorytest.ie/" >Book Your Theory Test Here!</a>

                    <a style={style.linkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/The-Driving-Test/Apply-online/" >Book Your Driving Test Here!</a>

                    <a style={style.linkPositioning} href="https://www.ndls.ie/" >Visit the National Driving Licence Service Here!</a>

                    <a style={style.linkPositioning} href="https://www.rsa.ie/en/RSA/Learner-Drivers/Driver-Training/Car-Training-EDT/Learning-to-drive-videos/" >Watch some Learning To Drive videos by the RSA Here!</a>
                </Hidden>

            </div>
        </DrawerComponent>
    );
}

export default Useful;