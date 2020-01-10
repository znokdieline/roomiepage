import React from 'react';
// import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import ImageBack from "assets/img/office.jpg"

import styles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);

export default function ImageBody(props){
    const classes = useStyles();    
    return(
        <div>
            <div className={classes.section}>
                <GridContainer>
                    <GridItem>
                    <img src={ImageBack} alt='off' width="100%" />
                    </GridItem>
                </GridContainer>
            </div>
    </div>
    );
}

