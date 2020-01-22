import React from 'react';
// import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from 'components/Parallax/Parallax'

import styles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);

export default function ParallaxAproach(props){
    const classes = useStyles();    
    return(
        <div>
            <Parallax image={require("assets/img/home.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.typo}>
                                <h1 style={{fontWeight: 'normal', color:'black'}}>We want the world to love<p/>& understand your brand<p/>as much as you do.</h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
        </div>
    );
}

