import React from 'react';

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";


// Components
import CustomNavBar from "components/CustomComponetsPage/CustomNavBar";
import ImageParallax from "components/CustomComponetsPage/Imageparalax";
import TextMiddle from "components/CustomComponetsPage/TextMiddle";
import ImageVideoPart from "components/CustomComponetsPage/ImageVideoPart";
import TextMiddleTwo from "components/CustomComponetsPage/TextMiddleTwo";
import ImageBody from "components/CustomComponetsPage/ImageBody";
import ServicesSection from "components/CustomComponetsPage/ServicesSection";
import BlogSpace from "components/CustomComponetsPage/BlogSpace";
import Footer from "components/CustomComponetsPage/Footer";

// Sections

import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    return (
        <div>
            <CustomNavBar/>
            <ImageParallax/>
            <div className={classNames(classes.main)}>
            <TextMiddle/>
            <ImageVideoPart/>
            <TextMiddleTwo/>
            <ImageBody/>
            </div>
            <ServicesSection/>
            <BlogSpace/>
            <Footer/>
        </div>
    )
};