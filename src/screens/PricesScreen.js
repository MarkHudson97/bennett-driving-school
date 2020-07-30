import React from 'react';
import DrawerComponent from '../components/NewDrawer';
import { Hidden } from '@material-ui/core';

const Price = () => {
    const style = {
        mobileText: {
            fontSize: 15
        },
        mobileTextCentered: {
            fontSize: 15, textAlign: "center"
        },
        mobileTextCenteredRed: {
            fontSize: 15, color: "red", textAlign: "center"
        },
        notMobileText: {
            fontSize: 15, marginLeft: "auto", marginRight: "auto", width: "38em"
        },
        notMobileTextCentered: {
            fontSize: 15, marginLeft: "auto", marginRight: "auto", width: "38em", textAlign: "center"
        },
        notMobileTextCenteredRed: {
            fontSize: 15, marginLeft: "auto", marginRight: "auto", width: "38em", color: "red", textAlign: "center"
        },
        positioning: {
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }
    }
    return (
        <DrawerComponent>
            <div>
                <h1 style={style.positioning}>
                    Prices
                </h1>

                <Hidden xsDown>
                    <p style={style.notMobileText}>
                        At Bennett’s Driving School we offer affordable and competitive pricing for driving lessons. These lessons can be
                        purchased as a package or you can pay as you go.
            </p>

                    <p style={style.notMobileTextCentered}>
                        Prices effective as of April 1st, 2020.
            </p>

                    <ol style={style.notMobileTextCentered}>One Hour Driving Lesson €35</ol>
                    <ol style={style.notMobileTextCentered}>Two Hour Driving Lesson €60</ol>
                    <ol style={style.notMobileTextCentered}>Six Hour Driving Lesson Bundle €180</ol>
                    <ol style={style.notMobileTextCentered}>Twelve Hour Driving Lesson Bundle €350</ol>
                    <ol style={style.notMobileTextCentered}>Pre-Test €40</ol>
                    <ol style={style.notMobileTextCentered}>Driving Test Car Hire AND 1 Hour* €100</ol>
                    <ol style={style.notMobileTextCentered}>Driving Test Car Hire AND 2 Hours* €130</ol>
                    <ol style={style.notMobileTextCentered}>Other Prices Can Be Made On Request</ol>

                    <p style={style.notMobileTextCentered}>
                        * Time given before exam to practice and calm nerves
            </p>


                    <p style={style.notMobileTextCenteredRed}>
                        <b>CANCELLATIONS MADE LESS THAN 24 HOURS BEFORE ARRANGED TIME WILL RESULT IN BEING CHARGED FULL LESSON PRICE</b></p>

                </Hidden>

                <Hidden smUp>
                    <p style={style.mobileText}>
                        At Bennett’s Driving School we offer affordable and competitive pricing for driving lessons. These lessons can be
                        purchased as a package or you can pay as you go.
            </p>

                    <p style={style.mobileTextCentered}>
                        Prices effective as of April 1st, 2020.
            </p>

                    <ol style={style.mobileTextCentered}>One Hour Driving Lesson €35</ol>
                    <ol style={style.mobileTextCentered}>Two Hour Driving Lesson €60</ol>
                    <ol style={style.mobileTextCentered}>Six Hour Driving Lesson Bundle €180</ol>
                    <ol style={style.mobileTextCentered}>Twelve Hour Driving Lesson Bundle €350</ol>
                    <ol style={style.mobileTextCentered}>Pre-Test €40</ol>
                    <ol style={style.mobileTextCentered}>Driving Test Car Hire AND 1 Hour* €100</ol>
                    <ol style={style.mobileTextCentered}>Driving Test Car Hire AND 2 Hours* €130</ol>
                    <ol style={style.mobileTextCentered}>Other Prices Can Be Made On Request</ol>

                    <p style={style.mobileTextCentered}>
                        * Time given before exam to practice and calm nerves
            </p>


                    <p style={style.mobileTextCenteredRed}>
                        <b>CANCELLATIONS MADE LESS THAN 24 HOURS BEFORE ARRANGED TIME WILL RESULT IN BEING CHARGED FULL LESSON PRICE</b></p>
                </Hidden>

            </div>
        </DrawerComponent>
    );
}

export default Price;