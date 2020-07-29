import React from 'react';
import DrawerComponent from '../components/NewDrawer';
import { Hidden } from '@material-ui/core';


const Contact = () => {
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
            <div>
                <h1 style={style.positioning}>
                    Prices
                </h1>

                <Hidden xsDown>
               <p style={style.notMobileText}>
                    At Bennett’s Driving School we offer affordable and competitive pricing for driving lessons. These lessons can be
                     purchased as a package or you can pay as you go.
            </p>

               <p style={style.notMobileText, {textAlign: "center"}}>
                    Prices effective as of April 1st, 2020.
            </p>

            <ol style={style.notMobileText, {textAlign: "center"}}>One Hour Driving Lesson €35</ol>
                <ol style={style.notMobileText, {textAlign: "center"}}>Two Hour Driving Lesson €60</ol>
                <ol style={style.notMobileText, {textAlign: "center"}}>Six Hour Driving Lesson Bundle €180</ol>
                <ol style={style.notMobileText, {textAlign: "center"}}>Twelve Hour Driving Lesson Bundle €350</ol>
                <ol style={style.notMobileText, {textAlign: "center"}}>Pre-Test €40</ol>
                <ol style={style.notMobileText, {textAlign: "center"}}>Driving Test Car Hire AND 1 Hour* €100</ol>
                <ol style={style.notMobileText, {textAlign: "center"}}>Driving Test Car Hire AND 2 Hours* €130</ol>
                <ol style={style.notMobileText, {textAlign: "center"}}>Other Prices Can Be Made On Request</ol>

               <p style={style.notMobileText, {textAlign: "center"}}>
                    * Time given before exam to practice and calm nerves
            </p>

            
            <h2 style={style.notMobileText, {textAlign: "center", color: "red"}}>
                !!!CANCELLATIONS MADE LESS THAN 24 HOURS BEFORE ARRANGED TIME WILL BE CHARGED FULL LESSON PRICE!!!</h2>

            </Hidden>

            <Hidden smUp>
               <p style={style.mobileText}>
                    At Bennett’s Driving School we offer affordable and competitive pricing for driving lessons. These lessons can be
                     purchased as a package or you can pay as you go.
            </p>

               <p style={style.mobileText, {textAlign: "center"}}>
                    Prices effective as of April 1st, 2020.
            </p>

            <ol style={style.mobileText, {textAlign: "center"}}>One Hour Driving Lesson €35</ol>
                <ol style={style.mobileText, {textAlign: "center"}}>Two Hour Driving Lesson €60</ol>
                <ol style={style.mobileText, {textAlign: "center"}}>Six Hour Driving Lesson Bundle €180</ol>
                <ol style={style.mobileText, {textAlign: "center"}}>Twelve Hour Driving Lesson Bundle €350</ol>
                <ol style={style.mobileText, {textAlign: "center"}}>Pre-Test €40</ol>
                <ol style={style.mobileText, {textAlign: "center"}}>Driving Test Car Hire AND 1 Hour* €100</ol>
                <ol style={style.mobileText, {textAlign: "center"}}>Driving Test Car Hire AND 2 Hours* €130</ol>
                <ol style={style.mobileText, {textAlign: "center"}}>Other Prices Can Be Made On Request</ol>

               <p style={style.mobileText, {textAlign: "center"}}>
                    * Time given before exam to practice and calm nerves
            </p>

            
            <h2 style={style.mobileText, {textAlign: "center", color: "red"}}>
                !!!CANCELLATIONS MADE LESS THAN 24 HOURS BEFORE ARRANGED TIME WILL BE CHARGED FULL LESSON PRICE!!!</h2>
            </Hidden>

            </div>
        </DrawerComponent>
    );
}

export default Contact;