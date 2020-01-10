import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ImageOne from "assets/img/laptop.png"
import ImageTwo from "assets/img/cs-ios.png"

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function TextMiddleTwo (props){
    const classes = useStyles();
    return(
        <div style={{flexDirection:'row'}}>
            <div style={{color: 'white', backgroundColor:'#4f35d9', alignItems: "center", height:"600px", }} className={classes.main}>
                <GridContainer justify="center" alignItems="center">
                    <img src={ImageOne} alt='comp' width="400px" className={classes.left}/>
                    <div className={classes.typo}>
                    <GridItem>
                        <h1 className={classes.title}>Field Museum</h1>
                        <h3>Helping the world’s fourth largest natural <p/>history museum find its next evolution.</h3>
                    </GridItem>
                    </div>
                    <img src={ImageTwo} alt='comp' width="200px" className={classes.left}/>
                </GridContainer>
            </div>
        </div>
    );
};
