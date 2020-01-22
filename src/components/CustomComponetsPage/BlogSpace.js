import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ImageBack2 from "assets/img/blog.jpg"

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function BlogSpace(props){
    const classes = useStyles();
    return(
        <div>
            <div className={classes.main}>
                <GridContainer>
                    <GridItem>
                    <img src={ImageBack2} alt='off' width="100%" />
                    </GridItem>
                </GridContainer>
            </div>
    </div>
    );
};
