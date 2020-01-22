import React from 'react';

// import { makeStyles } from "@material-ui/core/styles";
// import classNames from "classnames";

// componets
import CustomNavBar from "components/CustomComponetsPage/CustomNavBar";
import WorkModuleCard from 'components/CustomWork/WorkModuleCard';
import Footer from 'components/CustomComponetsPage/Footer'

// import styles from "assets/jss/material-kit-react/views/components.js";
// const useStyles = makeStyles(styles);

export default function WorksLab(props){
    // const classes = useStyles();
    return(
        <div>
            <CustomNavBar/>
            <WorkModuleCard/>
            <Footer/>
        </div>
    )
}