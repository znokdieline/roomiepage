import React from 'react';
// import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from 'components/Parallax/Parallax'

import styles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);

export default function ParallaxAbout(props){
    const classes = useStyles();    
    return(
        <div>
            <Parallax image={require("assets/img/home.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.typo}>
                                <h1 style={{fontWeight: 'normal', color:'black'}}>We believe that empathy,<p/>intuitive design and <p/>technology push us all forward.</h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
        </div>
    );
}

