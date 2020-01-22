import React from 'react';

// import { makeStyles } from "@material-ui/core/styles";

// componets
import ParallaxAbout from 'components/CustomAbout/ParallaxAbout';
import CustomNavBar from 'components/CustomComponetsPage/CustomNavBar';
import TextCommit from 'components/CustomAbout/TextCommit';
import HowWeAre from 'components/CustomAbout/HowWeAre';
import ImageBodyAbout from 'components/CustomAbout/ImageBodyAbout';
import InTheBox from 'components/CustomAbout/InTheBox';
import ImageAboutBody from 'components/CustomAbout/ImageAboutBody';
import Footer from 'components/CustomComponetsPage/Footer';

// import styles from "assets/jss/material-kit-react/views/components.js";
// const useStyles = makeStyles(styles);


export default function About (props) {
    return(
        <div>
            <CustomNavBar/>
            <ParallaxAbout/>
            <TextCommit/>
            <HowWeAre/>
            <ImageBodyAbout/>
            <InTheBox/>
            <ImageAboutBody/>
            <Footer/>
        </div>
    );
};