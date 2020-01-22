import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";


// componets
import CustomNavBar from "components/CustomComponetsPage/CustomNavBar";
import ParallaxAproach from "components/CustomApproach/ParallaxAproach";
import OurServicesAp from "components/CustomApproach/OurServicesAp";
import GuidePrincipal from "components/CustomApproach/GuidePrincipal";
import Aboutimagebody from "components/CustomApproach/Aboutimagebody";
import Footer from "components/CustomComponetsPage/Footer";
import Resources from "components/CustomApproach/Resources";



import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);


export default function About (props) {
    const classes = useStyles();
    return(
        <div>
            <CustomNavBar/>
            <ParallaxAproach/>
            <div className={classNames(classes.main)}>
                <OurServicesAp/>
                <GuidePrincipal/>
            </div>
            <Aboutimagebody/>
            <div className={classNames(classes.main)}>
                <Resources/>
                <Footer/>
            </div>
        </div>
    );
};