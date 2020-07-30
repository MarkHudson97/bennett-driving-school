import React from 'react';
import DrawerComponent from '../components/NewDrawer';
import { Hidden } from '@material-ui/core';

const About = () => {
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
               About Us
            </h1>

            <Hidden xsDown>
               <p style={style.notMobileText}>
                  Bennett’s Driving School is a Fetac (Level 6) and RSA approved driving school of high standards who are qualified and
                  registered with RSA ADI Unit and are fully insured. At Bennett’s Driving School we welcome the new and not so new
                  drivers, covering the test routes of Navan and Finglas while also doing lessons in Navan, Finglas and surrounding areas.
            </p>

               <p style={style.notMobileText}>
                  Tony Bennett, the driving instructor with over 15 years’ experience, guarantees a friendly and relaxed environment
                  during lessons with his attention completely given to the student. We offer a step-by-step approach when providing
                  lessons which allows the student to learn at their own pace and to not feel rushed by the instructor, allowing for
                  a more successful experience and better long-term learning.
            </p>

               <p style={style.notMobileText}>
                  Car and Jeep driving lessons are provided by us. Lessons are given on a full hour’s basis with picking up and dropping
                  off not included in the hour. Arrangements for pick up and drop off points can be discussed in advance also. Lessons
                  may also be taken in the dual controlled car provided, for your safety and convenience, or if the student wishes
                  they may use their own car either.
            </p>
            </Hidden>

            <Hidden smUp>
               <p style={style.mobileText}>
                  Bennett’s Driving School is a Fetac (Level 6) and RSA approved driving school of high standards who are qualified and
                  registered with RSA ADI Unit and are fully insured. At Bennett’s Driving School we welcome the new and not so new
                  drivers, covering the test routes of Navan and Finglas while also doing lessons in Navan, Finglas and surrounding areas.
            </p>

               <p style={style.mobileText}>
                  Tony Bennett, the driving instructor with over 15 years’ experience, guarantees a friendly and relaxed environment
                  during lessons with his attention completely given to the student. We offer a step-by-step approach when providing
                  lessons which allows the student to learn at their own pace and to not feel rushed by the instructor, allowing for
                  a more successful experience and better long-term learning.
            </p>

               <p style={style.MobileText}>
                  Car and Jeep driving lessons are provided by us. Lessons are given on a full hour’s basis with picking up and dropping
                  off not included in the hour. Arrangements for pick up and drop off points can be discussed in advance also. Lessons
                  may also be taken in the dual controlled car provided, for your safety and convenience, or if the student wishes
                  they may use their own car either.
            </p>
            </Hidden>

         </div>
      </DrawerComponent>

   );
}

export default About;