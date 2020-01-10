import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function TextMiddle (props){
    const classes = useStyles();    
    return(
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="right">
                    <GridItem xs={12} sm={12} md={8} >
                <p>
                    <div className={classes.typo}>
                        <h2 style={{fontWeight: 'bold', color:'black'}}>
                            <span>
                                <span>Strategy.</span>
                            </span>
                            <span>
                                <span>Design.</span>
                            </span>
                        </h2>
                        <h2 style={{fontWeight: 'bold', color:'black'}}>
                            <span>
                                <span>Content.</span>
                            </span>
                            <span>
                                <span>Technology.</span>
                            </span>
                        </h2>
                    </div>
                </p>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
};